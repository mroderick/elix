import symbols from './symbols.js';


/**
 * Mixin which adds single-selection semantics for items in a list.
 *
 * This mixin expects a component to provide an `items` Array or NodeList of
 * all elements in the list.
 *
 * This mixin tracks a single selected item in the list, and provides means to
 * get and set that state by item position (`selectedIndex`) or item identity
 * (`selectedItem`). The selection can be moved in the list via the methods
 * `selectFirst`, `selectLast`, `selectNext`, and `selectPrevious`.
 *
 * This mixin does not produce any user-visible effects to represent
 * selection.
 *
 * @module SingleSelectionMixin
 */
export default function SingleSelectionMixin(Base) {

  // The class prototype added by the mixin.
  class SingleSelection extends Base {

    /**
     * True if the selection can be moved to the next item, false if not (the
     * selected item is the last item in the list).
     *
     * @type {boolean}
     */
    get canSelectNext() {
      const count = this.items ? this.items.length : 0;
      const selectedIndex = this.state.selectedIndex;
      return count === 0 ?
        false :
        this.state.selectionWraps || selectedIndex < 0 || selectedIndex < count - 1;
    }

    /**
     * True if the selection can be moved to the previous item, false if not
     * (the selected item is the first one in the list).
     *
     * @type {boolean}
     */
    get canSelectPrevious() {
      const count = this.items ? this.items.length : 0;
      const selectedIndex = this.state.selectedIndex;
      return count === 0 ?
        false :
        this.state.selectionWraps || selectedIndex < 0 || selectedIndex > 0;
    }

    get defaultState() {
      return Object.assign({}, super.defaultState, {
        selectedIndex: -1,
        selectionRequired: false,
        selectionWraps: false
      });
    }

    componentDidMount() {
      if (super.componentDidMount) { super.componentDidMount(); }
      // If the current state implies selection (e.g., via selectionRequired),
      // set the selection now.
      trackSelectedItem(this);
    }

    componentDidUpdate(previousState) {
      if (super.componentDidUpdate) { super.componentDidUpdate(previousState); }

      // TODO: Don't raise event if we're going to immediately change the index
      // in trackSelectedItem below.
      const selectedIndex = this.state.selectedIndex;
      if (selectedIndex !== previousState.selectedIndex && this[symbols.raiseChangeEvents]) {
        const event = new CustomEvent('selected-index-changed', {
          detail: { selectedIndex }
        });
        this.dispatchEvent(event);
      }
      
      // In case selected item changed position or was removed.
      trackSelectedItem(this);
    }

    itemCalcs(item, index) {
      const base = super.itemCalcs ? super.itemCalcs(item, index) : null;
      return Object.assign({}, base, {
        selected: index === this.state.selectedIndex
      });
    }

    /**
     * Select the first item in the list.
     *
     * @returns {Boolean} True if the selection changed, false if not.
     */
    selectFirst() {
      if (super.selectFirst) { super.selectFirst(); }
      return this.updateSelectedIndex(0);
    }

    /**
     * The index of the currently-selected item, or -1 if no item is selected.
     * 
     * @type {number}
     */
    get selectedIndex() {
      return this.state.selectedIndex;
    }
    set selectedIndex(selectedIndex) {
      const parsedIndex = typeof selectedIndex === 'string' ?
        parseInt(selectedIndex) :
        selectedIndex;
      this.updateSelectedIndex(parsedIndex);
    }

    /**
     * The currently-selected item, or null if no item is selected.
     * 
     * @type {Element|null}
     */
    get selectedItem() {
      return this.items && this.items[this.state.selectedIndex];
    }
    set selectedItem(selectedItem) {
      if (!this.items) {
        return;
      }
      const index = this.items.indexOf(selectedItem);
      if (index >= 0) {
        this.updateSelectedIndex(index);
      }
    }

    /**
     * True if the list should always have a selection (if it has items).
     *
     * @type {boolean}
     * @default false
     */
    get selectionRequired() {
      return this.state.selectionRequired;
    }
    set selectionRequired(selectionRequired) {
      this.setState({
        selectionRequired: String(selectionRequired) === 'true'
      });
    }

    /**
     * True if selection navigations wrap from last to first, and vice versa.
     *
     * @type {boolean}
     * @default false
     */
    get selectionWraps() {
      return this.state.selectionWraps;
    }
    set selectionWraps(selectionWraps) {
      this.setState({
        selectionWraps: String(selectionWraps) === 'true'
      });
    }

    /**
     * Select the last item in the list.
     *
     * @returns {Boolean} True if the selection changed, false if not.
     */
    selectLast() {
      if (super.selectLast) { super.selectLast(); }
      return this.updateSelectedIndex(this.items.length - 1);
    }

    /**
     * Select the next item in the list.
     *
     * If the list has no selection, the first item will be selected.
     *
     * @returns {Boolean} True if the selection changed, false if not.
     */
    selectNext() {
      if (super.selectNext) { super.selectNext(); }
      return this.updateSelectedIndex(this.state.selectedIndex + 1);
    }

    /**
     * Select the previous item in the list.
     *
     * If the list has no selection, the last item will be selected.
     *
     * @returns {Boolean} True if the selection changed, false if not.
     */
    selectPrevious() {
      if (super.selectPrevious) { super.selectPrevious(); }
      const newIndex = this.items && this.state.selectedIndex < 0 ?
        this.items.length - 1 :     // No selection yet; select last item.
        this.state.selectedIndex - 1;
      return this.updateSelectedIndex(newIndex);
    }

    /**
     * Update `this.state.selectedIndex` and return true if the index was updated.
     * This returns false if there are no items, or if the indicated index is
     * already selected.
     * 
     * If an index is supplied that is outside the bounds of the `items` array,
     * the closest item will be selected. If `this.state.selectionWraps` is set,
     * the index will wrap around. E.g., attempting to select an index of 3 in
     * a 3-item list will select the 0th item.
     * 
     * @param {number} index - the index to select
     */
    // TODO: Make Symbol
    updateSelectedIndex(index) {

      const items = this.items;
      const count = items ? items.length : 0;

      let selectedIndex;
      if (items === null) {
        // No items yet. It's possible we're still waiting for items. We'll set
        // the selectedIndex state so that, if/when items do arrive, we can
        // select the appropriate item.
        selectedIndex = index;
      } else if (this.state.selectionWraps) {      
        // Wrap the index.
        // JavaScript mod doesn't handle negative numbers the way we want to wrap.
        // See http://stackoverflow.com/a/18618250/76472
        selectedIndex = ((index % count) + count) % count;
      } else {
        // Don't wrap, force index within bounds of -1 (no selection) to
        // the array length - 1.
        selectedIndex = Math.max(Math.min(index, count - 1), -1);
      }
      
      const changed = this.state.selectedIndex !== selectedIndex;
      if (changed) {
        this.setState({
          selectedIndex
        });
      }
      return changed;
    }

  }

  return SingleSelection;
}


/**
 * Following a change in the set of items, or in the value of the
 * `selectionRequired` property, reacquire the selected item. If it's moved,
 * update `selectedIndex`. If it's been removed, and a selection is required,
 * try to select another item.
 */
// TODO Export this and rely on libraries that change content to synchronously
// update selectedIndex at the item they change content?
function trackSelectedItem(component) {

  const items = component.items;
  if (!items) {
    // No items yet, may still be waiting for them.
    return;
  }

  const itemCount = items ? items.length : 0;
  const previousSelectedIndex = component.state.selectedIndex;

  if (previousSelectedIndex >= 0) {
    // Select the item at the same index (if it exists) or as close as possible.
    // If there are no items, we'll set the index to -1 (no selection).
    const newSelectedIndex = Math.min(previousSelectedIndex, itemCount - 1);
    component.updateSelectedIndex(newSelectedIndex);
  } else if (component.state.selectionRequired && itemCount > 0) {
    // No item was previously selected; select the first item by default.
    component.updateSelectedIndex(0);
  }
}
