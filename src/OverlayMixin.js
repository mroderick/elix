import { merge } from './updates.js';
import Symbol from './Symbol.js';
import symbols from './symbols.js';


const appendedToDocumentKey = Symbol('appendedToDocument');
const assignedZIndexKey = Symbol('assignedZIndex');
const restoreFocusToElementKey = Symbol('restoreFocusToElement');


/**
 * This mixin makes an opened element appear on top of other page elements, then
 * hide or remove it when closed. This mixin and `OpenCloseMixin` form the core
 * overlay behavior for Elix components.
 * 
 * The mixin expects the component to provide:
 * 
 * * An invocation of `symbols.beforeEffect` and `symbols.afterEffect` methods
 *   for both "opening" and “closing” effects. This is generally implemented by
 *   using `OpenCloseMixin`.
 * 
 * The mixin provides these features to the component:
 * 
 * 1. Appends the element to the DOM when opened, if it’s not already in the
 *    DOM.
 * 2. Can calculate and apply a default z-index that in many cases will be
 *    sufficient to have the overlay appear on top of other page elements.
 * 3. Makes the element visible before any opening effects begin, and hides it
 *    after any closing effects complete.
 * 4. Remembers which element had the focus before the overlay was opened, and
 *    tries to restore the focus there when the overlay is closed.
 * 5. A `teleportToBodyOnOpen` property that optionally moves an element already
 *    in the DOM to the end of the document body when opened. This is intended
 *    only to address challenging overlay edge cases; see the discussion below.
 * 
 * If the component defines the following optional members, the mixin will take
 * advantage of them:
 * 
 * * An effect API compatible with `TransitionEffectMixin`. This allows an
 *   element to provide opening/closing effects. The effects are _not_ applied
 *   if the `opened` property is set in markup when the document is loading. The
 *   use of transition effects is not required. It is not necessary for a
 *   component to use `TransitionEffectMixin` or a compatible mixin. In that
 *   case, `OverlayMixin` will simply perform its work synchronously.
 * 
 * All other aspects of overlay behavior are handled by other mixins and
 * wrappers. For example, addition of a backdrop element behind the overlay is
 * handled by `BackdropWrapper`. Intercepting and responding to UI events is
 * handled by `PopupModalityMixin` and `DialogModalityMixin`. Management of
 * asynchronous visual opening/closing effects are provided by
 * `TransitionEffectMixin`.
 * 
 * @module OverlayMixin
 */
export default function OverlayMixin(Base) {

  // The class prototype added by the mixin.
  class Overlay extends Base {

    constructor() {
      super();
      this.addEventListener('blur', event => {
        // What has the focus now?
        const newFocusedElement = event.relatedTarget || document.activeElement;
        if (newFocusedElement !== document.body) {
          if (this.opened) {
            // The user has most likely clicked on something in the background
            // of a modeless overlay. Remember that element, and restore focus
            // to it when the overlay finishes closing.
            this[restoreFocusToElementKey] = newFocusedElement;
          } else {
            // A blur event fired, but the overlay closed itself before the blur
            // event could be processed. In closing, we may have already
            // restored the focus to the element that originally invoked the
            // overlay. Since the user has clicked somewhere else to close the
            // overlay, put the focus where they wanted it.
            newFocusedElement.focus();
            this[restoreFocusToElementKey] = null;
          }
        }
      });
    }

    componentDidMount() {
      if (super.componentDidMount) { super.componentDidMount(); }
      updateOverlay(this);
    }

    componentDidUpdate(previousState) {
      if (super.componentDidUpdate) { super.componentDidUpdate(previousState); }
      updateOverlay(this);

      // If we're finished closing an overlay that was automatically added to
      // the document, remove it now. Note: we only do this when the component
      // updates, not when it mounts, because we don't want an
      // automatically-added element to be immediately removed during its
      // connectedCallback.
      if (this.closeFinished && this[appendedToDocumentKey]) {
        this[appendedToDocumentKey] = false;
        this.parentNode.removeChild(this);
      }
    }

    async toggle(opened = !this.opened) {
      if (super.toggle) { await super.toggle(opened); }
      autoConnectToDocument(this, opened);
    }

    get updates() {
      const base = super.updates || {};
      const original = this.state.original;

      // We'd like to just use the `hidden` attribute, but Edge/IE has trouble
      // with that: if the hidden attribute is removed from an overlay to
      // display it, Edge/IE may not paint it correctly. And a side-effect
      // of styling with the hidden attribute is that naive styling of the
      // component from the outside (to change to display: flex, say) will
      // override the display: none implied by hidden. To work around both
      // these problems, we use display: none when the overlay is closed.
      const display = this.closeFinished ?
        'none' :
        base.style && base.style.display;

      let zIndex;
      if (closed) {
        zIndex = original.style['z-index'];
        this[assignedZIndexKey] = null;
      } else {
        zIndex = original.style['z-index'] ||
          base.style && base.style['z-index'] ||
          this[assignedZIndexKey];
        if (!zIndex) {
          zIndex = maxZIndexInUse() + 1;
          // Remember that we assigned a z-index for this component.
          this[assignedZIndexKey] = zIndex;
        }
      }

      return merge(base, {
        style: {
          display,
          'z-index': zIndex
        }
      });
    }
  }

  return Overlay;
}


function autoConnectToDocument(element, connect) {
  if (connect && !element.isConnected) {
    // Overlay isn't in document yet.
    element[appendedToDocumentKey] = true;
    document.body.appendChild(element);
  }
}


/*
 * Return the highest z-index currently in use in the document's light DOM.
 * 
 * This calculation looks at all light DOM elements, so is theoretically
 * expensive. That said, it only runs when an overlay is opening, and is only used
 * if an overlay doesn't have a z-index already. In cases where performance is
 * an issue, this calculation can be completely circumvented by manually
 * applying a z-index to an overlay.
 */
function maxZIndexInUse() {
  const elements = document.body.querySelectorAll('*');
  const zIndices = Array.prototype.map.call(elements, element => {
    const style = getComputedStyle(element);
    let zIndex = 0;
    if (style.position !== 'static' && style.zIndex !== 'auto') {
      const parsed = style.zIndex ? parseInt(style.zIndex) : 0;
      zIndex = !isNaN(parsed) ? parsed : 0;
    }
    return zIndex;
  });
  return Math.max(...zIndices);
}


// Update the overlay following a mount or update.
function updateOverlay(element) {
  if (element.state.opened) {
    // Opened
    if (!element[restoreFocusToElementKey] && document.activeElement !== document.body) {
      // Remember which element had the focus before we were opened.
      element[restoreFocusToElementKey] = document.activeElement;
    }
    element.focus();
  } else {
    // Closed
    if (element[restoreFocusToElementKey]) {
      // Restore focus to the element that had the focus before the overlay was
      // opened.
      element[restoreFocusToElementKey].focus();
      element[restoreFocusToElementKey] = null;
    }
    if (element.closeFinished) {
      // TODO
      // if (element[closeResolveKey]) {
      //   element[closeResolveKey](element.state.result);
      //   element[closeResolveKey] = null;
      //   element[closePromiseKey] = null;
      // }
    }
  }
}
