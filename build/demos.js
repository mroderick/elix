/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A collection of (potentially polyfilled) `Symbol` objects for standard
 * component properties and methods.
 *
 * These `Symbol` objects are used to allow mixins and a component to internally
 * communicate, without exposing these properties and methods in the component's
 * public API.
 *
 * To use these `Symbol` objects in your own component, include this module and
 * then create a property or method whose key is the desired Symbol.
 *
 *     import 'SingleSelectionMixin' from 'elix/mixins/SingleSelectionMixin';
 *     import 'symbols' from 'elix/mixins/symbols';
 *
 *     class MyElement extends SingleSelectionMixin(HTMLElement) {
 *       [symbols.itemSelected](item, selected) {
 *         // This will be invoked whenever an item is selected/deselected.
 *       }
 *     }
 *
 * To support Internet Explorer 11, which does not have support for the
 * `Symbol` class, you can use the [Symbol](Symbol) helper, or a `Symbol`
 * polyfill of your choice.
 *
 * @module symbols
 */
var symbols = {

  /**
   * Symbol for the `afterEffect` method.
   * 
   * This method is invoked after a visual effect has completed. Implement
   * this method to perform any necessary cleanup.
   * 
   * @param {string} effect - The name of the effect that has completed
   */
  afterEffect: (0, _Symbol3.default)('afterEffect'),

  /**
   * Symbol for the `applyEffect` method.
   * 
   * This method is invoked to trigger the execution of a visual effect.
   * 
   * @param {string} effect - The name of the effect to apply
   * @returns {Promise} A Promise that resolves when the effect completes
   */
  applyEffect: (0, _Symbol3.default)('applyEffect'),

  /**
   * Symbol for the `beforeEffect` method.
   * 
   * This method is invoked before a visual effect has begun. Implement this
   * method to prepare the element for the effect.
   * 
   * @param {string} effect - The name of the effect that has completed
   */
  beforeEffect: (0, _Symbol3.default)('beforeEffect'),

  /**
   * Symbols for the `content` property.
   *
   * This property returns the component's content -- however the component
   * wants to define that. This could, for example, return the component's
   * distributed children.
   *
   * @type {HTMLElement[]}
   */
  content: (0, _Symbol3.default)('content'),

  /**
   * Symbol for the `contentChanged` method.
   *
   * For components that define a `content` property, this method should be
   * invoked when that property changes.
   *
   * @function contentChanged
   */
  contentChanged: (0, _Symbol3.default)('contentChanged'),

  /**
   * The name of the visual effect currently begin shown.
   * 
   * @returns {string}
   */
  currentEffect: (0, _Symbol3.default)('currentEffect'),

  /**
   * Symbol for the `defaults` property.
   *
   * This property can be used to set or override defaults that will be applied
   * to a new component instance. When implementing this property, take care to
   * first acquire any defaults defined by the superclass. The standard idiom is
   * as follows:
   *
   *     get [symbols.defaults]() {
   *       const defaults = super[symbols.defaults] || {};
   *       // Set or override default values here
   *       defaults.customProperty = false;
   *       return defaults;
   *     }
   *
   * @var {object} defaults
   */
  defaults: (0, _Symbol3.default)('defaults'),

  /**
   * Symbol for the `elementsWithTransitions` property.
   * 
   * A component can implement this method to indicate which element(s) have CSS
   * transitions that will be triggered if the given effect is shown.
   * 
   * @param {string} effect - The effect under consideration
   * @returns {[HTMLElement]} The elements with CSS transitions
   */
  elementsWithTransitions: (0, _Symbol3.default)('elementsWithTransitions'),

  /**
   * Symbol for the `getItemText` method.
   *
   * This method can be applied to an item to return its text.
   *
   * @function getItemText
   * @param {HTMLElement} item - the item to extract text from
   * @returns {string} the text of the item
   */
  getItemText: (0, _Symbol3.default)('getText'),

  /**
   * Symbol for the `goDown` method.
   *
   * This method is invoked when the user wants to go/navigate down.
   *
   * @function goDown
   */
  goDown: (0, _Symbol3.default)('goDown'),

  /**
   * Symbol for the `goEnd` method.
   *
   * This method is invoked when the user wants to go/navigate to the end (e.g.,
   * of a list).
   *
   * @function goEnd
   */
  goEnd: (0, _Symbol3.default)('goEnd'),

  /**
   * Symbol for the `goLeft` method.
   *
   * This method is invoked when the user wants to go/navigate left.
   *
   * @function goLeft
   */
  goLeft: (0, _Symbol3.default)('goLeft'),

  /**
   * Symbol for the `goRight` method.
   *
   * This method is invoked when the user wants to go/navigate right.
   *
   * @function goRight
   */
  goRight: (0, _Symbol3.default)('goRight'),

  /**
   * Symbol for the `goStart` method.
   *
   * This method is invoked when the user wants to go/navigate to the start
   * (e.g., of a list).
   *
   * @function goStart
   */
  goStart: (0, _Symbol3.default)('goStart'),

  /**
   * Symbol for the `goUp` method.
   *
   * This method is invoked when the user wants to go/navigate up.
   *
   * @function goUp
   */
  goUp: (0, _Symbol3.default)('goUp'),

  /**
   * Symbol for the `itemAdded` method.
   *
   * This method is invoked when a new item is added to a list.
   *
   * @function itemAdded
   * @param {HTMLElement} item - the item being selected/deselected
   */
  itemAdded: (0, _Symbol3.default)('itemAdded'),

  /**
   * Symbol for the `itemsChanged` method.
   *
   * This method is invoked when the underlying contents change. It is also
   * invoked on component initialization – since the items have "changed" from
   * being nothing.
   *
   * @function itemsChanged
   */
  itemsChanged: (0, _Symbol3.default)('itemsChanged'),

  /**
   * Symbol for the `itemSelected` method.
   *
   * This method is invoked when an item becomes selected or deselected.
   *
   * @function itemSelected
   * @param {HTMLElement} item - the item being selected/deselected
   * @param {boolean} selected - true if the item is selected, false if not
   */
  itemSelected: (0, _Symbol3.default)('itemSelected'),

  /**
   * Symbol for the `keydown` method.
   *
   * This method is invoked when an element receives a `keydown` event.
   *
   * @function keydown
   * @param {KeyboardEvent} event - the event being processed
   */
  keydown: (0, _Symbol3.default)('keydown'),

  /**
   * Symbol for the `openedChanged` method.
   * 
   * This method is invoked when the `opened` property has changed. There are
   * two advantages to using `openedChanged` rather than implementing a setter
   * for the `opened` property: 1) `openedChanged` will supply the _parsed_
   * value of the `opened` property, whereas the `opened` property might be
   * passed a string as an attribute value, and 2) `openedChanged` only executes
   * when the value of `opened` has actually changed.
   * 
   * @param {boolean} opened - The new value of the `opened` property
   */
  openedChanged: (0, _Symbol3.default)('openedChanged'),

  /**
   * Indicates the general horizontal and/or vertical orientation of the
   * component. This may affect both presentation and behavior (e.g., of
   * keyboard navigation).
   *
   * Accepted values are "horizontal", "vertical", or "both" (the default).
   *
   * @type {string}
   */
  orientation: (0, _Symbol3.default)('orientation'),

  /**
   * Symbol for the `raiseChangeEvents` property.
   *
   * This property is used by mixins to determine whether they should raise
   * property change events. The standard HTML pattern is to only raise such
   * events in response to direct user interactions. For a detailed discussion
   * of this point, see the Gold Standard checklist item for
   * [Propery Change Events](https://github.com/webcomponents/gold-standard/wiki/Property%20Change%20Events).
   *
   * The above article describes a pattern for using a flag to track whether
   * work is being performed in response to internal component activity, and
   * whether the component should therefore raise property change events.
   * This `raiseChangeEvents` symbol is a shared flag used for that purpose by
   * all Elix mixins and components. Sharing this flag ensures that internal
   * activity (e.g., a UI event listener) in one mixin can signal other mixins
   * handling affected properties to raise change events.
   *
   * All UI event listeners (and other forms of internal handlers, such as
   * timeouts and async network handlers) should set `raiseChangeEvents` to
   * `true` at the start of the event handler, then `false` at the end:
   *
   *     this.addEventListener('click', event => {
   *       this[symbols.raiseChangeEvents] = true;
   *       // Do work here, possibly setting properties, like:
   *       this.foo = 'Hello';
   *       this[symbols.raiseChangeEvents] = false;
   *     });
   *
   * Elsewhere, property setters that raise change events should only do so it
   * this property is `true`:
   *
   *     set foo(value) {
   *       // Save foo value here, do any other work.
   *       if (this[symbols.raiseChangeEvents]) {
   *         const event = new CustomEvent('foo-changed');
   *         this.dispatchEvent(event);
   *       }
   *     }
   *
   * In this way, programmatic attempts to set the `foo` property will not
   * trigger the `foo-changed` event, but UI interactions that update that
   * property will cause those events to be raised.
   *
   * @var {boolean} raiseChangeEvents
   */
  raiseChangeEvents: (0, _Symbol3.default)('raiseChangeEvents'),

  /**
   * Symbol for the `scrollTarget` property.
   *
   * This property indicates which element in a component's shadow subtree
   * should be scrolled. [SelectionInViewMixin](SelectionInViewMixin) can use
   * this property to determine which element should be scrolled to keep the
   * selected item in view.
   *
   * @var {HTMLElement} scrollTarget
   */
  scrollTarget: (0, _Symbol3.default)('scrollTarget'),

  /**
   * Symbol for the `showEffect` method.
   * 
   * This method invokes an asynchronous visual effect. It will invoke
   * the `beforeEffect`, `applyEffect`, and `afterEffect` methods in
   * turn. The first and last of those are synchronous, but `applyEffect`
   * is asynchronous.
   * 
   * @param {string} effect - The name of the effect that has completed
   */
  showEffect: (0, _Symbol3.default)('showEffect'),

  /**
   * Symbol for the `shadowCreated` method.
   *
   * This method is invoked when the component's shadow root has been attached
   * and populated. Other code can handle this method to perform initialization
   * that depends upon the existence of a populated shadow subtree.
   *
   * @function shadowCreated
   */
  shadowCreated: (0, _Symbol3.default)('shadowCreated'),

  /**
   * Symbol for the `template` method.
   *
   * This method should return a component's template.
   *
   * @param {string|object} [filler]
   * @type {string|HTMLTemplateElement}
   */
  template: (0, _Symbol3.default)('template')
};

exports.default = symbols;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (description) {
  return typeof Symbol === 'function' ? Symbol(description) : uniqueString(description);
};

/* The number of fake symbols we've served up */
var count = 0;

/**
 * @param {any} description
 * @returns {string}
 */
function uniqueString(description) {
  return '_' + description + count++;
}

/**
 * A helper function for simulating instances of the `Symbol` class in older
 * browsers, notably Microsoft Internet Explorer 11.
 *
 * Mixins and component classes often want to associate private data with an
 * element instance, but JavaScript does not have direct support for true
 * private properties. Elix uses `Symbol` instances as property keys to set and
 * retrieve data on an element. This prevents accidental name collisions. While
 * it does not make the properties completely private, it does make them
 * somewhat harder to access, and hopefully discourages outside code from
 * directly manipulating the properties.
 *
 * In modern browsers that support `Symbol`, the Elix `Symbol` helper function
 * simply returns a real `Symbol` instance. In browsers like IE that do not have
 * support for `Symbol`, the Elix `Symbol` helper function returns a different
 * string each time it is called.
 *
 * Usage:
 *
 *     const fooKey = Symbol('foo');
 *
 *     class MyElement extends HTMLElement {
 *       get foo() {
 *         return this[fooKey];
 *       }
 *       set foo(value) {
 *         this[fooKey] = value;
 *       }
 *     }
 *
 * In IE 11, this sample will "hide" data behind an instance property that looks
 * like `this._foo0`, `this._foo1`, etc. The underscore is meant to reduce (not
 * eliminate) potential accidental access, and the unique number at the end is
 * mean to avoid (not eliminate) naming conflicts.
 *
 * @function Symbol
 * @param {any} description - A string to identify the symbol when debugging
 * @returns {symbol|string} - A Symbol (in ES6 browsers) or unique string ID (in
 * ES5).
 */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = ShadowTemplateMixin;

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// A cache of processed templates.
//
// We maintain this as a map keyed by element tag (localName). We could store
// an element's processed template on its element prototype. One scenario that
// wouldn't support would be registration of the same constructor under multiple
// tag names, which was a (perhaps theoretical) use case for Custom Elements.
//
var mapTagToTemplate = {};

/**
 * Mixin which adds stamping a template into a Shadow DOM subtree upon component
 * instantiation.
 *
 * To use this mixin, define a `template` method that returns a string or HTML
 * `<template>` element:
 *
 *     class MyElement extends ShadowTemplateMixin(HTMLElement) {
 *       [symbols.template]() {
 *         return `Hello, <em>world</em>.`;
 *       }
 *     }
 *
 * When your component class is instantiated, a shadow root will be created on
 * the instance, and the contents of the template will be cloned into the
 * shadow root. If your component does not define a `template` method, this
 * mixin has no effect.
 *
 * @module ShadowTemplateMixin
 */
function ShadowTemplateMixin(Base) {

  // The class prototype added by the mixin.
  var ShadowTemplate = function (_Base) {
    _inherits(ShadowTemplate, _Base);

    /*
     * If the component defines a template, a shadow root will be created on the
     * component instance, and the template stamped into it.
     */
    function ShadowTemplate() {
      _classCallCheck(this, ShadowTemplate);

      var _this = _possibleConstructorReturn(this, (ShadowTemplate.__proto__ || Object.getPrototypeOf(ShadowTemplate)).call(this));
      // @ts-ignore


      var tag = _this.localName;
      var template = tag && mapTagToTemplate[tag];

      // See if we've already processed a template for this tag.
      if (!template) {
        // This is the first time we've created an instance of this tag.

        // Get the template and perform initial processing.
        template = _this[_symbols2.default.template]();
        if (!template) {
          console.warn('ShadowTemplateMixin expects a component to define a method called [symbols.template].');
          return _possibleConstructorReturn(_this);
        }

        if (typeof template === 'string') {
          // Upgrade plain string to real template.
          var templateText = template;
          template = document.createElement('template');
          template.innerHTML = templateText;

          // A polyfill bug under IE
          // (probably https://github.com/webcomponents/webcomponentsjs/issues/474)
          // prevents the template's innerHTML from being set properly if it
          // contains other elements. We check to make sure the assignment stuck.
          if (template.innerHTML !== templateText) {
            template.innerHTML = templateText;
          }
        }

        // @ts-ignore
        if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
          // Let the CSS polyfill do its own initialization.
          // @ts-ignore
          window.ShadyCSS.prepareTemplate(template, tag);
        }

        if (tag) {
          // Store this for the next time we create the same type of element.
          mapTagToTemplate[tag] = template;
        }
      }

      // Stamp the template into a new shadow root.
      var root = _this.attachShadow({ mode: 'open' });
      var clone = document.importNode(template.content, true);
      root.appendChild(clone);

      /* Let the component know the shadow tree has been populated. */
      if (_this[_symbols2.default.shadowCreated]) {
        _this[_symbols2.default.shadowCreated]();
      }
      return _this;
    }

    _createClass(ShadowTemplate, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(ShadowTemplate.prototype.__proto__ || Object.getPrototypeOf(ShadowTemplate.prototype), 'connectedCallback', this)) {
          _get(ShadowTemplate.prototype.__proto__ || Object.getPrototypeOf(ShadowTemplate.prototype), 'connectedCallback', this).call(this);
        }
        // @ts-ignore
        if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
          // @ts-ignore
          window.ShadyCSS.styleElement(this);
        }
      }
    }]);

    return ShadowTemplate;
  }(Base);

  return ShadowTemplate;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = AttributeMarshallingMixin;

var _attributes = __webpack_require__(5);

var attributes = _interopRequireWildcard(_attributes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Memoized maps of attribute to property names and vice versa.
var attributeToPropertyNames = {};
var propertyNamesToAttributes = {};

/**
 * Mixin which marshalls attributes to properties and vice versa.
 *
 * If your component exposes a setter for a property, it's generally a good
 * idea to let devs using your component be able to set that property in HTML
 * via an element attribute. You can code that yourself by writing an
 * `attributeChangedCallback`, or you can use this mixin to get a degree of
 * automatic support.
 *
 * This mixin implements an `attributeChangedCallback` that will attempt to
 * convert a change in an element attribute into a call to the corresponding
 * property setter. Attributes typically follow hyphenated names ("foo-bar"),
 * whereas properties typically use camelCase names ("fooBar"). This mixin
 * respects that convention, automatically mapping the hyphenated attribute
 * name to the corresponding camelCase property name.
 *
 * Example: You define a component using this mixin:
 *
 *     class MyElement extends AttributeMarshallingMixin(HTMLElement) {
 *       get fooBar() { return this._fooBar; }
 *       set fooBar(value) { this._fooBar = value; }
 *     }
 *     customElements.define('my-element', MyElement);
 *
 * If someone then instantiates your component in HTML:
 *
 *     <my-element foo-bar="Hello"></my-element>
 *
 * Then, after the element has been upgraded, the `fooBar` setter will
 * automatically be invoked with the initial value "Hello".
 *
 * Attributes can only have string values. If you'd like to convert string
 * attributes to other types (numbers, booleans), you must implement parsing
 * yourself.
 *
 * This mixin also exposes helpers for reflecting attributes and classes to
 * the element. These helpers can be invoked during a component's constructor;
 * any attributes or classes set during the constructor are applied when the
 * component's `connectedCallback` is invoked.
 *
 * @module AttributeMarshallingMixin
 */
function AttributeMarshallingMixin(Base) {

  // The class prototype added by the mixin.
  var AttributeMarshalling = function (_Base) {
    _inherits(AttributeMarshalling, _Base);

    function AttributeMarshalling() {
      _classCallCheck(this, AttributeMarshalling);

      return _possibleConstructorReturn(this, (AttributeMarshalling.__proto__ || Object.getPrototypeOf(AttributeMarshalling)).apply(this, arguments));
    }

    _createClass(AttributeMarshalling, [{
      key: 'attributeChangedCallback',


      /**
       * Handle a change to the attribute with the given name.
       */
      value: function attributeChangedCallback(attributeName, oldValue, newValue) {
        if (_get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'attributeChangedCallback', this)) {
          _get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'attributeChangedCallback', this).call(this);
        }
        var propertyName = attributeToPropertyName(attributeName);
        // If the attribute name corresponds to a property name, set the property.
        if (propertyName in this) {
          this[propertyName] = newValue;
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'connectedCallback', this)) {
          _get(AttributeMarshalling.prototype.__proto__ || Object.getPrototypeOf(AttributeMarshalling.prototype), 'connectedCallback', this).call(this);
        }
        // Reflect any attributes set during constructor.
        /** @type {any} */
        var element = this;
        attributes.writePendingAttributes(element);
      }
    }, {
      key: 'reflectAttribute',


      /**
       * Set/unset the attribute with the indicated name.
       *
       * This method exists primarily to handle the case where an element wants to
       * set a default property value that should be reflected as an attribute. An
       * important limitation of custom element consturctors is that they cannot
       * set attributes. A call to `reflectAttribute` during the constructor will
       * be deferred until the element is connected to the document.
       *
       * @param {string} attribute - The name of the *attribute* (not property) to set.
       * @param {string|boolean|number} value - The value to set. If null, the attribute will be removed.
       */
      value: function reflectAttribute(attribute, value) {
        /** @type {any} */
        var element = this;
        return attributes.setAttribute(element, attribute, value);
      }

      /**
       * Set/unset the class with the indicated name.
       *
       * This method exists primarily to handle the case where an element wants to
       * set a default property value that should be reflected as as class. An
       * important limitation of custom element consturctors is that they cannot
       * set attributes, including the `class` attribute. A call to
       * `reflectClass` during the constructor will be deferred until the element
       * is connected to the document.
       *
       * @param {string} className - The name of the class to set.
       * @param {boolean} value - True to set the class, false to remove it.
       */

    }, {
      key: 'reflectClass',
      value: function reflectClass(className, value) {
        /** @type {any} */
        var element = this;
        return attributes.setClass(element, className, value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        /** @type {any} */
        var elementClass = this;
        return attributesForClass(elementClass);
      }
    }]);

    return AttributeMarshalling;
  }(Base);

  return AttributeMarshalling;
}

/**
 * Return the custom attributes for the given class.
 */
function attributesForClass(classFn) {

  // We treat the HTMLElement base class as if it has no attributes, since we
  // don't want to receive attributeChangedCallback for it. We'd like to do
  // a simple check if classFn === HTMLElement, but this fails in the polyfill
  // under IE, so we compare prototypes instead.
  if (classFn.prototype === HTMLElement.prototype) {
    return [];
  }

  // Get attributes for parent class.
  var baseClass = Object.getPrototypeOf(classFn.prototype).constructor;
  // See if parent class defines observedAttributes manually.
  var baseAttributes = baseClass.observedAttributes;
  if (!baseAttributes) {
    // Calculate parent class attributes ourselves.
    baseAttributes = attributesForClass(baseClass);
  }

  // Get attributes for this class.
  var propertyNames = Object.getOwnPropertyNames(classFn.prototype);
  var setterNames = propertyNames.filter(function (propertyName) {
    return typeof Object.getOwnPropertyDescriptor(classFn.prototype, propertyName).set === 'function';
  });
  var attributes = setterNames.map(function (setterName) {
    return propertyNameToAttribute(setterName);
  });

  // Merge.
  var diff = attributes.filter(function (attribute) {
    return baseAttributes.indexOf(attribute) < 0;
  });
  return baseAttributes.concat(diff);
}

/**
 * Convert hyphenated foo-bar attribute name to camel case fooBar property name.
 */
function attributeToPropertyName(attributeName) {
  var propertyName = attributeToPropertyNames[attributeName];
  if (!propertyName) {
    // Convert and memoize.
    var hyphenRegEx = /-([a-z])/g;
    propertyName = attributeName.replace(hyphenRegEx, function (match) {
      return match[1].toUpperCase();
    });
    attributeToPropertyNames[attributeName] = propertyName;
  }
  return propertyName;
}

/**
 * Convert a camel case fooBar property name to a hyphenated foo-bar attribute.
 */
function propertyNameToAttribute(propertyName) {
  var attribute = propertyNamesToAttributes[propertyName];
  if (!attribute) {
    // Convert and memoize.
    var uppercaseRegEx = /([A-Z])/g;
    attribute = propertyName.replace(uppercaseRegEx, '-$1').toLowerCase();
  }
  return attribute;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = KeyboardMixin;

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which manages the keydown handling for a component.
 *
 * This mixin handles several keyboard-related features.
 *
 * First, it wires up a single keydown event handler that can be shared by
 * multiple mixins on a component. The event handler will invoke a `keydown`
 * method with the event object, and any mixin along the prototype chain that
 * wants to handle that method can do so.
 *
 * If a mixin wants to indicate that keyboard event has been handled, and that
 * other mixins should *not* handle it, the mixin's `keydown` handler should
 * return a value of true. The convention that seems to work well is that a
 * mixin should see if it wants to handle the event and, if not, then ask the
 * superclass to see if it wants to handle the event. This has the effect of
 * giving the mixin that was applied last the first chance at handling a
 * keyboard event.
 *
 * Example:
 *
 *     [symbols.keydown](event) {
 *       let handled;
 *       switch (event.keyCode) {
 *         // Handle the keys you want, setting handled = true if appropriate.
 *       }
 *       // Prefer mixin result if it's defined, otherwise use base result.
 *       return handled || (super[symbols.keydown] && super[symbols.keydown](event));
 *     }
 *
 * Until iOS Safari supports the `KeyboardEvent.key` property
 * (see http://caniuse.com/#search=keyboardevent.key), mixins should generally
 * test keys using the legacy `keyCode` property, not `key`.
 *
 * A second feature provided by this mixin is that it implicitly makes the
 * component a tab stop if it isn't already, by setting `tabIndex` to 0. This
 * has the effect of adding the component to the tab order in document order.
 *
 * @module KeyboardMixin
 */
function KeyboardMixin(Base) {

  // The class prototype added by the mixin.
  var Keyboard = function (_Base) {
    _inherits(Keyboard, _Base);

    function Keyboard() {
      _classCallCheck(this, Keyboard);

      var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));
      // @ts-ignore


      _this.addEventListener('keydown', function (event) {
        _this[_symbols2.default.raiseChangeEvents] = true;
        var handled = _this[_symbols2.default.keydown](event);
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
        _this[_symbols2.default.raiseChangeEvents] = false;
      });
      return _this;
    }

    _createClass(Keyboard, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this)) {
          _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'connectedCallback', this).call(this);
        }
        if (this.getAttribute('tabindex') == null && this[_symbols2.default.defaults].tabindex !== null) {
          this.setAttribute('tabindex', this[_symbols2.default.defaults].tabindex);
        }
      }
    }, {
      key: _symbols2.default.keydown,


      /**
       * Handle the indicated keyboard event.
       *
       * The default implementation of this method does nothing. This will
       * typically be handled by other mixins.
       *
       * @param {KeyboardEvent} event - the keyboard event
       * @returns {boolean} true if the event was handled
       */
      value: function value(event) {
        if (_get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this)) {
          return _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.keydown, this).call(this, event);
        }
        return false;
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), _symbols2.default.defaults, this) || {};
        // The default tab index is 0 (document order).
        defaults.tabindex = 0;
        return defaults;
      }
    }]);

    return Keyboard;
  }(Base);

  return Keyboard;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAttribute = setAttribute;
exports.setClass = setClass;
exports.toggleClass = toggleClass;
exports.writePendingAttributes = writePendingAttributes;

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _utilities = __webpack_require__(24);

var utilities = _interopRequireWildcard(_utilities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Symbols for private data members on an element.
/**
 * These are helper functions for accessing a component's attributes.
 *
 * @module attributes
 */

var safeToSetAttributesKey = (0, _Symbol3.default)('safeToSetAttributes');
var pendingAttributesKey = (0, _Symbol3.default)('pendingAttributes');
var pendingClassesKey = (0, _Symbol3.default)('pendingClasses');

/**
 * Set/unset the attribute with the indicated name.
 *
 * This method exists primarily to handle the case where an element wants to
 * set a default property value that should be reflected as an attribute. An
 * important limitation of custom element consturctors is that they cannot
 * set attributes. A call to `setAttribute` during the constructor will
 * be deferred until the element is connected to the document.
 *
 * @param {Element} element - The element to modify.
 * @param {string} attribute - The name of the *attribute* (not property) to set.
 * @param {string|boolean|number} value - The value to set. If null, the attribute will be removed.
 */
function setAttribute(element, attribute, value) {
  if (element[safeToSetAttributesKey]) {
    // Safe to set attributes immediately.
    reflectAttributeToElement(element, attribute, value);
  } else {
    // Defer setting attributes until the first time we're connected.
    if (!element[pendingAttributesKey]) {
      element[pendingAttributesKey] = {};
    }
    element[pendingAttributesKey][attribute] = value;
  }
}

/**
 * Set/unset the class with the indicated name.
 *
 * This method exists primarily to handle the case where an element wants to
 * set a default property value that should be reflected as as class. An
 * important limitation of custom element consturctors is that they cannot
 * set attributes, including the `class` attribute. A call to
 * `setClass` during the constructor will be deferred until the element
 * is connected to the document.
 *
 * @param {Element} element - The element to modify.
 * @param {string} className - The name of the class to set/unset.
 * @param {boolean} [value] - True to set the class, false to remove it. If
 * omitted, the class will be toggled.
 */
function setClass(element, className, value) {
  if (element[safeToSetAttributesKey]) {
    // Safe to set class immediately.
    return toggleClass(element, className, value);
  } else {
    // Defer setting class until the first time we're connected.
    if (!element[pendingClassesKey]) {
      element[pendingClassesKey] = {};
    }
    element[pendingClassesKey][className] = value;
    return value;
  }
}

/**
 * Immediately toggle the indicated class.
 * 
 * This method exists only to support IE 11, whose `classList.toggle`
 * implementation is deficient.
 *
 * @param {Element} element - The element to modify.
 * @param {string} className - The name of the class to set/unset.
 * @param {boolean} [value] - True to set the class, false to remove it. If
 * omitted, the class will be toggled.
 */
function toggleClass(element, className, value) {
  var classList = element.classList;
  var addClass = typeof value === 'undefined' ? !classList.contains(className) : value;
  if (addClass) {
    classList.add(className);
  } else {
    classList.remove(className);
  }
  return addClass;
}

/**
 * Perform any pending updates to attributes and classes.
 *
 * This writes any `setAttribute` or `setClass` values that were performed
 * before an element was attached to the document for the first time.
 *
 * This method should be called by mixins/components in their
 * `connectedCallback`. If mulitple mixins/components invoke this during the
 * same `connectedCallback`, only the first call will have any effect. The
 * subsequent calls will be harmless.
 *
 * @param {HTMLElement} element - The element being added to the document.
 */
function writePendingAttributes(element) {
  element[safeToSetAttributesKey] = true;

  // Set any pending attributes.
  var pendingAttributes = element[pendingAttributesKey];
  if (pendingAttributes) {
    for (var attribute in pendingAttributes) {
      var value = pendingAttributes[attribute];
      reflectAttributeToElement(element, attribute, value);
    }
    element[pendingAttributesKey] = null;
  }

  // Set any pending classes.
  var pendingClasses = element[pendingClassesKey];
  if (pendingClasses) {
    for (var className in pendingClasses) {
      var _value = pendingClasses[className];
      toggleClass(element, className, _value);
    }
    element[pendingClassesKey] = null;
  }
}

//
// Helpers
//

// Reflect the attribute to the given element.
// If the value is null, remove the attribute.
function reflectAttributeToElement(element, attributeName, value) {
  if (value === null || typeof value === 'undefined') {
    element.removeAttribute(attributeName);
  } else {
    var text = String(value);
    // Avoid recursive attributeChangedCallback calls.
    if (element.getAttribute(attributeName) !== text) {
      element.setAttribute(attributeName, value);
    }
  }
  utilities.webkitForceStyleUpdate(element);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

exports.default = SingleSelectionMixin;

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var canSelectNextKey = (0, _Symbol3.default)('canSelectNext');
var canSelectPreviousKey = (0, _Symbol3.default)('canSelectPrevious');
var selectionRequiredKey = (0, _Symbol3.default)('selectionRequired');
var selectionWrapsKey = (0, _Symbol3.default)('selectionWraps');

// We want to expose both selectedIndex and selectedItem as independent
// properties but keep them in sync. This allows a component user to reference
// the selection by whatever means is most natural for their situation.
//
// To efficiently keep these properties in sync, we track "external" and
// "internal" references for each property:
//
// The external index or item is the one we report to the outside world when
// asked for selection.  When handling a change to index or item, we update the
// external reference as soon as possible, so that if anyone immediately asks
// for the current selection, they will receive a stable answer.
//
// The internal index or item tracks whichever index or item last received the
// full set of processing. Processing includes raising a change event for the
// new value. Once we've begun that processing, we store the new value as the
// internal value to indicate we've handled it.
//
var externalSelectedIndexKey = (0, _Symbol3.default)('externalSelectedIndex');
var externalSelectedItemKey = (0, _Symbol3.default)('externalSelectedItem');
var internalSelectedIndexKey = (0, _Symbol3.default)('internalSelectedIndex');
var internalSelectedItemKey = (0, _Symbol3.default)('internalSelectedItem');

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
function SingleSelectionMixin(Base) {

  // The class prototype added by the mixin.
  var SingleSelection = function (_Base) {
    _inherits(SingleSelection, _Base);

    function SingleSelection() {
      _classCallCheck(this, SingleSelection);

      // Set defaults.
      var _this = _possibleConstructorReturn(this, (SingleSelection.__proto__ || Object.getPrototypeOf(SingleSelection)).call(this));
      // @ts-ignore


      if (typeof _this.selectionRequired === 'undefined') {
        _this.selectionRequired = _this[_symbols2.default.defaults].selectionRequired;
      }
      if (typeof _this.selectionWraps === 'undefined') {
        _this.selectionWraps = _this[_symbols2.default.defaults].selectionWraps;
      }
      return _this;
    }

    /**
     * True if the selection can be moved to the next item, false if not (the
     * selected item is the last item in the list).
     *
     * @type {boolean}
     */


    _createClass(SingleSelection, [{
      key: _symbols2.default.itemAdded,


      /**
       * Handle a new item being added to the list.
       *
       * The default implementation of this method simply sets the item's
       * selection state to false.
       *
       * @param {Element} item - the item being added
       */
      value: function value(item) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }
        this[_symbols2.default.itemSelected](item, item === this.selectedItem);
      }
    }, {
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemsChanged, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        // In case selected item changed position or was removed.
        trackSelectedItem(this);

        // In case the change in items affected which navigations are possible.
        updatePossibleNavigations(this);
      }

      /**
       * Apply the indicate selection state to the item.
       *
       * The default implementation of this method does nothing. User-visible
       * effects will typically be handled by other mixins.
       *
       * @param {Element} item - the item being selected/deselected
       * @param {boolean} selected - true if the item is selected, false if not
       */

    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemSelected, this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
      }

      /**
       * The index of the item which is currently selected.
       *
       * The setter expects an integer or a string representing an integer.
       *
       * A `selectedIndex` of -1 indicates there is no selection. Setting this
       * property to -1 will remove any existing selection.
       *
       * @type {number}
       */

    }, {
      key: 'selectFirst',


      /**
       * Select the first item in the list.
       *
       * @returns {Boolean} True if the selection changed, false if not.
       */
      value: function selectFirst() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectFirst', this).call(this);
        }
        return selectIndex(this, 0);
      }

      /**
       * True if the list should always have a selection (if it has items).
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'selectLast',


      /**
       * Select the last item in the list.
       *
       * @returns {Boolean} True if the selection changed, false if not.
       */
      value: function selectLast() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectLast', this).call(this);
        }
        return this.items ? selectIndex(this, this.items.length - 1) : false;
      }

      /**
       * Select the next item in the list.
       *
       * If the list has no selection, the first item will be selected.
       *
       * @returns {Boolean} True if the selection changed, false if not.
       */

    }, {
      key: 'selectNext',
      value: function selectNext() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectNext', this).call(this);
        }
        return selectIndex(this, this.selectedIndex + 1);
      }

      /**
       * Select the previous item in the list.
       *
       * If the list has no selection, the last item will be selected.
       *
       * @returns {Boolean} True if the selection changed, false if not.
       */

    }, {
      key: 'selectPrevious',
      value: function selectPrevious() {
        if (_get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this)) {
          _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectPrevious', this).call(this);
        }
        if (this.items) {
          var newIndex = this.selectedIndex < 0 ? this.items.length - 1 : // No selection yet; select last item.
          this.selectedIndex - 1;
          return selectIndex(this, newIndex);
        } else {
          return false;
        }
      }

      /**
       * Fires when the canSelectNext property changes in response to internal
       * component activity.
       *
       * @memberof SingleSelection
       * @event can-select-next-changed
       */

      /**
       * Fires when the canSelectPrevious property changes in response to internal
       * component activity.
       *
       * @memberof SingleSelection
       * @event can-select-previous-changed
       */

      /**
       * Fires when the selectedIndex property changes in response to internal
       * component activity.
       *
       * @memberof SingleSelection
       * @event selected-index-changed
       * @param {number} detail.selectedIndex The new selected index.
       */

      /**
       * Fires when the selectedItem property changes in response to internal
       * component activity.
       *
       * @memberof SingleSelection
       * @event selected-item-changed
       * @param {HTMLElement} detail.selectedItem The new selected item.
       */

    }, {
      key: 'canSelectNext',
      get: function get() {
        return this[canSelectNextKey];
      },
      set: function set(canSelectNext) {
        var changed = canSelectNext !== this[canSelectNextKey];
        this[canSelectNextKey] = canSelectNext;
        if ('canSelectNext' in Base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectNext', canSelectNext, this);
        }
        if (this[_symbols2.default.raiseChangeEvents] && changed) {
          this.dispatchEvent(new CustomEvent('can-select-next-changed'));
        }
      }

      /**
       * True if the selection can be moved to the previous item, false if not
       * (the selected item is the first one in the list).
       *
       * @type {boolean}
       */

    }, {
      key: 'canSelectPrevious',
      get: function get() {
        return this[canSelectPreviousKey];
      },
      set: function set(canSelectPrevious) {
        var changed = canSelectPrevious !== this[canSelectPreviousKey];
        this[canSelectPreviousKey] = canSelectPrevious;
        if ('canSelectPrevious' in Base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'canSelectPrevious', canSelectPrevious, this);
        }
        if (this[_symbols2.default.raiseChangeEvents] && changed) {
          this.dispatchEvent(new CustomEvent('can-select-previous-changed'));
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), _symbols2.default.defaults, this) || {};
        defaults.selectionRequired = false;
        defaults.selectionWraps = false;
        return defaults;
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return this[externalSelectedIndexKey] != null ? this[externalSelectedIndexKey] : -1;
      }
      /**
       * @param {number|string} index
       */
      ,
      set: function set(index) {
        // See notes at top about internal vs. external copies of this property.
        var changed = index !== this[internalSelectedIndexKey];
        var item = void 0;
        var parsedIndex = typeof index === 'string' ? parseInt(index) : index;
        if (parsedIndex !== this[externalSelectedIndexKey]) {
          // Store the new index and the corresponding item.
          var items = this.items || [];
          var hasItems = items.length > 0;
          if (!(hasItems && parsedIndex >= 0 && parsedIndex < items.length)) {
            parsedIndex = -1; // No item at that index.
          }
          this[externalSelectedIndexKey] = parsedIndex;
          item = hasItems && parsedIndex >= 0 ? items[parsedIndex] : null;
          this[externalSelectedItemKey] = item;
        } else {
          item = this[externalSelectedItemKey];
        }

        // Now let super do any work.
        if ('selectedIndex' in Base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedIndex', parsedIndex, this);
        }

        if (changed) {
          // The selected index changed.
          this[internalSelectedIndexKey] = parsedIndex;

          if (this[_symbols2.default.raiseChangeEvents]) {
            var event = new CustomEvent('selected-index-changed', {
              detail: {
                selectedIndex: parsedIndex,
                value: parsedIndex // for Polymer binding. TODO: Verify still necessary
              }
            });
            this.dispatchEvent(event);
          }
        }

        if (this[internalSelectedItemKey] !== item) {
          // Update selectedItem property so it can have its own effects.
          this.selectedItem = item;
        }
      }

      /**
       * The currently selected item, or null if there is no selection.
       *
       * Setting this property to null deselects any currently-selected item.
       * Setting this property to an object that is not in the list has no effect.
       *
       * @type {Element|null}
       */
      // REVIEW: Even if selectionRequired is true, caller can still explicitly
      // set selectedItem to null. In that case, should we leave selection alone,
      // or set it to null?

    }, {
      key: 'selectedItem',
      get: function get() {
        return this[externalSelectedItemKey] || null;
      }
      /**
       * @param {Element|null} item
       */
      ,
      set: function set(item) {
        // See notes at top about internal vs. external copies of this property.
        var previousSelectedItem = this[internalSelectedItemKey];
        var changed = item !== previousSelectedItem;
        /** @type {number} */
        var index = void 0;
        if (item !== this[externalSelectedItemKey]) {
          // Store item and look up corresponding index.
          var items = this.items;
          var hasItems = items && items.length > 0;
          index = hasItems ? Array.prototype.indexOf.call(items, item) : -1;
          this[externalSelectedIndexKey] = index;
          if (index < 0) {
            item = null; // The indicated item isn't actually in `items`.
          }
          this[externalSelectedItemKey] = index >= 0 ? item : null;
        } else {
          index = this[externalSelectedIndexKey];
        }

        // Now let super do any work.
        if ('selectedItem' in Base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectedItem', item, this);
        }

        if (changed) {
          // The selected item changed.
          this[internalSelectedItemKey] = item;

          if (previousSelectedItem) {
            // Update selection state of old item.
            this[_symbols2.default.itemSelected](previousSelectedItem, false);
          }
          if (item) {
            // Update selection state to new item.
            this[_symbols2.default.itemSelected](item, true);
          }

          updatePossibleNavigations(this);

          if (this[_symbols2.default.raiseChangeEvents]) {
            var event = new CustomEvent('selected-item-changed', {
              detail: {
                selectedItem: item,
                value: item // for Polymer binding
              }
            });
            this.dispatchEvent(event);
          }
        }

        if (this[internalSelectedIndexKey] !== index) {
          // Update selectedIndex property so it can have its own effects.
          this.selectedIndex = index;
        }
      }
    }, {
      key: 'selectionRequired',
      get: function get() {
        return this[selectionRequiredKey];
      },
      set: function set(selectionRequired) {
        var parsed = String(selectionRequired) === 'true';
        var changed = parsed !== this[selectionRequiredKey];
        this[selectionRequiredKey] = parsed;
        if ('selectionRequired' in Base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectionRequired', selectionRequired, this);
        }
        if (changed) {
          if (this[_symbols2.default.raiseChangeEvents]) {
            var event = new CustomEvent('selection-required-changed');
            this.dispatchEvent(event);
          }
          if (selectionRequired) {
            trackSelectedItem(this);
          }
        }
      }

      /**
       * True if selection navigations wrap from last to first, and vice versa.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'selectionWraps',
      get: function get() {
        return this[selectionWrapsKey];
      },
      set: function set(selectionWraps) {
        var parsed = String(selectionWraps) === 'true';
        var changed = parsed !== this[selectionWrapsKey];
        this[selectionWrapsKey] = parsed;
        if ('selectionWraps' in Base.prototype) {
          _set(SingleSelection.prototype.__proto__ || Object.getPrototypeOf(SingleSelection.prototype), 'selectionWraps', selectionWraps, this);
        }
        if (changed) {
          if (this[_symbols2.default.raiseChangeEvents]) {
            var event = new CustomEvent('selection-wraps-changed');
            this.dispatchEvent(event);
          }
          updatePossibleNavigations(this);
        }
      }
    }]);

    return SingleSelection;
  }(Base);

  return SingleSelection;
}

/**
 * Ensure the given index is within bounds, and select it if it's not already
 * selected.
 */
function selectIndex(element, index) {

  var items = element.items;
  if (items == null) {
    // Nothing to select.
    return false;
  }

  var count = items.length;
  var boundedIndex = element.selectionWraps ?
  // JavaScript mod doesn't handle negative numbers the way we want to wrap.
  // See http://stackoverflow.com/a/18618250/76472
  (index % count + count) % count :

  // Keep index within bounds of array.
  Math.max(Math.min(index, count - 1), 0);

  var previousIndex = element.selectedIndex;
  if (previousIndex !== boundedIndex) {
    element.selectedIndex = boundedIndex;
    return true;
  } else {
    return false;
  }
}

/**
 * Following a change in the set of items, or in the value of the
 * `selectionRequired` property, reacquire the selected item. If it's moved,
 * update `selectedIndex`. If it's been removed, and a selection is required,
 * try to select another item.
 */
function trackSelectedItem(element) {

  var items = element.items;
  var itemCount = items ? items.length : 0;

  var previousSelectedItem = element.selectedItem;
  if (itemCount === 0) {
    if (previousSelectedItem) {
      // We've lost the selection, and there's nothing left to select.
      element.selectedItem = null;
    }
  } else if (!previousSelectedItem) {
    // No item was previously selected.
    if (element.selectionRequired) {
      // Select the first item by default.
      element.selectedIndex = 0;
    }
  } else {
    // Try to find the previously-selected item in the current set of items.
    var indexInCurrentItems = Array.prototype.indexOf.call(items, previousSelectedItem);
    var previousSelectedIndex = element.selectedIndex;
    if (indexInCurrentItems < 0) {
      // Previously-selected item was removed from the items.
      // Select the item at the same index (if it exists) or as close as possible.
      var newSelectedIndex = Math.min(previousSelectedIndex, itemCount - 1);
      // Select by item, since index may be the same, and we want to raise the
      // selected-item-changed event.
      element.selectedItem = items[newSelectedIndex];
    } else if (indexInCurrentItems !== previousSelectedIndex) {
      // Previously-selected item still there, but changed position.
      element.selectedIndex = indexInCurrentItems;
    }
  }
}

/**
 * Following a change in selection, report whether it's now possible to
 * go next/previous from the given index.
 */
function updatePossibleNavigations(element) {
  var canSelectNext = void 0;
  var canSelectPrevious = void 0;
  var items = element.items;
  if (items == null || items.length === 0) {
    // No items to select.
    canSelectNext = false;
    canSelectPrevious = false;
  } else if (element.selectionWraps) {
    // Since there are items, can always go next/previous.
    canSelectNext = true;
    canSelectPrevious = true;
  } else {
    var index = element.selectedIndex;
    if (index < 0 && items.length > 0) {
      // Special case. If there are items but no selection, declare that it's
      // always possible to go next/previous to create a selection.
      canSelectNext = true;
      canSelectPrevious = true;
    } else {
      // Normal case: we have an index in a list that has items.
      canSelectPrevious = index > 0;
      canSelectNext = index < items.length - 1;
    }
  }
  if (element.canSelectNext !== canSelectNext) {
    element.canSelectNext = canSelectNext;
  }
  if (element.canSelectPrevious !== canSelectPrevious) {
    element.canSelectPrevious = canSelectPrevious;
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = ContentItemsMixin;

var _content = __webpack_require__(34);

var content = _interopRequireWildcard(_content);

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var itemsKey = (0, _Symbol3.default)('items');
var itemInitializedKey = (0, _Symbol3.default)('itemInitialized');

/**
 * Mixin which maps content semantics (nodes) to list item semantics.
 *
 * Items differ from nodes contents in several ways:
 *
 * * They are often referenced via index.
 * * They may have a selection state.
 * * It's common to do work to initialize the appearance or state of a new
 *   item.
 * * Text nodes are filtered out.
 * * Auxiliary invisible child elements are filtered out and not counted as
 *   items. Auxiliary elements include link, script, style, and template
 *   elements. This filtering ensures that those auxiliary elements can be
 *   used in markup inside of a list without being treated as list items.
 *
 * This mixin expects a component to provide a `content` property returning a
 * raw set of elements. You can provide that yourself, or use
 * [DefaultSlotContentMixin](DefaultSlotContentMixin).
 *
 * The most commonly referenced property defined by this mixin is the `items`
 * property. To avoid having to do work each time that property is requested,
 * this mixin supports an optimized mode. If you invoke the `contentChanged`
 * method when the set of items changes, the mixin concludes that you'll take
 * care of notifying it of future changes, and turns on the optimization. With
 * that on, the mixin saves a reference to the computed set of items, and will
 * return that immediately on subsequent calls to the `items` property. If you
 * use this mixin in conjunction with `DefaultSlotContentMixin`, the
 * `contentChanged` method will be invoked for you when the element's children
 * change, turning on the optimization automatically.
 *
 * Most Elix [elements](elements) use `ContentItemsMixin`, including
 * [ListBox](ListBox), [Modes](Modes), and [Tabs](Tabs).
 *
 * @module ContentItemsMixin
 */
function ContentItemsMixin(Base) {

  // The class prototype added by the mixin.
  var ContentItems = function (_Base) {
    _inherits(ContentItems, _Base);

    function ContentItems() {
      _classCallCheck(this, ContentItems);

      return _possibleConstructorReturn(this, (ContentItems.__proto__ || Object.getPrototypeOf(ContentItems)).apply(this, arguments));
    }

    _createClass(ContentItems, [{
      key: _symbols2.default.contentChanged,
      value: function value() {
        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.contentChanged, this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.contentChanged, this).call(this);
        }

        // Since we got the contentChanged call, we'll assume we'll be notified if
        // the set of items changes later. We turn on memoization of the items
        // property by setting our internal property to null (instead of
        // undefined).
        this[itemsKey] = null;

        this[_symbols2.default.itemsChanged]();
      }

      /**
       * The current set of items in the list. See the top-level documentation for
       * mixin for a description of how items differ from plain content.
       *
       * @type {Element[]}
       */

    }, {
      key: _symbols2.default.itemsChanged,


      /**
       * This method is invoked when the underlying contents change. It is also
       * invoked on component initialization – since the items have "changed" from
       * being nothing.
       */
      value: function value() {
        var _this2 = this;

        if (_get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemsChanged, this)) {
          _get(ContentItems.prototype.__proto__ || Object.getPrototypeOf(ContentItems.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        // Perform per-item initialization if `itemAdded` is defined.
        if (this[_symbols2.default.itemAdded]) {
          Array.prototype.forEach.call(this.items, function (item) {
            if (!item[itemInitializedKey]) {
              _this2[_symbols2.default.itemAdded](item);
              item[itemInitializedKey] = true;
            }
          });
        }

        if (this[_symbols2.default.raiseChangeEvents]) {
          this.dispatchEvent(new CustomEvent('items-changed'));
        }
      }

      /**
       * Fires when the items in the list change.
       *
       * @memberof ContentItems
       * @event items-changed
       */

    }, {
      key: 'items',
      get: function get() {
        var items = void 0;
        if (this[itemsKey] == null) {
          items = content.substantiveElements(this[_symbols2.default.content]);
          // Note: test for *equality* with null, since we use `undefined` to
          // indicate that we're not yet caching items.
          if (this[itemsKey] === null) {
            // Memoize the set of items.
            this[itemsKey] = items;
          }
        } else {
          // Return the memoized items.
          items = this[itemsKey];
        }
        return items;
      }
    }]);

    return ContentItems;
  }(Base);

  return ContentItems;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = DirectionSelectionMixin;

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which maps direction semantics (goLeft, goRight, etc.) to selection
 * semantics (selectPrevious, selectNext, etc.).
 *
 * This mixin can be used in conjunction with
 * [KeyboardDirectionMixin](KeyboardDirectionMixin) (which maps keyboard
 * events to directions) and a mixin that handles selection like
 * [SingleSelectionMixin](SingleSelectionMixin).
 *
 * @module DirectionSelectionMixin
 */
function DirectionSelectionMixin(Base) {

  // The class prototype added by the mixin.
  var DirectionSelection = function (_Base) {
    _inherits(DirectionSelection, _Base);

    function DirectionSelection() {
      _classCallCheck(this, DirectionSelection);

      return _possibleConstructorReturn(this, (DirectionSelection.__proto__ || Object.getPrototypeOf(DirectionSelection)).apply(this, arguments));
    }

    _createClass(DirectionSelection, [{
      key: _symbols2.default.goDown,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goDown, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goDown, this).call(this);
        }
        if (!this.selectNext) {
          console.warn('DirectionSelectionMixin expects a component to define a "selectNext" method.');
          return false;
        } else {
          return this.selectNext();
        }
      }
    }, {
      key: _symbols2.default.goEnd,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goEnd, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goEnd, this).call(this);
        }
        if (!this.selectLast) {
          console.warn('DirectionSelectionMixin expects a component to define a "selectLast" method.');
          return false;
        } else {
          return this.selectLast();
        }
      }
    }, {
      key: _symbols2.default.goLeft,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goLeft, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goLeft, this).call(this);
        }
        if (!this.selectPrevious) {
          console.warn('DirectionSelectionMixin expects a component to define a "selectPrevious" method.');
          return false;
        } else {
          return this.selectPrevious();
        }
      }
    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goRight, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goRight, this).call(this);
        }
        if (!this.selectNext) {
          console.warn('DirectionSelectionMixin expects a component to define a "selectNext" method.');
          return false;
        } else {
          return this.selectNext();
        }
      }
    }, {
      key: _symbols2.default.goStart,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goStart, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goStart, this).call(this);
        }
        if (!this.selectFirst) {
          console.warn('DirectionSelectionMixin expects a component to define a "selectFirst" method.');
          return false;
        } else {
          return this.selectFirst();
        }
      }
    }, {
      key: _symbols2.default.goUp,
      value: function value() {
        if (_get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goUp, this)) {
          _get(DirectionSelection.prototype.__proto__ || Object.getPrototypeOf(DirectionSelection.prototype), _symbols2.default.goUp, this).call(this);
        }
        if (!this.selectPrevious) {
          console.warn('DirectionSelectionMixin expects a component to define a "selectPrevious" method.');
          return false;
        } else {
          return this.selectPrevious();
        }
      }
    }]);

    return DirectionSelection;
  }(Base);

  return DirectionSelection;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = KeyboardDirectionMixin;

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which maps direction keys (Left, Right, etc.) to direction semantics
 * (go left, go right, etc.).
 *
 * This mixin expects the component to invoke a `keydown` method when a key is
 * pressed. You can use [KeyboardMixin](KeyboardMixin) for that
 * purpose, or wire up your own keyboard handling and call `keydown` yourself.
 *
 * This mixin calls methods such as `goLeft` and `goRight`. You can define
 * what that means by implementing those methods yourself. If you want to use
 * direction keys to navigate a selection, use this mixin with
 * [DirectionSelectionMixin](DirectionSelectionMixin).
 *
 * If the component defines a property called `symbols.orientation`, the value
 * of that property will constrain navigation to the horizontal or vertical axis.
 *
 * @module KeyboardDirectionMixin
 */
function KeyboardDirectionMixin(Base) {

  // The class prototype added by the mixin.
  var KeyboardDirection = function (_Base) {
    _inherits(KeyboardDirection, _Base);

    function KeyboardDirection() {
      _classCallCheck(this, KeyboardDirection);

      return _possibleConstructorReturn(this, (KeyboardDirection.__proto__ || Object.getPrototypeOf(KeyboardDirection)).apply(this, arguments));
    }

    _createClass(KeyboardDirection, [{
      key: _symbols2.default.goDown,


      /**
       * Invoked when the user wants to go/navigate down.
       * The default implementation of this method does nothing.
       */
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goDown, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goDown, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the end (e.g., of a list).
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goEnd,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goEnd, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goEnd, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate left.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goLeft,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goLeft, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goLeft, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate right.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goRight,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goRight, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goRight, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate to the start (e.g., of a
       * list). The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goStart,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goStart, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goStart, this).call(this);
        }
      }

      /**
       * Invoked when the user wants to go/navigate up.
       * The default implementation of this method does nothing.
       */

    }, {
      key: _symbols2.default.goUp,
      value: function value() {
        if (_get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goUp, this)) {
          return _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.goUp, this).call(this);
        }
      }
    }, {
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = false;

        var orientation = this[_symbols2.default.orientation] || 'both';
        var horizontal = orientation === 'horizontal' || orientation === 'both';
        var vertical = orientation === 'vertical' || orientation === 'both';

        // Ignore Left/Right keys when metaKey or altKey modifier is also pressed,
        // as the user may be trying to navigate back or forward in the browser.
        switch (event.keyCode) {
          case 35:
            // End
            handled = this[_symbols2.default.goEnd]();
            break;
          case 36:
            // Home
            handled = this[_symbols2.default.goStart]();
            break;
          case 37:
            // Left
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this[_symbols2.default.goLeft]();
            }
            break;
          case 38:
            // Up
            if (vertical) {
              handled = event.altKey ? this[_symbols2.default.goStart]() : this[_symbols2.default.goUp]();
            }
            break;
          case 39:
            // Right
            if (horizontal && !event.metaKey && !event.altKey) {
              handled = this[_symbols2.default.goRight]();
            }
            break;
          case 40:
            // Down
            if (vertical) {
              handled = event.altKey ? this[_symbols2.default.goEnd]() : this[_symbols2.default.goDown]();
            }
            break;
        }
        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.keydown, this) && _get(KeyboardDirection.prototype.__proto__ || Object.getPrototypeOf(KeyboardDirection.prototype), _symbols2.default.keydown, this).call(this, event) || false;
      }
    }]);

    return KeyboardDirection;
  }(Base);

  return KeyboardDirection;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = OpenCloseMixin;

var _attributes = __webpack_require__(5);

var attributes = _interopRequireWildcard(_attributes);

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var closePromiseKey = (0, _Symbol3.default)('closePromise');
var closeResolveKey = (0, _Symbol3.default)('closeResolve');
var closeResultKey = (0, _Symbol3.default)('closeResult');
var openedKey = (0, _Symbol3.default)('opened');
var openPromiseKey = (0, _Symbol3.default)('openPromise');
var openResolveKey = (0, _Symbol3.default)('openResolve');

/**
 * This mixin provides a consistent public API for components that open and
 * close, including overlays and various types of expandable/collapsable
 * elements.
 * 
 * The mixin provides the following members:
 * 
 * * `opened` property that is true when open, false when closed.
 * * `open`/`close` methods that set the `opened` property and return a promise
 *   for when the open/close action has completed (including any async effects).
 * * `toggle` method which toggles the opened property.
 * * `whenOpened`/`whenClosed` promises for the next time the element
 *   opens/closes.
 * 
 * If the component defines the following optional members, the mixin will take
 * advantage of them:
 * 
 * * Effect methods compatible with TransitionEffectMixin if the element wants
 *   to define async opening/closing effects. The use of transition effects is
 *   not required. If a component doesn’t use `TransitionEffectMixin` or a
 *   compatible mixin, then `OpenCloseMixin` will perform its work
 *   synchronously, with no transition effects.
 * * `symbols.openedChanged` method that will be invoked when the opened
 *   property changes.
 * 
 * The `OpenCloseMixin` is designed to support user interface elements that have
 * two states that can be described as "opened" and “closed”. These can be
 * grouped into two top-level categories:
 * 
 * 1. Elements that open over other elements — that is, overlays.
 * 2. Elements that expand and collapse inline — these may be panels that open
 *    to reveal more detail, or list items that expand to show more detail or
 *    additional commands.
 * 
 * @module OpenCloseMixin
 */
function OpenCloseMixin(Base) {

  // The class prototype added by the mixin.
  var OpenClose = function (_Base) {
    _inherits(OpenClose, _Base);

    function OpenClose() {
      _classCallCheck(this, OpenClose);

      var _this = _possibleConstructorReturn(this, (OpenClose.__proto__ || Object.getPrototypeOf(OpenClose)).call(this));

      // @ts-ignore


      createOpenPromise(_this);
      createClosePromise(_this);

      // Set defaults.
      if (typeof _this.opened === 'undefined') {
        _this.opened = _this[_symbols2.default.defaults].opened;
      }
      return _this;
    }

    _createClass(OpenClose, [{
      key: _symbols2.default.afterEffect,
      value: function value(effect) {
        if (_get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), _symbols2.default.afterEffect, this)) {
          _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), _symbols2.default.afterEffect, this).call(this, effect);
        }
        /** @type {any} */
        var element = this;
        switch (effect) {

          case 'closing':
            attributes.setClass(element, 'opened', false);
            if (this[closeResolveKey]) {
              var resolveClose = this[closeResolveKey];
              this[closeResolveKey] = null;
              resolveClose(this[closeResultKey]);
            }
            break;

          case 'opening':
            attributes.setClass(element, 'opened', true);
            if (this[openResolveKey]) {
              var resolveOpen = this[openResolveKey];
              this[openResolveKey] = null;
              resolveOpen();
            }
            break;
        }
      }

      /**
       * Close the component.
       *
       * This sets the `opened` property to true.
       * 
       * @param {any} [result] - The result of closing the component
       * @returns {Promise} A Promise that resolves when the close operation has
       * completed, including any asynchronous visual effects. The result of the
       * promise will be the object supplied to the `close` method.
       */

    }, {
      key: 'close',
      value: function close(result) {
        if (_get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'close', this)) {
          _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'close', this).call(this);
        }
        if (this.opened) {
          this[closeResultKey] = result;
          this.opened = false;
        }
        return this[closePromiseKey];
      }
    }, {
      key: 'open',


      /**
       * Open the component.
       *
       * This sets the `opened` property to true, and returns a promise that will
       * be invoked when a corresponding `close` method call is made. The
       * resolution of the promise will be whatever parameter was passed to
       * `close`.
       * 
       * @returns {Promise} A Promise that resolves when the open operation has
       * completed, including any asynchronous visual effects.
       */
      value: function open() {
        if (!this.opened) {
          this.opened = true;
        }
        return this[openPromiseKey];
      }

      /**
       * Toggles the component's open/opened state.
       */

    }, {
      key: 'toggle',
      value: function toggle() {
        this.opened = !this.opened;
      }

      /**
       * This method can be used as an alternative to listening to the
       * "opened-changed" event, particularly in situations where you want to only
       * handle the next time the component is closed.
       * 
       * @returns {Promise} A promise that resolves when the element has
       * completely closed, including the completion of any asynchronous opening
       * effect.
       */

    }, {
      key: 'whenClosed',
      value: function whenClosed() {
        return this[closePromiseKey];
      }

      /**
       * This method can be used as an alternative to listening to the
       * "opened-changed" event, particularly in situations where you want to only
       * handle the next time the component is opened.
       *
       * @returns {Promise} A promise that resolves when the element has
       * completely opened, including the completion of any asynchronous closing
       * effect.
       */

    }, {
      key: 'whenOpened',
      value: function whenOpened() {
        return this[openPromiseKey];
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), _symbols2.default.defaults, this) || {};
        defaults.opened = false;
        return defaults;
      }

      /**
       * True if the component is curently opened.
       *
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'opened',
      get: function get() {
        return this[openedKey];
      }
      /**
       * @param {boolean} opened
       */
      ,
      set: function set(opened) {
        var parsedOpened = String(opened) === 'true';
        var changed = parsedOpened !== this[openedKey];
        this[openedKey] = parsedOpened;
        if ('opened' in Base.prototype) {
          _set(OpenClose.prototype.__proto__ || Object.getPrototypeOf(OpenClose.prototype), 'opened', parsedOpened, this);
        }
        if (changed) {

          // Set up a new promise for opposite of action we're doing.
          if (opened) {
            createClosePromise(this);
          } else {
            createOpenPromise(this);
          }

          if (this[_symbols2.default.openedChanged]) {
            this[_symbols2.default.openedChanged](parsedOpened);
          }

          var effect = opened ? 'opening' : 'closing';
          // Does component support async effects?
          if (this[_symbols2.default.showEffect]) {
            // Trigger asynchronous open/close.
            this[_symbols2.default.showEffect](effect);
          } else {
            // Invoke synchronous open/close.
            if (this[_symbols2.default.beforeEffect]) {
              this[_symbols2.default.beforeEffect](effect);
            }
            this[_symbols2.default.afterEffect](effect);
          }

          if (this[_symbols2.default.raiseChangeEvents]) {
            var event = new CustomEvent('opened-changed');
            this.dispatchEvent(event);
          }
        }
      }
    }]);

    return OpenClose;
  }(Base);

  return OpenClose;
}

function createClosePromise(element) {
  element[closePromiseKey] = new Promise(function (resolve, reject) {
    element[closeResolveKey] = resolve;
  });
}

function createOpenPromise(element) {
  element[openPromiseKey] = new Promise(function (resolve, reject) {
    element[openResolveKey] = resolve;
  });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = OverlayMixin;

var _attributes = __webpack_require__(5);

var attributes = _interopRequireWildcard(_attributes);

var _deepContains = __webpack_require__(35);

var _deepContains2 = _interopRequireDefault(_deepContains);

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var appendedToDocumentKey = (0, _Symbol3.default)('appendedToDocument');
var forceAppendToBodyKey = (0, _Symbol3.default)('forceAppendToBody');
var placeholderKey = (0, _Symbol3.default)('placeholder');
var previousFocusedElementKey = (0, _Symbol3.default)('previousFocusedElement');
var previousZIndexKey = (0, _Symbol3.default)('previousZIndex');

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
 * All other aspects of overlay behavior are handled by other mixins and
 * wrappers. For example, addition of a backdrop element behind the overlay is
 * handled by `BackdropWrapper`. Intercepting and responding to UI events is
 * handled by `PopupModalityMixin` and `DialogModalityMixin`. Management of
 * asynchronous visual opening/closing effects are provided by
 * `TransitionEffectMixin`.
 * 
 * @module OverlayMixin
 */
function OverlayMixin(Base) {

  // The class prototype added by the mixin.
  var Overlay = function (_Base) {
    _inherits(Overlay, _Base);

    function Overlay() {
      _classCallCheck(this, Overlay);

      var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this));
      // @ts-ignore


      _this.addEventListener('blur', function () {
        // The focus was taken from us, perhaps because the focus was set
        // elsewhere, so we don't want to try to restore focus when closing.
        _this[previousFocusedElementKey] = null;
      });
      return _this;
    }

    _createClass(Overlay, [{
      key: _symbols2.default.afterEffect,
      value: function value(effect) {
        if (_get(Overlay.prototype.__proto__ || Object.getPrototypeOf(Overlay.prototype), _symbols2.default.afterEffect, this)) {
          _get(Overlay.prototype.__proto__ || Object.getPrototypeOf(Overlay.prototype), _symbols2.default.afterEffect, this).call(this, effect);
        }
        switch (effect) {
          case 'closing':
            // Hide the element.
            makeVisible(this, false);

            // Restore z-index.
            this.style.zIndex = this[previousZIndexKey] === '' ? null : this[previousZIndexKey];
            this[previousZIndexKey] = null;

            if (this[appendedToDocumentKey]) {
              // The overlay wasn't in the document when opened, so we added it.
              // Remove it now.
              this.parentNode.removeChild(this);
              this[appendedToDocumentKey] = false;
            } else if (this[placeholderKey]) {
              // The overlay was moved; return it to its original location.
              this[placeholderKey].parentNode.replaceChild(this, this[placeholderKey]);
              this[placeholderKey] = null;
            }

            break;
        }
      }
    }, {
      key: _symbols2.default.beforeEffect,
      value: function value(effect) {
        if (_get(Overlay.prototype.__proto__ || Object.getPrototypeOf(Overlay.prototype), _symbols2.default.beforeEffect, this)) {
          _get(Overlay.prototype.__proto__ || Object.getPrototypeOf(Overlay.prototype), _symbols2.default.beforeEffect, this).call(this, effect);
        }
        switch (effect) {

          case 'closing':
            // Restore previously focused element before closing.
            if (this[previousFocusedElementKey]) {
              this[previousFocusedElementKey].focus();
              this[previousFocusedElementKey] = null;
            }
            break;

          case 'opening':
            // Remember which element had the focus before we opened.
            this[previousFocusedElementKey] = document.activeElement;

            // Add the element to the document if it's not present yet.
            /** @type {any} */
            var element = this;
            var isElementInBody = (0, _deepContains2.default)(document.body, element);
            if (isElementInBody) {
              if (this.teleportToBodyOnOpen) {
                // Swap a placeholder for the overlay and move the overlay to the
                // top level of the document body.
                this[placeholderKey] = createPlaceholder(this);
                this.parentNode.replaceChild(this[placeholderKey], this);
                document.body.appendChild(element);
              }
            } else {
              // Overlay isn't in document yet.
              this[appendedToDocumentKey] = true;
              document.body.appendChild(element);
            }

            // Remember the element's current z-index.
            this[previousZIndexKey] = this.style.zIndex;
            // It seems like it should be possible to rely on inspecting zIndex
            // via getComputedStyle. However, unit testing reveals at least one
            // case where an inline zIndex style change made immediately before
            // opening the overlay was not reflected by getComputedStyle. Hence,
            // we also check the inline style value.
            // Also note that Safari returns a default zIndex of "0" for elements
            // with position: fixed, while Blink returns "auto".
            var style = getComputedStyle(element);
            var computedZIndex = style.zIndex;
            if (element.style.zIndex === '' && (computedZIndex === 'auto' || style.position === 'fixed' && computedZIndex === '0')) {
              // Assign default z-index.
              this.style.zIndex = maxZIndexInUse() + 1;
            }

            // Finally make it visible and give it focus.
            makeVisible(this, true);
            this.focus();
            break;

        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(Overlay.prototype.__proto__ || Object.getPrototypeOf(Overlay.prototype), 'connectedCallback', this)) {
          _get(Overlay.prototype.__proto__ || Object.getPrototypeOf(Overlay.prototype), 'connectedCallback', this).call(this);
        }
        /** @type {any} */
        var element = this;
        attributes.writePendingAttributes(element);
        this.setAttribute('tabindex', '0');
      }

      /**
       * True if the overlay should be moved from its existing place in the DOM to
       * the end of the document body when the overlay is opened, then returned to
       * its original location when closed. This property exists to address a
       * small number of challenging overlay edge cases, and should generally be
       * left false.
       * 
       * @type {boolean}
       * @default false
       */

    }, {
      key: 'teleportToBodyOnOpen',
      get: function get() {
        return this[forceAppendToBodyKey];
      }
      /**
       * @param {boolean} teleportToBodyOnOpen
       */
      ,
      set: function set(teleportToBodyOnOpen) {
        var parsed = String(teleportToBodyOnOpen) === 'true';
        this[forceAppendToBodyKey] = parsed;
        if ('teleportToBodyOnOpen' in Base.prototype) {
          _set(Overlay.prototype.__proto__ || Object.getPrototypeOf(Overlay.prototype), 'opened', parsed, this);
        }
        /** @type {any} */
        var element = this;
        attributes.setAttribute(element, 'teleport-to-body-on-open', parsed);
      }
    }]);

    return Overlay;
  }(Base);

  return Overlay;
}

/*
 * Return a placeholder element used to hold an overlay's position in the DOM if
 * it is using teleportToBodyOnOpen, so that we can return the overlay to its
 * original location when it's closed.
 */
function createPlaceholder(element) {
  var message = ' Placeholder for the open ' + element.localName + ', which will return here when closed. ';
  var placeholder = document.createComment(message);
  return placeholder;
}

function makeVisible(element, visible) {
  attributes.setClass(element, 'visible', visible);
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
  var elements = document.body.querySelectorAll('*');
  var zIndices = Array.prototype.map.call(elements, function (element) {
    var style = getComputedStyle(element);
    var zIndex = 0;
    if (style.position !== 'static' && style.zIndex !== 'auto') {
      var parsed = style.zIndex ? parseInt(style.zIndex) : 0;
      zIndex = !isNaN(parsed) ? parsed : 0;
    }
    return zIndex;
  });
  return Math.max.apply(Math, _toConsumableArray(zIndices));
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ClickSelectionMixin;

var _deepContains = __webpack_require__(35);

var _deepContains2 = _interopRequireDefault(_deepContains);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which maps a click (actually, a mousedown) to an item selection.
 *
 * This simple mixin is useful in list-like elements like [ListBox](ListBox),
 * where a click on a list item implicitly selects it.
 *
 * The standard use for this mixin is in list-like elements. Native list
 * boxes don't appear to be consistent with regard to whether they select
 * on mousedown or click/mouseup. This mixin assumes the use of mousedown.
 * On touch devices, that event appears to trigger when the touch is *released*.
 *
 * This mixin only listens to mousedown events for the primary mouse button
 * (typically the left button). Right-clicks are ignored so that the browser
 * may display a context menu.
 *
 * Much has been written about how to ensure "fast tap" behavior on mobile
 * devices. This mixin makes a very straightforward use of a standard event, and
 * this appears to perform well on mobile devices when, e.g., the viewport is
 * configured with `width=device-width`.
 *
 * This mixin expects the component to provide an `items` property. It also
 * expects the component to define a `selectedItem` property; you can provide
 * that yourself, or use [SingleSelectionMixin](SingleSelectionMixin).
 *
 * If the component receives a clicks that doesn't correspond to an item (e.g.,
 * the user clicks on the element background visible between items), the
 * selection will be removed. However, if the component sets `selectionRequired`
 * to true, a background click will *not* remove the selection.
 *
 * @module ClickSelectionMixin
 */
function ClickSelectionMixin(Base) {

  // The class prototype added by the mixin.
  var ClickSelection = function (_Base) {
    _inherits(ClickSelection, _Base);

    function ClickSelection() {
      _classCallCheck(this, ClickSelection);

      var _this = _possibleConstructorReturn(this, (ClickSelection.__proto__ || Object.getPrototypeOf(ClickSelection)).call(this));
      // @ts-ignore


      _this.addEventListener('mousedown', function (event) {

        // Only process events for the main (usually left) button.
        if (event.button !== 0) {
          return;
        }

        _this[_symbols2.default.raiseChangeEvents] = true;

        // In some situations, the event target will not be the child which was
        // originally clicked on. E.g.,  If the item clicked on is a button, the
        // event seems to be raised in phase 2 (AT_TARGET) — but the event
        // target will be the component, not the item that was clicked on.
        // Instead of using the event target, we get the first node in the
        // event's composed path.
        // @ts-ignore
        var target = event.composedPath()[0];

        // Find which item was clicked on and, if found, select it. For elements
        // which don't require a selection, a background click will determine
        // the item was null, in which we case we'll remove the selection.
        var item = itemForTarget(_this, target);
        if (item || !_this.selectionRequired) {

          if (!('selectedItem' in _this)) {
            console.warn('ClickSelectionMixin expects a component to define a "selectedItem" property.');
          } else {
            _this.selectedItem = item;
          }

          // We don't call preventDefault here. The default behavior for
          // mousedown includes setting keyboard focus if the element doesn't
          // already have the focus, and we want to preserve that behavior.
          event.stopPropagation();
        }

        _this[_symbols2.default.raiseChangeEvents] = false;
      });
      return _this;
    }

    return ClickSelection;
  }(Base);

  return ClickSelection;
}

/**
 * Return the list item that is, or contains, the indicated target node.
 * Return null if not found.
 *
 * This is sufficiently flexible to accommodate the possibility of the target
 * being inside arbitrarily deep layers of shadow DOM containment.
 */
function itemForTarget(element, target) {
  var items = element.items;
  for (var index in element.items) {
    var item = items[index];
    if ((0, _deepContains2.default)(item, target)) {
      return item;
    }
  }
  return null;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = DefaultSlotContentMixin;

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var slotchangeFiredKey = (0, _Symbol3.default)('slotchangeFired');

/**
 * Mixin which defines a component's `symbols.content` property as the flattened
 * set of nodes assigned to its default slot.
 *
 * This also provides notification of changes to a component's content. It
 * will invoke a `symbols.contentChanged` method when the component is first
 * instantiated, and whenever its distributed children change. This is intended
 * to satisfy the Gold Standard checklist item for monitoring
 * [Content Changes](https://github.com/webcomponents/gold-standard/wiki/Content-Changes).
 *
 * Example:
 *
 * ```
 * class CountingElement extends DefaultSlotContentMixin(HTMLElement) {
 *
 *   constructor() {
 *     super();
 *     let root = this.attachShadow({ mode: 'open' });
 *     root.innerHTML = `<slot></slot>`;
 *     this[symbols.shadowCreated]();
 *   }
 *
 *   [symbols.contentChanged]() {
 *     if (super[symbols.contentChanged]) { super[symbols.contentChanged](); }
 *     // Count the component's children, both initially and when changed.
 *     this.count = this.distributedChildren.length;
 *   }
 *
 * }
 * ```
 *
 * To use this mixin, the component should define a default (unnamed) `slot`
 * element in its shadow subtree.
 *
 * To receive `contentChanged` notification, this mixin expects a component to
 * invoke a method called `symbols.shadowCreated` after the component's shadow
 * root has been created and populated.
 *
 * Most Elix [elements](elements) use `DefaultSlotContentMixin`, including
 * [ListBox](ListBox), [Modes](Modes), and [Tabs](Tabs).
 *
 * @module DefaultSlotContentMixin
 */
function DefaultSlotContentMixin(Base) {

  // The class prototype added by the mixin.
  var DefaultSlotContent = function (_Base) {
    _inherits(DefaultSlotContent, _Base);

    function DefaultSlotContent() {
      _classCallCheck(this, DefaultSlotContent);

      return _possibleConstructorReturn(this, (DefaultSlotContent.__proto__ || Object.getPrototypeOf(DefaultSlotContent)).apply(this, arguments));
    }

    _createClass(DefaultSlotContent, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        if (_get(DefaultSlotContent.prototype.__proto__ || Object.getPrototypeOf(DefaultSlotContent.prototype), 'connectedCallback', this)) {
          _get(DefaultSlotContent.prototype.__proto__ || Object.getPrototypeOf(DefaultSlotContent.prototype), 'connectedCallback', this).call(this);
        }
        // HACK for Blink, which doesn't correctly fire initial slotchange.
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=696659
        setTimeout(function () {
          // By this point, the slotchange event should have fired.
          if (!_this2[slotchangeFiredKey]) {
            // slotchange event didn't fire; we're in Blink. Force the invocation
            // of contentChanged that would have happened on slotchange.
            if (_this2[_symbols2.default.contentChanged]) {
              _this2[_symbols2.default.contentChanged]();
            }
          }
        });
      }

      /**
       * The content of this component, defined to be the flattened set of
       * nodes assigned to its default unnamed slot.
       *
       * @type {Element[]}
       */

    }, {
      key: _symbols2.default.shadowCreated,
      value: function value() {
        var _this3 = this;

        if (_get(DefaultSlotContent.prototype.__proto__ || Object.getPrototypeOf(DefaultSlotContent.prototype), _symbols2.default.shadowCreated, this)) {
          _get(DefaultSlotContent.prototype.__proto__ || Object.getPrototypeOf(DefaultSlotContent.prototype), _symbols2.default.shadowCreated, this).call(this);
        }
        // Listen to changes on the default slot.
        var slot = defaultSlot(this);
        if (slot) {
          slot.addEventListener('slotchange', function (event) {
            _this3[slotchangeFiredKey] = true;
            if (_this3[_symbols2.default.contentChanged]) {
              _this3[_symbols2.default.contentChanged]();
            }
          });
        }
      }
    }, {
      key: _symbols2.default.content,
      get: function get() {
        var slot = defaultSlot(this);
        var assignedNodes = void 0;
        // As of 18 July 2017, the polyfill contains a bug
        // (https://github.com/webcomponents/shadydom/issues/165)
        // that throws an exception if assignedNodes is read during a constructor
        // Until that bug is fixed, we work around the problem by catching the
        // exception.
        try {
          assignedNodes = slot ? slot.assignedNodes({ flatten: true }) : [];
        } catch (e) {
          assignedNodes = [];
        }
        return assignedNodes;
      }
    }]);

    return DefaultSlotContent;
  }(Base);

  return DefaultSlotContent;
}

function defaultSlot(element) {
  var defaultSlot = element.shadowRoot && element.shadowRoot.querySelector('slot:not([name])');
  if (element.shadowRoot && !defaultSlot) {
    console.warn('DefaultSlotContentMixin expects a component to define a shadow tree that includes a default (unnamed) slot.');
  }
  return defaultSlot;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FocusRingMixin;

var _attributes = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// Global state shared by all elements using this mixin.
//

// We assume that the keyboard changed the focus unless we have proof otherwise.
var focusedWithKeyboard = true;

// Flag used to track keyboard focus state across window blur/focus events.
var previousFocusedWithKeyboard = false;

var listeningToWindowFocus = false;

/**
 * Adds a `focus-ring` class to the element when (and only when) it receives
 * focus via the keyboard. This is useful for buttons and other components that
 * don't generally show a focus ring for mouse/touch interaction.
 *
 * The following demo shows button that display a focus ring only when
 * you move the focus onto them via the keyboard, and not with the mouse or touch.
 *
 * [Button components using FocusRingMixin](/demos/focusRing.html)
 *
 * This is inspired by work on the `:focus-ring` pseudo-selector.
 * See https://github.com/wicg/focus-ring for details.
 *
 * This mixin manages a `focus-ring` class on an element that be used to
 * suppress the default focus ring unless the keyboard was used. The element's
 * stylesheet should include a CSS rule of the form:
 *
 *     :host(:focus:not(.focus-ring)) {
 *       outline: none;
 *     }
 *
 * @module FocusRingMixin
 */
function FocusRingMixin(Base) {

  // The class prototype added by the mixin.
  var FocusRing = function (_Base) {
    _inherits(FocusRing, _Base);

    function FocusRing() {
      _classCallCheck(this, FocusRing);

      // We only want to start listening to window focus events if an element
      // using this mixin is actually instantiated, and we only do that for the
      // first such element. All elements can share that window focus listeners.
      var _this = _possibleConstructorReturn(this, (FocusRing.__proto__ || Object.getPrototypeOf(FocusRing)).call(this));
      // @ts-ignore


      if (!listeningToWindowFocus) {
        window.addEventListener('focus', windowFocused);

        // Firefox does not appear to listen to focus events on the window.
        // We listen to focus events on the document instead. There does not
        // appear to be a browser that listens to focus on both window and
        // document, so wiring up focus listeners to both seems to be safe.
        document.addEventListener('focus', windowFocused);

        listeningToWindowFocus = true;
      }

      _this.addEventListener('focus', function (event) {
        /** @type {any} */
        var element = _this;
        (0, _attributes.toggleClass)(element, 'focus-ring', focusedWithKeyboard);

        // Remember how focus changed in case window loses focus.
        previousFocusedWithKeyboard = focusedWithKeyboard;

        // Go back to assuming use of the keyboard.
        focusedWithKeyboard = true;
      });

      _this.addEventListener('mousedown', function (event) {
        // If this element receives focus, it won't be because of the keyboard.
        focusedWithKeyboard = false;
      });

      _this.addEventListener('blur', function (event) {
        _this.classList.remove('focus-ring');
      });
      return _this;
    }

    return FocusRing;
  }(Base);

  return FocusRing;
}

// The window has regained focus after having lost it. If the last
// element that had the focus obtained the focus via the keyboard,
// set our keyboard input flag. That previously-focused element is
// about to receive a focus event, and the handler for that can then
// treat the situation as if the focus was obtained via the keyboard.
// That helps a keyboard user reacquire the focused element when
// returning to the window.
function windowFocused() {
  focusedWithKeyboard = previousFocusedWithKeyboard;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = function (Base) {

  // The class prototype added by the mixin.
  var SelectionAria = function (_Base) {
    _inherits(SelectionAria, _Base);

    function SelectionAria() {
      _classCallCheck(this, SelectionAria);

      return _possibleConstructorReturn(this, (SelectionAria.__proto__ || Object.getPrototypeOf(SelectionAria)).apply(this, arguments));
    }

    _createClass(SelectionAria, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), 'connectedCallback', this)) {
          _get(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), 'connectedCallback', this).call(this);
        }

        // Set default ARIA role for the overall component.
        if (this.getAttribute('role') == null && this[_symbols2.default.defaults].role) {
          this.setAttribute('role', this[_symbols2.default.defaults].role);
        }
      }
    }, {
      key: _symbols2.default.itemAdded,
      value: function value(item) {
        if (_get(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), _symbols2.default.itemAdded, this)) {
          _get(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), _symbols2.default.itemAdded, this).call(this, item);
        }

        if (!item.getAttribute('role')) {
          // Assign a default ARIA role for an individual item.
          item.setAttribute('role', this[_symbols2.default.defaults].itemRole);
        }

        // Ensure each item has an ID so we can set aria-activedescendant on the
        // overall list whenever the selection changes.
        //
        // The ID will take the form of a base ID plus a unique integer. The base
        // ID will be incorporate the component's own ID. E.g., if a component has
        // ID "foo", then its items will have IDs that look like "_fooOption1". If
        // the compnent has no ID itself, its items will get IDs that look like
        // "_option1". Item IDs are prefixed with an underscore to differentiate
        // them from manually-assigned IDs, and to minimize the potential for ID
        // conflicts.
        if (!item.id) {
          var baseId = this.id ? "_" + this.id + "Option" : "_option";
          item.id = baseId + idCount++;
        }
      }
    }, {
      key: _symbols2.default.itemSelected,
      value: function value(item, selected) {
        if (_get(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), _symbols2.default.itemSelected, this)) {
          _get(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
        }
        item.setAttribute('aria-selected', selected);
        var itemId = item.id;
        if (itemId && selected) {
          this.setAttribute('aria-activedescendant', itemId);
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), _symbols2.default.defaults, this) || {};
        defaults.role = 'listbox';
        defaults.itemRole = 'option';
        return defaults;
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in Base.prototype) {
          _set(SelectionAria.prototype.__proto__ || Object.getPrototypeOf(SelectionAria.prototype), 'selectedItem', item, this);
        }
        if (item == null) {
          // Selection was removed.
          this.removeAttribute('aria-activedescendant');
        }
      }
    }]);

    return SelectionAria;
  }(Base);

  return SelectionAria;
};

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Used to assign unique IDs to item elements without IDs.
var idCount = 0;

/**
 * Mixin which treats the selected item in a list as the active item in ARIA
 * accessibility terms.
 *
 * Handling ARIA selection state properly is actually quite complex:
 *
 * * The items in the list need to be indicated as possible items via an ARIA
 *   `role` attribute value such as "option".
 * * The selected item need to be marked as selected by setting the item's
 *   `aria-selected` attribute to true *and* the other items need be marked as
 *   *not* selected by setting `aria-selected` to false.
 * * The outermost element with the keyboard focus needs to have attributes
 *   set on it so that the selection is knowable at the list level via the
 *   `aria-activedescendant` attribute.
 * * Use of `aria-activedescendant` in turn requires that all items in the
 *   list have ID attributes assigned to them.
 *
 * This mixin tries to address all of the above requirements. To that end,
 * this mixin will assign generated IDs to any item that doesn't already have
 * an ID.
 *
 * ARIA relies on elements to provide `role` attributes. This mixin will apply
 * a default role of "listbox" on the outer list if it doesn't already have an
 * explicit role. Similarly, this mixin will apply a default role of "option"
 * to any list item that does not already have a role specified.
 *
 * This mixin expects a set of members that manage the state of the selection:
 * `[symbols.itemSelected]`, `[symbols.itemAdded]`, and `selectedItem`. You can
 * supply these yourself, or do so via
 * [SingleSelectionMixin](SingleSelectionMixin).
 *
 * @module
 */

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _BackdropWrapper = __webpack_require__(25);

var _BackdropWrapper2 = _interopRequireDefault(_BackdropWrapper);

var _FocusCaptureWrapper = __webpack_require__(26);

var _FocusCaptureWrapper2 = _interopRequireDefault(_FocusCaptureWrapper);

var _DialogModalityMixin = __webpack_require__(31);

var _DialogModalityMixin2 = _interopRequireDefault(_DialogModalityMixin);

var _KeyboardMixin = __webpack_require__(4);

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _OpenCloseMixin = __webpack_require__(10);

var _OpenCloseMixin2 = _interopRequireDefault(_OpenCloseMixin);

var _OverlayMixin = __webpack_require__(11);

var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base =
// Relative order of wrapper application matters: first focus capture
// wrapper, then backdrop wrapper. Remaining mixins can be applied in
// any order.
(0, _BackdropWrapper2.default)((0, _FocusCaptureWrapper2.default)((0, _AttributeMarshallingMixin2.default)((0, _DialogModalityMixin2.default)((0, _KeyboardMixin2.default)((0, _OpenCloseMixin2.default)((0, _OverlayMixin2.default)((0, _ShadowTemplateMixin2.default)(HTMLElement))))))));

/**
 * This component presents its children as a basic modal dialog which appears on
 * top of the main page content and which the user must interact with before
 * they can return to the page.
 * 
 * Dialog uses `BackdropWrapper` to add a backdrop behind the main overlay
 * content. Both the backdrop and the dialog itself can be styled.
 * 
 * @extends {HTMLElement}
 * @mixes AttributeMarshallingMixin
 * @mixes BackdropWrapper
 * @mixes DialogModalityMixin
 * @mixes FocusCaptureWrapper
 * @mixes KeyboardMixin
 * @mixes OpenCloseMixin
 * @mixes OverlayMixin
 * @mixes ShadowTemplateMixin
 */

var Dialog = function (_Base) {
  _inherits(Dialog, _Base);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: _symbols2.default.template,
    value: function value(filler) {
      return _get(Dialog.prototype.__proto__ || Object.getPrototypeOf(Dialog.prototype), _symbols2.default.template, this).call(this, '\n      <style>\n        :host {\n          align-items: center;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n\n        :host(:not(.visible)) {\n          display: none;\n        }\n\n        #backdrop {\n          background: black;\n          opacity: 0.2;\n        }\n\n        #overlayContent {\n          background: white;\n          border: 1px solid rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n        }\n      </style>\n      ' + (filler || '<slot></slot>') + '\n    ');
    }
  }]);

  return Dialog;
}(Base);

customElements.define('elix-dialog', Dialog);
exports.default = Dialog;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _ContentItemsMixin = __webpack_require__(7);

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DefaultSlotContentMixin = __webpack_require__(13);

var _DefaultSlotContentMixin2 = _interopRequireDefault(_DefaultSlotContentMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _SingleSelectionMixin = __webpack_require__(6);

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = (0, _AttributeMarshallingMixin2.default)((0, _ContentItemsMixin2.default)((0, _DefaultSlotContentMixin2.default)((0, _ShadowTemplateMixin2.default)((0, _SingleSelectionMixin2.default)(HTMLElement)))));

/**
 * Shows exactly one child element at a time. This can be useful, for example,
 * if a given UI element has multiple modes that present substantially different
 * elements.
 *
 * This component doesn't provide any UI for changing which mode is shown. A
 * common pattern in which buttons select the mode are tabs, a pattern
 * implemented by the [Tabs](Tabs) component.
 *
 * @extends HTMLElement
 * @mixes AttributeMarshallingMixin
 * @mixes ContentItemsMixin
 * @mixes DefaultSlotContentMixin
 * @mixes ShadowTemplateMixin
 * @mixes SingleSelectionMixin
 */

var Modes = function (_Base) {
  _inherits(Modes, _Base);

  function Modes() {
    _classCallCheck(this, Modes);

    return _possibleConstructorReturn(this, (Modes.__proto__ || Object.getPrototypeOf(Modes)).apply(this, arguments));
  }

  _createClass(Modes, [{
    key: _symbols2.default.itemAdded,
    value: function value(item) {
      if (_get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), _symbols2.default.itemAdded, this)) {
        _get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), _symbols2.default.itemAdded, this).call(this, item);
      }
      // TODO: See node about aria-hidden below.
      // item.setAttribute('aria-hidden', 'false');
    }
  }, {
    key: _symbols2.default.itemSelected,
    value: function value(item, selected) {
      if (_get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), _symbols2.default.itemSelected, this)) {
        _get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
      }
      item.style.display = selected ? '' : 'none';
      // TODO: Should the modes which are not visible be exposed to ARIA?
      // Sometimes this will be desirable, as when an inactive mode should be
      // both physically invisible and invisible to ARIA. In other cases, it
      // might be desirable to let the user navigate the modes with the keyboard,
      // in which case ARIA should be able to see the inactive modes.
      // item.setAttribute('aria-hidden', !selected);
    }
  }, {
    key: _symbols2.default.template,
    value: function value(filler) {
      return '\n      <style>\n        :host {\n          display: inline-block;\n        }\n      </style>\n      ' + (filler || '<slot></slot>') + '\n    ';
    }
  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(Modes.prototype.__proto__ || Object.getPrototypeOf(Modes.prototype), _symbols2.default.defaults, this) || {};
      defaults.selectionRequired = true;
      return defaults;
    }
  }]);

  return Modes;
}(Base);

customElements.define('elix-modes', Modes);
exports.default = Modes;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = KeyboardPagedSelectionMixin;

var _defaultScrollTarget = __webpack_require__(22);

var _defaultScrollTarget2 = _interopRequireDefault(_defaultScrollTarget);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which maps page keys (Page Up, Page Down) into operations that move
 * the selection by one page.
 *
 * The keyboard interaction model generally follows that of Microsoft Windows'
 * list boxes instead of those in OS X:
 *
 * * The Page Up/Down and Home/End keys actually change the selection, rather
 *   than just scrolling. The former behavior seems more generally useful for
 *   keyboard users.
 *
 * * Pressing Page Up/Down will change the selection to the topmost/bottommost
 *   visible item if the selection is not already there. Thereafter, the key
 *   will move the selection up/down by a page, and (per the above point) make
 *   the selected item visible.
 *
 * To ensure the selected item is in view following use of Page Up/Down, use
 * the related [SelectionInViewMixin](SelectionInViewMixin).
 *
 * This mixin expects the component to provide:
 *
 * * A `[symbols.keydown]` method invoked when a key is pressed. You can use
 *   [KeyboardMixin](KeyboardMixin) for that purpose, or wire up your own
 *   keyboard handling and call `[symbols.keydown]` yourself.
 * * A `selectedIndex` property that indicates the index of the selected item.
 *
 * @module KeyboardPagedSelectionMixin
 */
function KeyboardPagedSelectionMixin(Base) {

  // The class prototype added by the mixin.
  var KeyboardPagedSelection = function (_Base) {
    _inherits(KeyboardPagedSelection, _Base);

    function KeyboardPagedSelection() {
      _classCallCheck(this, KeyboardPagedSelection);

      return _possibleConstructorReturn(this, (KeyboardPagedSelection.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection)).apply(this, arguments));
    }

    _createClass(KeyboardPagedSelection, [{
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = false;
        var orientation = this[_symbols2.default.orientation];
        if (orientation !== 'horizontal') {
          switch (event.keyCode) {
            case 33:
              // Page Up
              handled = this.pageUp();
              break;
            case 34:
              // Page Down
              handled = this.pageDown();
              break;
          }
        }
        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), _symbols2.default.keydown, this) && _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), _symbols2.default.keydown, this).call(this, event);
      }

      /**
       * Scroll down one page.
       */

    }, {
      key: 'pageDown',
      value: function pageDown() {
        if (_get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageDown', this)) {
          _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageDown', this).call(this);
        }
        return scrollOnePage(this, true);
      }

      /**
       * Scroll up one page.
       */

    }, {
      key: 'pageUp',
      value: function pageUp() {
        if (_get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageUp', this)) {
          _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), 'pageUp', this).call(this);
        }
        return scrollOnePage(this, false);
      }

      /* Provide a default scrollTarget implementation if none exists. */

    }, {
      key: _symbols2.default.scrollTarget,
      get: function get() {
        /** @type {any} */
        var element = this;
        return _get(KeyboardPagedSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPagedSelection.prototype), _symbols2.default.scrollTarget, this) || (0, _defaultScrollTarget2.default)(element);
      }
    }]);

    return KeyboardPagedSelection;
  }(Base);

  return KeyboardPagedSelection;
}

/**
 * Return the item whose content spans the given y position (relative to the
 * top of the list's scrolling client area), or null if not found.
 * 
 * If downward is true, move down the list of items to find the first item
 * found at the given y position; if downward is false, move up the list of
 * 
 * items to find the last item at that position.
 */
function getIndexOfItemAtY(element, scrollTarget, y, downward) {

  var items = element.items;
  var start = downward ? 0 : items.length - 1;
  var end = downward ? items.length : 0;
  var step = downward ? 1 : -1;

  var topOfClientArea = scrollTarget.offsetTop + scrollTarget.clientTop;

  // Find the item spanning the indicated y coordinate.
  var item = void 0;
  var itemIndex = start;
  var itemTop = void 0;
  var found = false;
  while (itemIndex !== end) {
    item = items[itemIndex];
    itemTop = item.offsetTop - topOfClientArea;
    var itemBottom = itemTop + item.offsetHeight;
    if (itemTop <= y && itemBottom >= y) {
      // Item spans the indicated y coordinate.
      found = true;
      break;
    }
    itemIndex += step;
  }

  if (!found) {
    return null;
  }

  // We may have found an item whose padding spans the given y coordinate,
  // but whose content is actually above/below that point.
  // TODO: If the item has a border, then padding should be included in
  // considering a hit.
  var itemStyle = getComputedStyle(item);
  var itemPaddingTop = itemStyle.paddingTop ? parseFloat(itemStyle.paddingTop) : 0;
  var itemPaddingBottom = itemStyle.paddingBottom ? parseFloat(itemStyle.paddingBottom) : 0;
  var contentTop = itemTop + item.clientTop + itemPaddingTop;
  var contentBottom = contentTop + item.clientHeight - itemPaddingTop - itemPaddingBottom;
  if (downward && contentTop <= y || !downward && contentBottom >= y) {
    // The indicated coordinate hits the actual item content.
    return itemIndex;
  } else {
    // The indicated coordinate falls within the item's padding. Back up to
    // the item below/above the item we found and return that.
    return itemIndex - step;
  }
}

/**
 * Move by one page downward (if downward is true), or upward (if false).
 * Return true if we ended up changing the selection, false if not.
 */
function scrollOnePage(element, downward) {

  // Determine the item visible just at the edge of direction we're heading.
  // We'll select that item if it's not already selected.
  var scrollTarget = element[_symbols2.default.scrollTarget];
  var edge = scrollTarget.scrollTop + (downward ? scrollTarget.clientHeight : 0);
  var indexOfItemAtEdge = getIndexOfItemAtY(element, scrollTarget, edge, downward);

  var selectedIndex = element.selectedIndex;

  var newIndex = void 0;

  if (indexOfItemAtEdge && selectedIndex === indexOfItemAtEdge) {
    // The item at the edge was already selected, so scroll in the indicated
    // direction by one page. Leave the new item at that edge selected.
    var delta = (downward ? 1 : -1) * scrollTarget.clientHeight;
    newIndex = getIndexOfItemAtY(element, scrollTarget, edge + delta, downward);
  } else {
    // The item at the edge wasn't selected yet. Instead of scrolling, we'll
    // just select that item. That is, the first attempt to page up/down
    // usually just moves the selection to the edge in that direction.
    newIndex = indexOfItemAtEdge;
  }

  if (!newIndex) {
    // We can't find an item in the direction we want to travel. Select the
    // last item (if moving downward) or first item (if moving upward).
    newIndex = downward ? element.items.length - 1 : 0;
  }

  if (newIndex !== selectedIndex) {
    element.selectedIndex = newIndex;
    return true; // We handled the page up/down ourselves.
  } else {
    return false; // We didn't do anything.
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = KeyboardPrefixSelectionMixin;

var _constants = __webpack_require__(33);

var _constants2 = _interopRequireDefault(_constants);

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var itemTextContentsKey = (0, _Symbol3.default)('itemTextContents');
var typedPrefixKey = (0, _Symbol3.default)('typedPrefix');
var prefixTimeoutKey = (0, _Symbol3.default)('prefixTimeout');
var settingSelectionKey = (0, _Symbol3.default)('settingSelection');

/**
 * Mixin that handles list box-style prefix typing, in which the user can type
 * a string to select the first item that begins with that string.
 *
 * Example: suppose a component using this mixin has the following items:
 *
 *     <sample-list-component>
 *       <div>Apple</div>
 *       <div>Apricot</div>
 *       <div>Banana</div>
 *       <div>Blackberry</div>
 *       <div>Blueberry</div>
 *       <div>Cantaloupe</div>
 *       <div>Cherry</div>
 *       <div>Lemon</div>
 *       <div>Lime</div>
 *     </sample-list-component>
 *
 * If this component receives the focus, and the user presses the "b" or "B"
 * key, the "Banana" item will be selected, because it's the first item that
 * matches the prefix "b". (Matching is case-insensitive.) If the user now
 * presses the "l" or "L" key quickly, the prefix to match becomes "bl", so
 * "Blackberry" will be selected.
 *
 * The prefix typing feature has a one second timeout — the prefix to match
 * will be reset after a second has passed since the user last typed a key.
 * If, in the above example, the user waits a second between typing "b" and
 * "l", the prefix will become "l", so "Lemon" would be selected.
 *
 * This mixin expects the component to invoke a `keydown` method when a key is
 * pressed. You can use [KeyboardMixin](KeyboardMixin) for that
 * purpose, or wire up your own keyboard handling and call `keydown` yourself.
 *
 * This mixin also expects the component to provide an `items` property. The
 * `textContent` of those items will be used for purposes of prefix matching.
 *
 * @module KeyboardPrefixSelectionMixin
 */
function KeyboardPrefixSelectionMixin(Base) {

  // The class prototype added by the mixin.
  var KeyboardPrefixSelection = function (_Base) {
    _inherits(KeyboardPrefixSelection, _Base);

    function KeyboardPrefixSelection() {
      _classCallCheck(this, KeyboardPrefixSelection);

      return _possibleConstructorReturn(this, (KeyboardPrefixSelection.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection)).apply(this, arguments));
    }

    _createClass(KeyboardPrefixSelection, [{
      key: _symbols2.default.getItemText,


      // Default implementation returns an item's `alt` attribute or its
      // `textContent`, in that order.
      value: function value(item) {
        return item.getAttribute('alt') || item.textContent;
      }

      // If the set of items has changed, reset the prefix. We'll also need to
      // rebuild our cache of item text the next time we're asked for it.

    }, {
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), _symbols2.default.itemsChanged, this)) {
          _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), _symbols2.default.itemsChanged, this).call(this);
        }
        this[itemTextContentsKey] = null;
        resetTypedPrefix(this);
      }
    }, {
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = void 0;
        var resetPrefix = true;

        switch (event.keyCode) {
          case 8:
            // Backspace
            handleBackspace(this);
            handled = true;
            resetPrefix = false;
            break;
          case 27:
            // Escape
            handled = true;
            break;
          default:
            if (!event.ctrlKey && !event.metaKey && !event.altKey && event.which !== 32 /* Space */) {
                handlePlainCharacter(this, String.fromCharCode(event.keyCode));
              }
            resetPrefix = false;
        }

        if (resetPrefix) {
          resetTypedPrefix(this);
        }

        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), _symbols2.default.keydown, this) && _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), _symbols2.default.keydown, this).call(this, event);
      }
    }, {
      key: 'selectItemWithTextPrefix',


      /**
       * Select the first item whose text content begins with the given prefix.
       *
       * @param {string} prefix - The prefix string to search for
       * @returns {boolean}
       */
      value: function selectItemWithTextPrefix(prefix) {
        if (_get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'selectItemWithTextPrefix', this)) {
          _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'selectItemWithTextPrefix', this).call(this, prefix);
        }
        if (prefix == null || prefix.length === 0) {
          return false;
        }
        var index = getIndexOfItemWithTextPrefix(this, prefix);
        if (index >= 0) {
          // Update the selection. During that operation, set the flag that lets
          // us know that we are the cause of the selection change. See note at
          // this mixin's `selectedIndex` implementation.
          this[settingSelectionKey] = true;
          this.selectedIndex = index;
          this[settingSelectionKey] = false;
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return _get(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'selectedIndex', this);
      },
      set: function set(index) {
        if ('selectedIndex' in Base.prototype) {
          _set(KeyboardPrefixSelection.prototype.__proto__ || Object.getPrototypeOf(KeyboardPrefixSelection.prototype), 'selectedIndex', index, this);
        }
        if (!this[settingSelectionKey]) {
          // Someone else (not this mixin) has changed the selection. In response,
          // we invalidate the prefix under construction.
          resetTypedPrefix(this);
        }
      }
    }]);

    return KeyboardPrefixSelection;
  }(Base);

  return KeyboardPrefixSelection;
}

// Return the index of the first item with the given prefix, else -1.
function getIndexOfItemWithTextPrefix(element, prefix) {
  var itemTextContents = getItemTextContents(element);
  var prefixLength = prefix.length;
  for (var i = 0; i < itemTextContents.length; i++) {
    var itemTextContent = itemTextContents[i];
    if (itemTextContent.substr(0, prefixLength) === prefix) {
      return i;
    }
  }
  return -1;
}

// Return an array of the text content (in lowercase) of all items.
// Cache these results.
function getItemTextContents(element) {
  if (!element[itemTextContentsKey]) {
    var items = element.items;
    element[itemTextContentsKey] = Array.prototype.map.call(items, function (item) {
      var text = element[_symbols2.default.getItemText](item);
      return text.toLowerCase();
    });
  }
  return element[itemTextContentsKey];
}

// Handle the Backspace key: remove the last character from the prefix.
function handleBackspace(element) {
  var length = element[typedPrefixKey] ? element[typedPrefixKey].length : 0;
  if (length > 0) {
    element[typedPrefixKey] = element[typedPrefixKey].substr(0, length - 1);
  }
  element.selectItemWithTextPrefix(element[typedPrefixKey]);
  setPrefixTimeout(element);
}

// Add a plain character to the prefix.
function handlePlainCharacter(element, char) {
  var prefix = element[typedPrefixKey] || '';
  element[typedPrefixKey] = prefix + char.toLowerCase();
  element.selectItemWithTextPrefix(element[typedPrefixKey]);
  setPrefixTimeout(element);
}

// Stop listening for typing.
function resetPrefixTimeout(element) {
  if (element[prefixTimeoutKey]) {
    clearTimeout(element[prefixTimeoutKey]);
    element[prefixTimeoutKey] = false;
  }
}

// Clear the prefix under construction.
function resetTypedPrefix(element) {
  element[typedPrefixKey] = '';
  resetPrefixTimeout(element);
}

// Wait for the user to stop typing.
function setPrefixTimeout(element) {
  resetPrefixTimeout(element);
  element[prefixTimeoutKey] = setTimeout(function () {
    resetTypedPrefix(element);
  }, _constants2.default.TYPING_TIMEOUT_DURATION);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = function (Base) {

  // The class prototype added by the mixin.
  var SelectionInView = function (_Base) {
    _inherits(SelectionInView, _Base);

    function SelectionInView() {
      _classCallCheck(this, SelectionInView);

      return _possibleConstructorReturn(this, (SelectionInView.__proto__ || Object.getPrototypeOf(SelectionInView)).apply(this, arguments));
    }

    _createClass(SelectionInView, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'connectedCallback', this)) {
          _get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'connectedCallback', this).call(this);
        }
        var selectedItem = this.selectedItem;
        if (selectedItem) {
          this.scrollItemIntoView(selectedItem);
        }
      }

      /**
       * Scroll the given element completely into view, minimizing the degree of
       * scrolling performed.
       *
       * Blink has a `scrollIntoViewIfNeeded()` function that does something
       * similar, but unfortunately it's non-standard, and in any event often ends
       * up scrolling more than is absolutely necessary.
       *
       * This scrolls the containing element defined by the `scrollTarget`
       * property. See that property for a discussion of the default value of
       * that property.
       *
       * @param {Element} item - the item to scroll into view.
       */

    }, {
      key: 'scrollItemIntoView',
      value: function scrollItemIntoView(item) {
        if (_get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'scrollItemIntoView', this)) {
          _get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'scrollItemIntoView', this).call(this);
        }

        var scrollTarget = this[_symbols2.default.scrollTarget];

        // Determine the bounds of the scroll target and item. We use
        // getBoundingClientRect instead of .offsetTop, etc., because the latter
        // round values, and we want to handle fractional values.
        var scrollTargetRect = scrollTarget.getBoundingClientRect();
        var itemRect = item.getBoundingClientRect();

        // Determine how far the item is outside the viewport.
        var bottomDelta = itemRect.bottom - scrollTargetRect.bottom;
        var topDelta = itemRect.top - scrollTargetRect.top;
        var leftDelta = itemRect.left - scrollTargetRect.left;
        var rightDelta = itemRect.right - scrollTargetRect.right;

        // Scroll the target as necessary to bring the item into view.
        if (bottomDelta > 0) {
          scrollTarget.scrollTop += bottomDelta; // Scroll down
        } else if (topDelta < 0) {
          scrollTarget.scrollTop += Math.ceil(topDelta); // Scroll up
        }
        if (rightDelta > 0) {
          scrollTarget.scrollLeft += rightDelta; // Scroll right
        } else if (leftDelta < 0) {
          scrollTarget.scrollLeft += Math.ceil(leftDelta); // Scroll left
        }
      }

      /* Provide a default scrollTarget implementation if none exists. */

    }, {
      key: _symbols2.default.scrollTarget,
      get: function get() {
        /** @type {any} */
        var element = this;
        return _get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), _symbols2.default.scrollTarget, this) || (0, _defaultScrollTarget2.default)(element);
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return _get(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'selectedItem', this);
      },
      set: function set(item) {
        if ('selectedItem' in Base.prototype) {
          _set(SelectionInView.prototype.__proto__ || Object.getPrototypeOf(SelectionInView.prototype), 'selectedItem', item, this);
        }
        if (item) {
          // Keep the selected item in view.
          this.scrollItemIntoView(item);
        }
      }
    }]);

    return SelectionInView;
  }(Base);

  return SelectionInView;
};

var _defaultScrollTarget = __webpack_require__(22);

var _defaultScrollTarget2 = _interopRequireDefault(_defaultScrollTarget);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which scrolls a container horizontally and/or vertically to ensure that
 * a newly-selected item is visible to the user.
 *
 * When the selected item in a list-like component changes, the selected item
 * should be brought into view so that the user can confirm their selection.
 *
 * This mixin expects a `selectedItem` property to be set when the selection
 * changes. You can supply that yourself, or use
 * [SingleSelectionMixin](SingleSelectionMixin).
 *
 * @module SelectionInViewMixin
 */

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = TransitionEffectMixin;

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _utilities = __webpack_require__(24);

var utilities = _interopRequireWildcard(_utilities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var enableEffectsKey = (0, _Symbol3.default)('enableEffects');
var transitionendListenerKey = (0, _Symbol3.default)('transitionendListener');

/**
 * This mixin enables asynchronous visual effects by applying CSS classes that
 * can trigger CSS transitions. It provides a standard timing model so that work
 * can be performed both before and after the asynchronous effects run.
 * 
 * Thix mixin expects the component to provide:
 * 
 * * Styling with CSS transitions triggered by the application of CSS classes.
 * 
 * The mixin provides these features to the component:
 * 
 * * A `symbols.showEffect` method that invokes the following methods on the
 *   component in order: `symbols.beforeEffect`, `symbols.applyEffect`, and
 *   `symbols.afterEffect`.
 * * A `symbols.applyEffect` method implementation that applies CSS classes to
 *   the component host to trigger the start of the CSS transition.
 * * Suppresses effect application if requested before an element’s
 *   connectedCallback is invoked.
 * * Suppresses effects if the user has expressed an accessibility preference
 *   for reduced motion. See
 *   https://webkit.org/blog/7551/responsive-design-for-motion/.
 * 
 * If the component defines the following optional members, the mixin will take
 * advantage of them:
 * 
 * * `symbols.beforeEffect` method which runs synchronously before applyEffect
 *   is invoked.
 * * `symbols.afterEffect` method which runs synchronously after applyEffect has
 *   completed.
 * * `symbols.elementsWithTransitions` method that returns an array of elements
 *   that will be affected by the transitions.
 * 
 * The timing model imposed by `TransitionEffectMixin` is designed to be
 * replicated in other mixins. For example, Elix expects to eventually create a
 * mixin to trigger effects that use the Web Animations API. That mixin will use
 * the same timing model so that it could be used as a drop-in replacement for
 * `TransitionEffectMixin`.
 * 
 * @module TransitionEffectMixin
 */
function TransitionEffectMixin(Base) {

  // The class prototype added by the mixin.
  var TransitionEffect = function (_Base) {
    _inherits(TransitionEffect, _Base);

    function TransitionEffect() {
      _classCallCheck(this, TransitionEffect);

      return _possibleConstructorReturn(this, (TransitionEffect.__proto__ || Object.getPrototypeOf(TransitionEffect)).apply(this, arguments));
    }

    _createClass(TransitionEffect, [{
      key: _symbols2.default.afterEffect,
      value: function value(effect) {
        var _this2 = this;

        if (_get(TransitionEffect.prototype.__proto__ || Object.getPrototypeOf(TransitionEffect.prototype), _symbols2.default.afterEffect, this)) {
          _get(TransitionEffect.prototype.__proto__ || Object.getPrototypeOf(TransitionEffect.prototype), _symbols2.default.afterEffect, this).call(this, effect);
        }
        this.classList.remove(effect);
        this.classList.remove('effect');
        if (this instanceof HTMLElement) {
          utilities.webkitForceStyleUpdate(this);
        }
        if (this[transitionendListenerKey]) {
          getTransitionElements(this, effect).forEach(function (element) {
            element.removeEventListener('transitionend', _this2[transitionendListenerKey]);
          });
          this[transitionendListenerKey] = null;
        }
      }
    }, {
      key: _symbols2.default.applyEffect,
      value: function value(effect) {
        var _this3 = this;

        var base = _get(TransitionEffect.prototype.__proto__ || Object.getPrototypeOf(TransitionEffect.prototype), 'applyEffect', this) ? _get(TransitionEffect.prototype.__proto__ || Object.getPrototypeOf(TransitionEffect.prototype), _symbols2.default.applyEffect, this).call(this, effect) : Promise.resolve();

        var animationEndPromise = new Promise(function (resolve, reject) {
          // Set up to handle a transitionend event once.
          // The handler will be removed when the promise resolves.
          _this3[transitionendListenerKey] = function (event) {
            event.stopPropagation();
            resolve();
          };
        });

        var animationStartPromise = new Promise(function (resolve, reject) {
          // Apply the effect.
          requestAnimationFrame(function () {

            getTransitionElements(_this3, effect).forEach(function (element) {
              element.addEventListener('transitionend', _this3[transitionendListenerKey]);
            });

            _this3.classList.add(effect);
            _this3.classList.add('effect');
            if (_this3 instanceof HTMLElement) {
              utilities.webkitForceStyleUpdate(_this3);
            }
            resolve();
          });
        });

        return base.then(function () {
          return animationStartPromise;
        }).then(function () {
          return animationEndPromise;
        });
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(TransitionEffect.prototype.__proto__ || Object.getPrototypeOf(TransitionEffect.prototype), 'connectedCallback', this)) {
          _get(TransitionEffect.prototype.__proto__ || Object.getPrototypeOf(TransitionEffect.prototype), 'connectedCallback', this).call(this);
        }

        // Allow async effects.
        this[enableEffectsKey] = true;
      }
    }, {
      key: _symbols2.default.showEffect,
      value: function value(effect) {
        var _this4 = this;

        if (_get(TransitionEffect.prototype.__proto__ || Object.getPrototypeOf(TransitionEffect.prototype), _symbols2.default.effect, this)) {
          _get(TransitionEffect.prototype.__proto__ || Object.getPrototypeOf(TransitionEffect.prototype), _symbols2.default.effect, this).call(this, effect);
        }

        // Tell any effect currently in progress to finish / clean up.
        if (this[_symbols2.default.currentEffect]) {
          this[_symbols2.default.afterEffect](this[_symbols2.default.currentEffect]);
        }

        this[_symbols2.default.currentEffect] = effect;

        // Before
        if (this[_symbols2.default.beforeEffect]) {
          this[_symbols2.default.beforeEffect](effect);
        }

        // Don't show effects if user has set accessibility preference for reduced
        // motion.
        var prefersReducedMotion = matchMedia('(prefers-reduced-motion)').matches;

        // Apply
        var applyPromise = void 0;
        if (!this[enableEffectsKey] || prefersReducedMotion) {
          applyPromise = Promise.resolve();
        } else {
          applyPromise = this[_symbols2.default.applyEffect](effect);
        }

        return applyPromise.then(function () {
          // After
          if (_this4[_symbols2.default.currentEffect] === effect) {
            _this4[_symbols2.default.currentEffect] = null;
            _this4[_symbols2.default.afterEffect](effect);
          }
        });
      }
    }]);

    return TransitionEffect;
  }(Base);

  return TransitionEffect;
}

function getTransitionElements(element, effect) {
  return element[_symbols2.default.elementsWithTransitions] ? element[_symbols2.default.elementsWithTransitions](effect) : [element];
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This helper returns a guess as to what portion of the given element can be
 * scrolled. This is used by [SelectionInViewMixin](SelectionInViewMixin) to
 * provide a default implementation of [symbols.scrollTarget].
 *
 * If the element has a shadow root containing a default (unnamed) slot, this
 * returns the first ancestor of that slot that has either `overflow-x` or
 * `overflow-y` styled as `auto` or `scroll`. If the element has no default
 * slot, or no scrolling ancestor is found, the element itself is returned.
 *
 * @param {HTMLElement} element – the component to examine for a scrolling
 * element
 * @returns {HTMLElement}
 */
function defaultScrollTarget(element) {
  var root = element.shadowRoot;
  var slot = root && root.querySelector('slot:not([name])');
  var scrollingParent = slot && getScrollingParent(slot.parentNode);
  return scrollingParent || element;
}

// Return the parent of the given element that can be scrolled. If no such
// element is found, return null.
function getScrollingParent(element) {
  // We test against DocumentFragment below instead of ShadowRoot, because the
  // polyfill doesn't define the latter, and instead uses the former. In native
  // Shadow DOM, a ShadowRoot is a subclass of DocumentFragment, so the same
  // test works then too.
  if (element === null || element instanceof DocumentFragment) {
    // Didn't find a scrolling parent.
    return null;
  }
  var style = getComputedStyle(element);
  var overflowX = style.overflowX;
  var overflowY = style.overflowY;
  if (overflowX === 'scroll' || overflowX === 'auto' || overflowY === 'scroll' || overflowY === 'auto') {
    // Found an element we can scroll.
    return element;
  }
  // Keep looking higher in the hierarchy for a scrolling parent.
  return getScrollingParent(element.parentNode);
}

exports.default = defaultScrollTarget;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This is a helper function for rendering an array of items as elements.
 * You can use this if your component nees to generate a set of elements for
 * each item in an array.
 *
 * Example: The following will render an array of strings in divs as children
 * of the `container` element:
 *
 *     let strings = ['a', 'b', 'c', ...];
 *     let container = this.querySelector(...);
 *     renderArrayAsElements(strings, container, (string, element) => {
 *       if (!element || element.localName !== 'div') {
 *         // Create a new div.
 *         element = document.createElement('div');
 *       }
 *       // Set/update the text content of the element.
 *       element.textContent = string;
 *       return element;
 *     });
 *
 * The `renderArrayAsElements` function will reuse existing elements if
 * possible. E.g., if it is called to render an array of 4 items, and later
 * called to render an array of 5 items, it can reuse the existing 4 items,
 * creating just one new element. Note, however, that this re-rendering is not
 * automatic. If, after calling this function, you manipulate the array you
 * used, you must still call this function again to re-render the array.
 *
 * The `renderItem` parameter takes a function of two arguments: an item to
 * to render, and an existing element (if one exists) which can be repurposed to
 * render that item. If the latter argument is null, the `renderItem()` function
 * should create a new element and return it. The function should do the same
 * if the supplied existing element is not suitable for rendering the given
 * item; the returned element will be used to replace the existing one. If the
 * existing element *is* suitable, the function can simply update it and return
 * it as is.
 *
 * @param {Array} items - the items to render
 * @param {Element} container - the parent that will hold the elements
 * @param {Function} renderItem - returns a new
 *   element for an item, or repurposes an existing element for an item
 */
function renderArrayAsElements(items, container, renderItem) {
  // Create a new set of elements for the current items.
  items.forEach(function (item, index) {
    var oldElement = container.children[index];
    var newElement = renderItem(item, oldElement);
    if (newElement) {
      if (!oldElement) {
        container.appendChild(newElement);
      } else if (newElement !== oldElement) {
        container.replaceChild(newElement, oldElement);
      }
      // @ts-ignore
      if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
        // Apply styling
        // @ts-ignore
        window.ShadyCSS.styleElement(newElement);
      }
    }
  });

  // If the array shrank, remove the extra elements which are no longer needed.
  while (container.children.length > items.length) {
    container.removeChild(container.children[items.length]);
  }
}

exports.default = renderArrayAsElements;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webkitForceStyleUpdate = webkitForceStyleUpdate;

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webkitUserSelectKey = (0, _Symbol3.default)('webkitUserSelect');

// Determine whether we're in a sufficiently old version of WebKit that we need
// to apply a fix for style updates. This can't be determined via feature
// detection, so we have to explicitly inspect the browser version.
var browserVersionMatch = /AppleWebKit\/([\d.]+)/.exec(navigator.userAgent);
var needsForceFix = /Apple Computer/.test(navigator.vendor) && browserVersionMatch && parseInt(browserVersionMatch[1]) <= 603;

/**
 * This function works around a bug in the initial Shadow DOM implementation in
 * Apple Safari and Mobile Safari:
 * https://bugs.webkit.org/show_bug.cgi?id=170762. This bug prevents component
 * CSS from correctly applying style rules that depend on CSS classes or
 * attributes applied to the component host. This bug was fixed in WebKit
 * version 604, but older WebKit versions need this fix.
 * 
 * The fix entails forcing a temporary change in a CSS property on the component
 * that will force a style recalc. For this purpose, the "-webkit-user-select"
 * property is used. In the next tick, we revert that change.
 *  
 * @param {HTMLElement} element 
 */
function webkitForceStyleUpdate(element) {
  // Only do our fix if we're in an old version of WebKit and we're not already
  // set up to do the fix.
  if (needsForceFix && element[webkitUserSelectKey] == null) {
    // Get the current value of -webkit-user-select directly on the component.
    element[webkitUserSelectKey] = element.style.webkitUserSelect || '';
    var effectiveWebkitUserSelect = getComputedStyle(element).webkitUserSelect;
    // Apply a value for -webkit-user-select that differs from the current
    // value.
    element.style.webkitUserSelect = effectiveWebkitUserSelect === 'none' ? 'text' : 'none';
    setTimeout(function () {
      // Revert the change.
      element.style.webkitUserSelect = element[webkitUserSelectKey];
      element[webkitUserSelectKey] = null;
    });
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = BackdropWrapper;

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This mixin wraps a component’s template to add a backdrop element suitable
 * for use in modal overlays such as dialogs. The backdrop plays two roles: the
 * it prevents background clicks, and it can be styled (with, for example, a
 * semi-transparent background color) to help focus the user’s attention away
 * from the page background and toward the overlay. This wrapper is often used
 * in conjunction with `DialogModalityMixin`.
 * 
 * This wrapper expects the component to provide:
 * 
 * * A template-stamping mechanism compatible with `ShadowTemplateMixin`.
 * 
 * The wrapper provides these features to the component:
 * 
 * * A container element identified as `#overlayContent` that holds the
 *   element’s primary content.
 * * A backdrop element identified as `#backdrop` that sits behind the primary
 *   content and covers the viewport.
 * 
 * By default, `BackdropWrapper` provides no styling of the backdrop. If you are
 * using this wrapper in your component, the elements added by the wrapper will
 * be in your component’s shadow tree, so you can style them like any shadow
 * element.
 *
 * @module BackdropWrapper
 */
function BackdropWrapper(base) {

  // The class prototype added by the mixin.
  var Backdrop = function (_base) {
    _inherits(Backdrop, _base);

    function Backdrop() {
      _classCallCheck(this, Backdrop);

      return _possibleConstructorReturn(this, (Backdrop.__proto__ || Object.getPrototypeOf(Backdrop)).apply(this, arguments));
    }

    _createClass(Backdrop, [{
      key: _symbols2.default.template,
      value: function value(filler) {
        var template = '\n        <style>\n          :host {\n            height: 100%;\n            left: 0;\n            outline: none;\n            position: fixed;\n            top: 0;\n            -webkit-tap-highlight-color: transparent;\n            width: 100%;\n          }\n\n          #backdrop {\n            height: 100%;\n            left: 0;\n            position: absolute;\n            top: 0;\n            user-select: none;\n            width: 100%;\n          }\n\n          #overlayContent {\n            position: relative;\n          }\n        </style>\n        <div id="backdrop" role="none"></div>\n        <div id="overlayContent" role="none">\n          ' + (filler || '<slot></slot>') + '\n        </div>\n      ';
        return _get(Backdrop.prototype.__proto__ || Object.getPrototypeOf(Backdrop.prototype), _symbols2.default.template, this) ? _get(Backdrop.prototype.__proto__ || Object.getPrototypeOf(Backdrop.prototype), _symbols2.default.template, this).call(this, template) : template;
      }
    }, {
      key: 'backdrop',
      get: function get() {
        return this.shadowRoot.querySelector('#backdrop');
      }
    }]);

    return Backdrop;
  }(base);

  return Backdrop;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = FocusCaptureWrapper;

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var wrappingFocusKey = (0, _Symbol3.default)('wrappingFocus');

/**
 * This mixin wraps a component’s template such that, once the component gains
 * the keyboard focus, Tab and Shift+Tab operations will cycle the focus within
 * the component.
 * 
 * This wrapper expects the component to provide:
 * 
 * * A template-stamping mechanism compatible with `ShadowTemplateMixin`.
 * 
 * The wrapper provides these features to the component:
 * 
 * * Template elements and event handlers that will cause the keyboard focus to wrap.
 *
 * @module FocusCaptureWrapper
 */
function FocusCaptureWrapper(base) {
  var FocusCapture = function (_base) {
    _inherits(FocusCapture, _base);

    function FocusCapture() {
      _classCallCheck(this, FocusCapture);

      return _possibleConstructorReturn(this, (FocusCapture.__proto__ || Object.getPrototypeOf(FocusCapture)).apply(this, arguments));
    }

    _createClass(FocusCapture, [{
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = void 0;

        /** @type {any} */
        var element = this;
        if (document.activeElement === element && this.shadowRoot.activeElement === null && event.keyCode === 9 && event.shiftKey) {
          // Set focus to focus catcher.
          // The Shift+Tab keydown event should continue bubbling, and the default
          // behavior should cause it to end up on the last focusable element.
          this[wrappingFocusKey] = true;
          var focusCatcher = this.shadowRoot.querySelector('#focusCatcher');
          focusCatcher.focus();
          this[wrappingFocusKey] = false;
          handled = true;
        }

        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(FocusCapture.prototype.__proto__ || Object.getPrototypeOf(FocusCapture.prototype), _symbols2.default.keydown, this) && _get(FocusCapture.prototype.__proto__ || Object.getPrototypeOf(FocusCapture.prototype), _symbols2.default.keydown, this).call(this, event) || false;
      }
    }, {
      key: _symbols2.default.shadowCreated,
      value: function value() {
        var _this2 = this;

        if (_get(FocusCapture.prototype.__proto__ || Object.getPrototypeOf(FocusCapture.prototype), _symbols2.default.shadowCreated, this)) {
          _get(FocusCapture.prototype.__proto__ || Object.getPrototypeOf(FocusCapture.prototype), _symbols2.default.shadowCreated, this).call(this);
        }

        var focusCatcher = this.shadowRoot.querySelector('#focusCatcher');
        focusCatcher.addEventListener('focus', function (event) {
          if (!_this2[wrappingFocusKey]) {
            // Wrap focus back to the dialog.
            _this2.focus();
          }
        });
      }
    }, {
      key: _symbols2.default.template,
      value: function value(filler) {
        var template = '\n        ' + (filler || '<slot></slot>') + '\n        <div id="focusCatcher" tabindex="0"></div>\n      ';
        return _get(FocusCapture.prototype.__proto__ || Object.getPrototypeOf(FocusCapture.prototype), _symbols2.default.template, this) ? _get(FocusCapture.prototype.__proto__ || Object.getPrototypeOf(FocusCapture.prototype), _symbols2.default.template, this).call(this, template) : template;
      }
    }]);

    return FocusCapture;
  }(base);

  return FocusCapture;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FocusRingMixin2 = __webpack_require__(14);

var _FocusRingMixin3 = _interopRequireDefault(_FocusRingMixin2);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A classic rounded tab button.
 *
 * This component is used by [LabeledTabs](LabeledTabs), which will generate
 * an instance of `LabeledTabButton` for each panel in a set of tab panels.
 *
 * @extends HTMLElement
 * @mixes FocusRingMixin
 * @mixes ShadowTemplateMixin
 */
var LabeledTabButton = function (_FocusRingMixin) {
  _inherits(LabeledTabButton, _FocusRingMixin);

  function LabeledTabButton() {
    _classCallCheck(this, LabeledTabButton);

    return _possibleConstructorReturn(this, (LabeledTabButton.__proto__ || Object.getPrototypeOf(LabeledTabButton)).apply(this, arguments));
  }

  _createClass(LabeledTabButton, [{
    key: _symbols2.default.template,
    value: function value(filler) {
      return '\n      <style>\n        :host {\n          display: inline-flex;\n        }\n\n        :host(:focus:not(.focus-ring)) {\n          outline: none;\n        }\n\n        button {\n          background: white;\n          border: 1px solid #ccc;\n          cursor: pointer;\n          flex: 1;\n          font-family: inherit;\n          font-size: inherit;\n          margin: 0;\n          outline: none;\n          padding: 0.5em 0.75em;\n          position: relative;\n          -webkit-tap-highlight-color: transparent;\n          transition: border-color 0.25s;\n        }\n\n        :host(.selected) button {\n          border-color: #ccc;\n          opacity: 1;\n        }\n\n        :host(:hover) button {\n          background-color: #eee;\n        }\n\n        /* top/bottom positions */\n        :host([tab-position="top"]:not(:last-child)),\n        :host([tab-position="bottom"]:not(:last-child)) {\n          margin-right: 0.2em;\n        }\n\n        /* top position */\n        :host([tab-position="top"]) button {\n          border-radius: 0.25em 0.25em 0 0;\n          margin-bottom: -1px;\n        }\n        :host([tab-position="top"].selected) button {\n          border-bottom-color: transparent;\n        }\n\n        /* bottom position */\n        :host([tab-position="bottom"]) button {\n          border-radius: 0 0 0.25em 0.25em;\n          margin-top: -1px;\n        }\n        :host([tab-position="bottom"].selected) button {\n          border-top-color: transparent;\n        }\n\n        /* left/right positions */\n        :host([tab-position="left"]:not(:last-child)),\n        :host([tab-position="right"]:not(:last-child)) {\n          margin-bottom: 0.2em;\n        }\n\n        /* left position */\n        :host([tab-position="left"]) button {\n          border-radius: 0.25em 0 0 0.25em;\n          margin-right: -1px;\n        }\n        :host([tab-position="left"].selected) button {\n          border-right-color: transparent;\n        }\n\n        /* right position */\n        :host([tab-position="right"]) button {\n          border-radius: 0 0.25em 0.25em 0;\n          margin-left: -1px;\n        }\n        :host([tab-position="right"].selected) button {\n          border-left-color: transparent;\n        }\n      </style>\n\n      <button tabindex="-1">\n        ' + (filler || '<slot></slot>') + '\n      </button>\n    ';
    }
  }]);

  return LabeledTabButton;
}((0, _FocusRingMixin3.default)((0, _ShadowTemplateMixin2.default)(HTMLElement)));

customElements.define('elix-labeled-tab-button', LabeledTabButton);
exports.default = LabeledTabButton;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _ClickSelectionMixin = __webpack_require__(12);

var _ClickSelectionMixin2 = _interopRequireDefault(_ClickSelectionMixin);

var _ContentItemsMixin = __webpack_require__(7);

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DefaultSlotContentMixin = __webpack_require__(13);

var _DefaultSlotContentMixin2 = _interopRequireDefault(_DefaultSlotContentMixin);

var _DirectionSelectionMixin = __webpack_require__(8);

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _KeyboardDirectionMixin = __webpack_require__(9);

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardMixin = __webpack_require__(4);

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _SingleSelectionMixin = __webpack_require__(6);

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _utilities = __webpack_require__(24);

var utilities = _interopRequireWildcard(_utilities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var tabAlignKey = (0, _Symbol3.default)('tabAlign');
var tabPositionKey = (0, _Symbol3.default)('tabPosition');

var Base = (0, _AttributeMarshallingMixin2.default)((0, _ClickSelectionMixin2.default)((0, _ContentItemsMixin2.default)((0, _DefaultSlotContentMixin2.default)((0, _DirectionSelectionMixin2.default)((0, _KeyboardDirectionMixin2.default)((0, _KeyboardMixin2.default)((0, _ShadowTemplateMixin2.default)((0, _SingleSelectionMixin2.default)(HTMLElement)))))))));

/**
 * A container for a set of tab buttons.
 *
 * `TabStrip` is specifically responsible for handling keyboard navigation
 * between tab buttons, and for the visual layout of the buttons.
 *
 * The user can select a tab with the mouse or touch, as well as by through the
 * keyboard. Each tab appears as a separate button in the tab order.
 * Additionally, if the focus is currently on a tab, the user can quickly
 * navigate between tabs with the left/right arrow keys (or, if the tabs are
 * in vertical position, the up/down arrow keys).
 *
 * By default, the tabs are shown aligned to the left (in left-to-right
 * languages like English), where each tab is only as big as necessary. You
 * can adjust the alignment of the tabs with the `tabAlign` property.
 *
 * The component assumes that the tab buttons will appear above the tab panels
 * they control. You can adjust that positioning with the `tabPosition`
 * property.
 *
 * A `TabStrip` is often wrapped around a set of tab panels, a scenario which
 * can be handled with the separate [TabStripWrapper](TabStripWrapper)
 * component.
 *
 * @extends HTMLElement
 * @mixes AttributeMarshallingMixin
 * @mixes ClickSelectionMixin
 * @mixes ContentItemsMixin
 * @mixes DefaultSlotContentMixin
 * @mixes DirectionSelectionMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardDirectionMixin
 * @mixes ShadowTemplateMixin
 * @mixes SingleSelectionMixin
 */

var TabStrip = function (_Base) {
  _inherits(TabStrip, _Base);

  function TabStrip() {
    _classCallCheck(this, TabStrip);

    // Set defaults.
    var _this = _possibleConstructorReturn(this, (TabStrip.__proto__ || Object.getPrototypeOf(TabStrip)).call(this));

    var defaults = _this[_symbols2.default.defaults];
    if (typeof _this.tabAlign === 'undefined') {
      _this.tabAlign = defaults.tabAlign;
    }
    if (typeof _this.tabPosition === 'undefined') {
      _this.tabPosition = defaults.tabPosition;
    }
    return _this;
  }

  _createClass(TabStrip, [{
    key: _symbols2.default.itemAdded,
    value: function value(item) {
      if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemAdded, this)) {
        _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemAdded, this).call(this, item);
      }
      item.setAttribute('role', 'tab');
      item.setAttribute('tabindex', 0);
    }
  }, {
    key: _symbols2.default.itemSelected,
    value: function value(item, selected) {
      if (_get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemSelected, this)) {
        _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
      }
      if (selected) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
      item.setAttribute('aria-selected', selected);
      utilities.webkitForceStyleUpdate(item);
    }
  }, {
    key: _symbols2.default.keydown,
    value: function value(event) {

      var handled = void 0;

      // Let user select a tab button with Enter or Space.
      switch (event.keyCode) {
        case 13: /* Enter */
        case 32:
          /* Space */
          var index = this.items.indexOf(event.target);
          if (index !== this.selectedIndex) {
            this.selectedIndex = index;
            handled = true;
          }
          break;
      }

      // Give mixins a chance to do work.
      handled = handled || _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.keydown, this) && _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.keydown, this).call(this, event);

      if (handled && this.selectedItem instanceof HTMLElement) {
        // If the event resulted in a change of selection, move the focus to the
        // newly-selected tab.
        this.selectedItem.focus();
      }

      return handled;
    }

    /**
     * @type {string}
     */

  }, {
    key: _symbols2.default.template,
    value: function value(filler) {
      return '\n      <style>\n        :host {\n          display: inline-flex;\n        }\n\n        /*\n         * Avoid having tab container stretch across. User won\'t be able to see\n         * it, but since it handles the keyboard, in Mobile Safari a tap on the\n         * container background will cause the region to flash. Aligning the\n         * region collapses it down to hold its contents.\n         */\n        #tabButtonContainer {\n          /* For IE bug (clicking tab produces gap between tab and page). */\n          display: flex;\n          flex-direction: row;\n          flex: 1;\n          /*\n           * Try to obtain fast-tap behavior on all tabs.\n           * See https://webkit.org/blog/5610/more-responsive-tapping-on-ios/.\n           */\n          touch-action: manipulation;\n        }\n\n        /* Left/right positions */\n        :host([tab-position="left"]) #tabButtonContainer,\n        :host([tab-position="right"]) #tabButtonContainer {\n          flex-direction: column;\n        }\n\n        /* Alignment */\n        :host([tab-align="start"]) #tabButtonContainer {\n          justify-content: flex-start;\n        }\n        :host([tab-align="center"]) #tabButtonContainer {\n          justify-content: center;\n        }\n        :host([tab-align="end"]) #tabButtonContainer {\n          justify-content: flex-end;\n        }\n        :host([tab-align="stretch"]) #tabButtonContainer > ::slotted(*) {\n          flex: 1;\n        }\n      </style>\n\n      <div id="tabButtonContainer" role="none">\n        ' + (filler || '<slot></slot>') + '\n      </div>\n    ';
    }
  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(TabStrip.prototype.__proto__ || Object.getPrototypeOf(TabStrip.prototype), _symbols2.default.defaults, this) || {};
      defaults.tabindex = null;
      defaults.tabAlign = 'start';
      defaults.tabPosition = 'top';
      defaults.selectionRequired = true;
      return defaults;
    }
  }, {
    key: 'tabAlign',
    get: function get() {
      return this[tabAlignKey];
    },
    set: function set(tabAlign) {
      this[tabAlignKey] = tabAlign;
      this.reflectAttribute('tab-align', tabAlign);
    }

    /**
     * The position of the tab strip relative to the element's children. Valid
     * values are "top", "left", "right", and "bottom".
     *
     * @default "top"
     * @type {string}
     */

  }, {
    key: 'tabPosition',
    get: function get() {
      return this[tabPositionKey];
    },
    set: function set(tabPosition) {
      this[tabPositionKey] = tabPosition;
      this.reflectAttribute('tab-position', tabPosition);
      this.navigationAxis = tabPosition === 'top' || tabPosition === 'bottom' ? 'horizontal' : 'vertical';

      // Let tabs know their tab position, too.
      [].forEach.call(this.items, function (tab) {
        tab.setAttribute('tab-position', tabPosition);
        utilities.webkitForceStyleUpdate(tab);
      });
    }
  }]);

  return TabStrip;
}(Base);

customElements.define('elix-tab-strip', TabStrip);
exports.default = TabStrip;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = TabStripWrapper;

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _TabStrip = __webpack_require__(28);

var _TabStrip2 = _interopRequireDefault(_TabStrip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// jshint ignore:line


// Used to assign unique IDs to tabs for ARIA purposes.
var idCount = 0;

/**
 * A wrapper which adds strip of tabs for selecting one of the component's
 * children.
 *
 * The `TabStripWrapper` component does not define how a selected child is
 * represented. If you're looking for the standard behavior of just showing only
 * the selected child, you can use `TabStripWrapper` in combination with the
 * separate [Modes](Modes) component. The above combination is so common it
 * is provided as a single component, [Tabs](Tabs).
 *
 * `TabStripWrapper` defines a slot named "tabButtons" into which you can slot
 * the buttons that will be used to select the tab panels. That slot sits inside
 * a [TabStrip](TabStrip) instance, which handles keyboard navigation and
 * the ordering of the tab buttons.
 *
 * @module TabStripWrapper
 */
function TabStripWrapper(Base) {
  var TabStripWrap = function (_Base) {
    _inherits(TabStripWrap, _Base);

    function TabStripWrap() {
      _classCallCheck(this, TabStripWrap);

      return _possibleConstructorReturn(this, (TabStripWrap.__proto__ || Object.getPrototypeOf(TabStripWrap)).apply(this, arguments));
    }

    _createClass(TabStripWrap, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), 'connectedCallback', this)) {
          _get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), 'connectedCallback', this).call(this);
        }

        // Set default ARIA role for the overall component.
        if (this.getAttribute('role') == null && this[_symbols2.default.defaults].role) {
          this.setAttribute('role', this[_symbols2.default.defaults].role);
        }

        // Ensure we reflect attributes.
        var defaults = this[_symbols2.default.defaults];
        if (!this.getAttribute('tab-align')) {
          this.tabAlign = defaults.tabAlign;
        }
        if (!this.getAttribute('tab-position')) {
          this.tabPosition = defaults.tabPosition;
        }
      }
    }, {
      key: _symbols2.default.itemsChanged,
      value: function value() {
        if (_get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), _symbols2.default.itemsChanged, this)) {
          _get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), _symbols2.default.itemsChanged, this).call(this);
        }

        if (!this.items) {
          return;
        }

        var baseId = this.id ? "_" + this.id + "Panel" : "_panel";

        // Confirm that items have at least a default role and ID for ARIA purposes.
        this.items.forEach(function (item) {
          if (!item.getAttribute('role')) {
            item.setAttribute('role', 'tabpanel');
          }
          if (!item.id) {
            item.id = baseId + idCount++;
          }
        });
      }
    }, {
      key: _symbols2.default.shadowCreated,
      value: function value() {
        var _this2 = this;

        if (_get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), _symbols2.default.shadowCreated, this)) {
          _get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), _symbols2.default.shadowCreated, this).call(this);
        }
        this.tabStrip.addEventListener('selected-index-changed', function (event) {
          if (event instanceof CustomEvent) {
            _this2.selectedIndex = event.detail.selectedIndex;
          }
        });
      }
    }, {
      key: _symbols2.default.template,
      value: function value() {
        var fillers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var defaultFiller = typeof fillers === 'string' ? fillers : fillers.default || '<slot></slot>';
        var tabButtonsFiller = fillers.tabButtons || '<slot name="tabButtons"></slot>';
        return _get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), _symbols2.default.template, this).call(this, '\n        <elix-tab-strip id="tabStrip">\n          ' + tabButtonsFiller + '\n        </elix-tab-strip>\n\n        <div id="pages">\n          ' + defaultFiller + '\n        </div>\n\n        <style>\n          :host {\n            display: inline-flex;\n            flex-direction: column;\n            position: relative;\n          }\n\n          #pages {\n            display: flex;\n            flex: 1;\n            flex-direction: column;\n          }\n\n          #pages ::slotted(*) {\n            display: flex;\n            flex: 1;\n          }\n\n          /* Left/right positions */\n          :host([tab-position="left"]),\n          :host([tab-position="right"]) {\n            flex-direction: row;\n          }\n\n          /* Generic style */\n          #pages {\n            background: white;\n            border: 1px solid #ccc;\n            box-sizing: border-box;\n          }\n        </style>\n      ');
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), _symbols2.default.defaults, this) || {};
        defaults.role = 'tablist';
        defaults.tabAlign = 'start';
        defaults.tabPosition = 'top';
        return defaults;
      }
    }, {
      key: 'pages',
      get: function get() {
        return this.shadowRoot.querySelector('#pages');
      }
    }, {
      key: 'selectedIndex',
      get: function get() {
        return _get(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), 'selectedIndex', this);
      },
      set: function set(value) {
        if ('selectedIndex' in Base.prototype) {
          _set(TabStripWrap.prototype.__proto__ || Object.getPrototypeOf(TabStripWrap.prototype), 'selectedIndex', value, this);
        }
        if (this.tabStrip.selectedIndex !== value) {
          this.tabStrip.selectedIndex = value;
        }
      }
    }, {
      key: 'tabAlign',
      get: function get() {
        return this.tabStrip.tabAlign;
      },
      set: function set(tabAlign) {
        if (this.tabStrip.tabAlign !== tabAlign) {
          this.tabStrip.tabAlign = tabAlign;
        }
        if (this.getAttribute('tab-align') !== tabAlign) {
          this.setAttribute('tab-align', tabAlign);
        }
      }
    }, {
      key: 'tabPosition',
      get: function get() {
        return this.tabStrip.tabPosition;
      },
      set: function set(tabPosition) {
        if (this.tabStrip.tabPosition !== tabPosition) {
          this.tabStrip.tabPosition = tabPosition;
        }
        if (this.getAttribute('tab-position') !== tabPosition) {
          this.setAttribute('tab-position', tabPosition);
        }

        // Physically reorder the tabs and pages to reflect the desired arrangement.
        // We could change the visual appearance by reversing the order of the flex
        // box, but then the visual order wouldn't reflect the document order, which
        // determines focus order. That would surprise a user trying to tab through
        // the controls.
        var topOrLeft = tabPosition === 'top' || tabPosition === 'left';
        var firstElement = topOrLeft ? this.tabStrip : this.pages;
        var lastElement = topOrLeft ? this.pages : this.tabStrip;
        if (!this.shadowRoot) {
          console.warn('TabStripWrapper expects a component to define a shadowRoot.');
        } else if (firstElement.nextSibling !== lastElement) {
          this.shadowRoot.insertBefore(firstElement, lastElement);
        }
      }
    }, {
      key: 'tabs',
      get: function get() {
        return this.tabStrip.items;
      }

      /**
       * @type {TabStrip}
       */

    }, {
      key: 'tabStrip',
      get: function get() {
        return this.shadowRoot.querySelector('#tabStrip');
      }
    }]);

    return TabStripWrap;
  }(Base);

  return TabStripWrap;
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modes = __webpack_require__(17);

var _Modes2 = _interopRequireDefault(_Modes);

var _TabStripWrapper2 = __webpack_require__(29);

var _TabStripWrapper3 = _interopRequireDefault(_TabStripWrapper2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A set of pages with a tab strip governing which page is shown.
 *
 * Use tabs when you want to provide a large set of options or elements than
 * can comfortably fit inline, the options can be coherently grouped into pages,
 * and you want to avoid making the user navigate to a separate page. Tabs work
 * best if you only have a small handful of pages, say 2–7.
 *
 * This stock combination applies the [TabStripWrapper](TabStripWrapper) to a
 * [Modes](Modes) element. The former takes care of the relative positioning
 * of the tab buttons and tab panels; the latter takes care of displaying only
 * the currently-selected tab panel. If you'd like to create something more
 * complex than this arrangement, you can use either of those elements on its
 * own.
 *
 * You will need to provide `Tabs` with the buttons that will select the
 * corresponding tab panels. Do this by slotting the buttons into the slot named
 * "tabButtons". If you don't require custom tab buttons, you can use the more
 * specialized [LabeledTabs](LabeledTabs) component, which will generate text
 * tab buttons for you.
 *
 * @extends Modes
 * @mixes TabStripWrapper
 */
var Tabs = function (_TabStripWrapper) {
  _inherits(Tabs, _TabStripWrapper);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  return Tabs;
}((0, _TabStripWrapper3.default)(_Modes2.default));

customElements.define('elix-tabs', Tabs);
exports.default = Tabs;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = DialogModalityMixin;

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var previousBodyOverflowKey = (0, _Symbol3.default)('previousBodyStyleOverflow');
var previousDocumentMarginRightKey = (0, _Symbol3.default)('previousDocumentMarginRight');

/**
 * This mixin blocks various user interactions to make an overlay behave like a
 * modal dialog. This mixin is generally used in conjunction with a backdrop
 * (such as that provided by `BackdropWrapper`).
 * 
 * This mixin expects the component to provide:
 * 
 * * An open/close API compatible with `OpenCloseMixin`.
 * 
 * The mixin provides these features to the component:
 * 
 * * Disables scrolling on the background page.
 * * A default ARIA role of `dialog`.
 * * Closes the element if user presses the Esc key.
 * 
 * For modeless overlays, see `PopupModalityMixin` instead.
 * 
 * @module DialogModalityMixin
 */
function DialogModalityMixin(Base) {

  // The class prototype added by the mixin.
  var DialogModality = function (_Base) {
    _inherits(DialogModality, _Base);

    function DialogModality() {
      _classCallCheck(this, DialogModality);

      return _possibleConstructorReturn(this, (DialogModality.__proto__ || Object.getPrototypeOf(DialogModality)).apply(this, arguments));
    }

    _createClass(DialogModality, [{
      key: _symbols2.default.afterEffect,
      value: function value(effect) {
        if (_get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), _symbols2.default.afterEffect, this)) {
          _get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), _symbols2.default.afterEffect, this).call(this, effect);
        }
        if (effect === 'closing') {
          // Restore body's previous degree of scrollability.
          document.body.style.overflow = this[previousBodyOverflowKey];
          document.documentElement.style.marginRight = this[previousDocumentMarginRightKey];
        }
      }
    }, {
      key: _symbols2.default.beforeEffect,
      value: function value(effect) {
        if (_get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), _symbols2.default.beforeEffect, this)) {
          _get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), _symbols2.default.beforeEffect, this).call(this, effect);
        }
        if (effect === 'opening') {
          // Mark body as non-scrollable, to absorb space bar keypresses and other
          // means of scrolling the top-level document.
          var scrollBarWidth = window.innerWidth - document.body.clientWidth;
          this[previousBodyOverflowKey] = document.body.style.overflow;
          this[previousDocumentMarginRightKey] = scrollBarWidth > 0 ? document.documentElement.style.marginRight : null;
          document.body.style.overflow = 'hidden';
          if (scrollBarWidth > 0) {
            document.documentElement.style.marginRight = scrollBarWidth + 'px';
          }
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), 'connectedCallback', this)) {
          _get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), 'connectedCallback', this).call(this);
        }

        // Set default ARIA role for the dialog.
        if (this.getAttribute('role') == null && this[_symbols2.default.defaults].role) {
          this.setAttribute('role', this[_symbols2.default.defaults].role);
        }
      }
    }, {
      key: _symbols2.default.keydown,
      value: function value(event) {
        var handled = false;

        switch (event.keyCode) {

          case 27:
            // Escape
            // Close on Esc key.
            this.close();
            handled = true;
            break;
        }

        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), _symbols2.default.keydown, this) && _get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), _symbols2.default.keydown, this).call(this, event) || false;
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(DialogModality.prototype.__proto__ || Object.getPrototypeOf(DialogModality.prototype), _symbols2.default.defaults, this) || {};
        defaults.role = 'dialog';
        return defaults;
      }
    }]);

    return DialogModality;
  }(Base);

  return DialogModality;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = ShadowReferencesMixin;

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This mixin creates references to elements in a component's Shadow DOM subtree.
 *
 * This adds a member on the component called `this.$` that can be used to
 * reference shadow elements with IDs. E.g., if component's shadow contains an
 * element `<button id="foo">`, then this mixin will create a member
 * `this.$.foo` that points to that button.
 *
 * Such references simplify a component's access to its own elements. In
 * exchange, this mixin trades off a one-time cost of querying all elements in
 * the shadow tree instead of paying an ongoing cost to query for an element
 * each time the component wants to inspect or manipulate it.
 *
 * This mixin expects the component to define a Shadow DOM subtree and, when
 * that has been done, to invoke [symbols.shadowCreated](symbols#shadowCreated).
 * You can create the shadow subtree yourself, or make use of
 * [ShadowTemplateMixin](ShadowTemplateMixin).
 *
 * This mixin is inspired by Polymer's [automatic
 * node finding](https://www.polymer-project.org/1.0/docs/devguide/local-dom.html#node-finding)
 * feature.
 *
 * @module ShadowReferencesMixin
 */
function ShadowReferencesMixin(Base) {
  var ShadowReferences = function (_Base) {
    _inherits(ShadowReferences, _Base);

    function ShadowReferences() {
      _classCallCheck(this, ShadowReferences);

      return _possibleConstructorReturn(this, (ShadowReferences.__proto__ || Object.getPrototypeOf(ShadowReferences)).apply(this, arguments));
    }

    _createClass(ShadowReferences, [{
      key: _symbols2.default.shadowCreated,
      value: function value() {
        if (_get(ShadowReferences.prototype.__proto__ || Object.getPrototypeOf(ShadowReferences.prototype), _symbols2.default.shadowCreated, this)) {
          _get(ShadowReferences.prototype.__proto__ || Object.getPrototypeOf(ShadowReferences.prototype), _symbols2.default.shadowCreated, this).call(this);
        }
        if (this.shadowRoot) {
          // Look for elements in the shadow subtree that have id attributes.
          // An alternatively implementation of this mixin would be to just define
          // a this.$ getter that lazily does this search the first time someone
          // tries to access this.$. That might introduce some complexity – if the
          // the tree changed after it was first populated, the result of
          // searching for a node might be somewhat unpredictable.
          if (!this.$) {
            this.$ = {};
          }
          var nodesWithIds = this.shadowRoot.querySelectorAll('[id]');
          var $ = this.$;
          [].forEach.call(nodesWithIds, function (node) {
            var id = node.getAttribute('id');
            $[id] = node;
          });
        }
      }

      /**
       * The collection of references to the elements with IDs in a component's
       * Shadow DOM subtree.
       *
       * @type {object}
       * @member $
       */

    }]);

    return ShadowReferences;
  }(Base);

  return ShadowReferences;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A collection of constants used by Elix mixins and components for consistency
 * in things such as user interface timings.
 *
 * @module constants
 */
var constants = {

  /**
   * Time in milliseconds after which the user is considered to have stopped
   * typing.
   *
   * This is used by
   * [KeyboardPrefixSelectionMixin](KeyboardPrefixSelectionMixin).
   *
   * @const {number} TYPING_TIMEOUT_DURATION
   */
  TYPING_TIMEOUT_DURATION: 1000

};

exports.default = constants;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.substantiveElements = substantiveElements;
/**
 * These functions help access component content.
 *
 * @module content
 */

/**
 * Return a set of Elements which are likely to be useful as component content.
 *
 * Given a `NodeList` or array of objects, this will return only those array
 * members that are: a) instances of `Element` (`HTMLElement` or `SVGElement`),
 * and b) not on a blacklist of normally invisible elements (such as `style` or
 * `script`). Among other things, this filters out Text nodes.
 *
 * This is used by [ContentItemsMixin](ContentItemsMixin) to filter out nodes
 * which are unlikely to be interesting as list items.
 *
 * @param {NodeList|Node[]} nodes - the list of nodes to filter
 * @returns {Element[]} the filtered elements
 */
function substantiveElements(nodes) {

  // These are tags for elements that can appear in the document body, but do
  // not seem to have any user-visible manifestation.
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  var auxiliaryElementTags = ['applet', // deprecated
  'basefont', // deprecated
  'embed', 'font', // deprecated
  'frame', // deprecated
  'frameset', // deprecated
  'isindex', // deprecated
  'keygen', // deprecated
  'link', 'multicol', // deprecated
  'nextid', // deprecated
  'noscript', 'object', 'param', 'script', 'style', 'template', 'noembed' // deprecated
  ];

  return [].filter.call(nodes, function (node) {
    return node instanceof Element && (!node.localName || auxiliaryElementTags.indexOf(node.localName) < 0);
  });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepContains;
/**
 * Returns true if the first node contains (or is) the second, even if the
 * second node is in a shadow tree.
 *
 * The standard Node.contains() function does not account for Shadow DOM, and
 * returns false if the supplied target node is sitting inside a shadow tree
 * within the container.
 * 
 * @param {Node} container - The container to search within.
 * @param {Node} target - The node that may be inside the container.
 * @returns {boolean} - True if the container contains the target node.
 */
function deepContains(container, target) {
  /** @type {any} */
  var current = target;
  while (current) {
    if (container === current) {
      return true;
    }
    current = current.parentNode || current.host;
  }
  return false;
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _globals = __webpack_require__(50);

var Elix = _interopRequireWildcard(_globals);

var _BrowserPluginList = __webpack_require__(37);

var _BrowserPluginList2 = _interopRequireDefault(_BrowserPluginList);

var _FocusRingTest = __webpack_require__(38);

var _FocusRingTest2 = _interopRequireDefault(_FocusRingTest);

var _ModesWithKeyboard = __webpack_require__(39);

var _ModesWithKeyboard2 = _interopRequireDefault(_ModesWithKeyboard);

var _QuietButton = __webpack_require__(40);

var _QuietButton2 = _interopRequireDefault(_QuietButton);

var _SampleDialog = __webpack_require__(41);

var _SampleDialog2 = _interopRequireDefault(_SampleDialog);

var _SingleSelectionDemo = __webpack_require__(42);

var _SingleSelectionDemo2 = _interopRequireDefault(_SingleSelectionDemo);

var _ToolbarTab = __webpack_require__(43);

var _ToolbarTab2 = _interopRequireDefault(_ToolbarTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _ClickSelectionMixin = __webpack_require__(12);

var _ClickSelectionMixin2 = _interopRequireDefault(_ClickSelectionMixin);

var _ContentItemsMixin = __webpack_require__(7);

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DirectionSelectionMixin = __webpack_require__(8);

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _KeyboardDirectionMixin = __webpack_require__(9);

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardMixin = __webpack_require__(4);

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _KeyboardPagedSelectionMixin = __webpack_require__(18);

var _KeyboardPagedSelectionMixin2 = _interopRequireDefault(_KeyboardPagedSelectionMixin);

var _KeyboardPrefixSelectionMixin = __webpack_require__(19);

var _KeyboardPrefixSelectionMixin2 = _interopRequireDefault(_KeyboardPrefixSelectionMixin);

var _SelectionAriaMixin = __webpack_require__(15);

var _SelectionAriaMixin2 = _interopRequireDefault(_SelectionAriaMixin);

var _SelectionInViewMixin = __webpack_require__(20);

var _SelectionInViewMixin2 = _interopRequireDefault(_SelectionInViewMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _SingleSelectionMixin = __webpack_require__(6);

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _attributes = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Demo of a list box with hard-coded contents.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * As a list source, this enumerates `navigator.plugins`.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Base = (0, _AttributeMarshallingMixin2.default)((0, _ClickSelectionMixin2.default)((0, _ContentItemsMixin2.default)((0, _DirectionSelectionMixin2.default)((0, _KeyboardDirectionMixin2.default)((0, _KeyboardMixin2.default)((0, _KeyboardPagedSelectionMixin2.default)((0, _KeyboardPrefixSelectionMixin2.default)((0, _SelectionAriaMixin2.default)((0, _SelectionInViewMixin2.default)((0, _ShadowTemplateMixin2.default)((0, _SingleSelectionMixin2.default)(HTMLElement))))))))))));

var BrowserPluginList = function (_Base) {
  _inherits(BrowserPluginList, _Base);

  function BrowserPluginList() {
    _classCallCheck(this, BrowserPluginList);

    return _possibleConstructorReturn(this, (BrowserPluginList.__proto__ || Object.getPrototypeOf(BrowserPluginList)).apply(this, arguments));
  }

  _createClass(BrowserPluginList, [{
    key: _symbols2.default.itemAdded,


    // HACK to work around limitations of pre-v1 ShadyCSS.
    value: function value(item) {
      if (_get(BrowserPluginList.prototype.__proto__ || Object.getPrototypeOf(BrowserPluginList.prototype), _symbols2.default.itemAdded, this)) {
        _get(BrowserPluginList.prototype.__proto__ || Object.getPrototypeOf(BrowserPluginList.prototype), _symbols2.default.itemAdded, this).call(this, item);
      }
      item.classList.add('style-scope');
      item.classList.add('browser-plugin-list');
    }

    // Map item selection to a `selected` CSS class.

  }, {
    key: _symbols2.default.itemSelected,
    value: function value(item, selected) {
      if (_get(BrowserPluginList.prototype.__proto__ || Object.getPrototypeOf(BrowserPluginList.prototype), _symbols2.default.itemSelected, this)) {
        _get(BrowserPluginList.prototype.__proto__ || Object.getPrototypeOf(BrowserPluginList.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
      }
      (0, _attributes.toggleClass)(item, 'selected', selected);
    }
  }, {
    key: _symbols2.default.shadowCreated,
    value: function value() {
      if (_get(BrowserPluginList.prototype.__proto__ || Object.getPrototypeOf(BrowserPluginList.prototype), _symbols2.default.shadowCreated, this)) {
        _get(BrowserPluginList.prototype.__proto__ || Object.getPrototypeOf(BrowserPluginList.prototype), _symbols2.default.shadowCreated, this).call(this);
      }
      var choices = Array.prototype.map.call(navigator.plugins, function (plugin) {
        return plugin.name;
      });
      var sorted = choices.sort();
      setOptions(this, sorted);
    }

    // Define a template that will be stamped into the Shadow DOM by the
    // ShadowTemplateMixin.

  }, {
    key: _symbols2.default.template,
    value: function value() {
      return '\n      <style>\n      :host {\n        border: 1px solid gray;\n        box-sizing: border-box;\n        cursor: default;\n        display: inline-flex;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      #devicesContainer {\n        flex: 1;\n        -webkit-overflow-scrolling: touch; /* for momentum scrolling */\n        overflow-x: hidden;\n        overflow-y: scroll;\n      }\n\n      #devicesContainer > * {\n        cursor: default;\n        padding: 0.25em;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n\n      #devicesContainer > .selected {\n        background: highlight;\n        color: highlighttext;\n      }\n      </style>\n\n      <div id="devicesContainer" role="none"></div>\n    ';
    }
  }, {
    key: _symbols2.default.content,
    get: function get() {
      if (this.shadowRoot) {
        var container = this.shadowRoot.querySelector('#devicesContainer');
        if (container) {
          return container.children;
        }
      }
      return [];
    }

    // We define a collection of default property values which can be set in
    // the constructor or connectedCallback. Defining the actual default values
    // in those calls would complicate things if a subclass someday wants to
    // define its own default value.

  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(BrowserPluginList.prototype.__proto__ || Object.getPrototypeOf(BrowserPluginList.prototype), _symbols2.default.defaults, this) || {};
      // By default, we assume the list presents list items vertically.
      defaults.orientation = 'vertical';
      return defaults;
    }
  }]);

  return BrowserPluginList;
}(Base);

function setOptions(element, options) {
  var container = element.shadowRoot.querySelector('#devicesContainer');
  while (container.children.length > 0) {
    container.children[0].remove();
  }
  var divs = options.map(function (option) {
    var div = document.createElement('div');
    div.textContent = option;
    return div;
  });
  divs.forEach(function (option) {
    return container.appendChild(option);
  });
  element[_symbols2.default.contentChanged]();
}

customElements.define('browser-plugin-list', BrowserPluginList);
exports.default = BrowserPluginList;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _FocusRingMixin2 = __webpack_require__(14);

var _FocusRingMixin3 = _interopRequireDefault(_FocusRingMixin2);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FocusRingTest = function (_FocusRingMixin) {
  _inherits(FocusRingTest, _FocusRingMixin);

  function FocusRingTest() {
    _classCallCheck(this, FocusRingTest);

    return _possibleConstructorReturn(this, (FocusRingTest.__proto__ || Object.getPrototypeOf(FocusRingTest)).apply(this, arguments));
  }

  _createClass(FocusRingTest, [{
    key: _symbols2.default.template,
    value: function value() {
      return '\n      <style>\n        :host {\n          display: inline-block;\n        }\n\n        :host(:focus:not(.focus-ring)) {\n          outline: none;\n        }\n\n        button {\n          background: gray;\n          color: white;\n          font-family: inherit;\n          font-size: inherit;\n          font-style: inherit;\n          font-weight: inherit;\n          outline: none;\n        }\n      </style>\n      <button tabindex="-1">\n        <slot></slot>\n      </button>\n    ';
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(FocusRingTest.prototype.__proto__ || Object.getPrototypeOf(FocusRingTest.prototype), 'connectedCallback', this).call(this);
      this.setAttribute('tabindex', '0');
    }
  }]);

  return FocusRingTest;
}((0, _FocusRingMixin3.default)((0, _ShadowTemplateMixin2.default)(HTMLElement)));

customElements.define('focus-ring-test', FocusRingTest);
exports.default = FocusRingTest;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DirectionSelectionMixin = __webpack_require__(8);

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _KeyboardDirectionMixin = __webpack_require__(9);

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardMixin = __webpack_require__(4);

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _Modes = __webpack_require__(17);

var _Modes2 = _interopRequireDefault(_Modes);

var _SelectionAriaMixin = __webpack_require__(15);

var _SelectionAriaMixin2 = _interopRequireDefault(_SelectionAriaMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModesWithKeyboard = (0, _DirectionSelectionMixin2.default)((0, _KeyboardDirectionMixin2.default)((0, _KeyboardMixin2.default)((0, _SelectionAriaMixin2.default)(_Modes2.default))));

customElements.define('modes-with-keyboard', ModesWithKeyboard);
exports.default = ModesWithKeyboard;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FocusRingMixin2 = __webpack_require__(14);

var _FocusRingMixin3 = _interopRequireDefault(_FocusRingMixin2);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuietButton = function (_FocusRingMixin) {
  _inherits(QuietButton, _FocusRingMixin);

  function QuietButton() {
    _classCallCheck(this, QuietButton);

    return _possibleConstructorReturn(this, (QuietButton.__proto__ || Object.getPrototypeOf(QuietButton)).apply(this, arguments));
  }

  _createClass(QuietButton, [{
    key: _symbols2.default.template,
    value: function value(filler) {
      return '\n      <style>\n        :host {\n          display: inline-block;\n        }\n\n        :host(:focus:not(.focus-ring)) {\n          outline: none;\n        }\n\n        button {\n          background: none;\n          border: none;\n          padding: 0;\n        }\n      </style>\n\n      <button tabindex="0">\n        ' + (filler || '<slot></slot>') + '\n      </button>\n    ';
    }
  }]);

  return QuietButton;
}((0, _FocusRingMixin3.default)((0, _ShadowTemplateMixin2.default)(HTMLElement)));

customElements.define('quiet-button', QuietButton);
exports.default = QuietButton;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Dialog2 = __webpack_require__(16);

var _Dialog3 = _interopRequireDefault(_Dialog2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SampleDialog = function (_Dialog) {
  _inherits(SampleDialog, _Dialog);

  function SampleDialog() {
    _classCallCheck(this, SampleDialog);

    return _possibleConstructorReturn(this, (SampleDialog.__proto__ || Object.getPrototypeOf(SampleDialog)).apply(this, arguments));
  }

  _createClass(SampleDialog, [{
    key: _symbols2.default.shadowCreated,
    value: function value() {
      var _this2 = this;

      if (_get(SampleDialog.prototype.__proto__ || Object.getPrototypeOf(SampleDialog.prototype), _symbols2.default.shadowCreated, this)) {
        _get(SampleDialog.prototype.__proto__ || Object.getPrototypeOf(SampleDialog.prototype), _symbols2.default.shadowCreated, this).call(this);
      }
      this.shadowRoot.querySelector('#overlayContent').addEventListener('click', function () {
        _this2.close('OK');
      });
    }
  }, {
    key: _symbols2.default.template,
    value: function value(filler) {
      return _get(SampleDialog.prototype.__proto__ || Object.getPrototypeOf(SampleDialog.prototype), _symbols2.default.template, this).call(this, '\n      <style>\n        #message {\n          padding: 1em;\n        }\n      </style>\n      <div id="message">\n        ' + (filler || '<slot></slot>') + '\n      </div>\n    ');
    }
  }]);

  return SampleDialog;
}(_Dialog3.default);

customElements.define('sample-dialog', SampleDialog);
exports.default = SampleDialog;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SingleSelectionMixin2 = __webpack_require__(6);

var _SingleSelectionMixin3 = _interopRequireDefault(_SingleSelectionMixin2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _attributes = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * A very simple component to show the application of SingleSelectionMixin.
 *
 * For a more complete demo using SingleSelectionMixin, see the ListBox demo.
 * 
 */
var SingleSelectionDemo = function (_SingleSelectionMixin) {
  _inherits(SingleSelectionDemo, _SingleSelectionMixin);

  function SingleSelectionDemo() {
    _classCallCheck(this, SingleSelectionDemo);

    var _this = _possibleConstructorReturn(this, (SingleSelectionDemo.__proto__ || Object.getPrototypeOf(SingleSelectionDemo)).call(this));

    _this.addEventListener('mousedown', function (event) {
      if (event.target instanceof Element) {
        _this[_symbols2.default.raiseChangeEvents] = true;
        _this.selectedItem = event.target;
        event.stopPropagation();
        _this[_symbols2.default.raiseChangeEvents] = false;
      }
    });
    return _this;
  }

  _createClass(SingleSelectionDemo, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attributeName, oldValue, newValue) {
      if (attributeName === 'selected-index') {
        this.selectedIndex = newValue;
      }
    }

    // Map item selection to a `selected` CSS class.

  }, {
    key: _symbols2.default.itemSelected,
    value: function value(item, selected) {
      if (_get(SingleSelectionDemo.prototype.__proto__ || Object.getPrototypeOf(SingleSelectionDemo.prototype), _symbols2.default.itemSelected, this)) {
        _get(SingleSelectionDemo.prototype.__proto__ || Object.getPrototypeOf(SingleSelectionDemo.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
      }
      (0, _attributes.toggleClass)(item, 'selected', selected);
    }

    // Simplistic implementation of items property — doesn't handle redistribution.

  }, {
    key: 'items',
    get: function get() {
      return this.children;
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['selected-index'];
    }
  }]);

  return SingleSelectionDemo;
}((0, _SingleSelectionMixin3.default)(HTMLElement));

customElements.define('single-selection-demo', SingleSelectionDemo);
exports.default = SingleSelectionDemo;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FocusRingMixin2 = __webpack_require__(14);

var _FocusRingMixin3 = _interopRequireDefault(_FocusRingMixin2);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarTab = function (_FocusRingMixin) {
  _inherits(ToolbarTab, _FocusRingMixin);

  function ToolbarTab() {
    _classCallCheck(this, ToolbarTab);

    return _possibleConstructorReturn(this, (ToolbarTab.__proto__ || Object.getPrototypeOf(ToolbarTab)).apply(this, arguments));
  }

  _createClass(ToolbarTab, [{
    key: _symbols2.default.template,
    value: function value(filler) {
      return '\n      <style>\n        :host {\n          display: flex;\n        }\n\n        :host(:focus:not(.focus-ring)) {\n          outline: none;\n        }\n\n        button {\n          align-items: center;\n          background: transparent;\n          border: none;\n          color: inherit;\n          display: flex;\n          flex: 1;\n          flex-direction: column;\n          font-family: inherit;\n          font-size: inherit;\n          outline: none;\n          padding: 6px;\n          -webkit-tap-highlight-color: transparent;\n        }\n\n        :host(.selected) button,\n        :host(.selected) ::slotted(*) {\n          color: dodgerblue;\n        }\n      </style>\n\n      <button tabindex="-1">\n        ' + (filler || '<slot></slot>') + '\n      </button>\n    ';
    }
  }]);

  return ToolbarTab;
}((0, _FocusRingMixin3.default)((0, _ShadowTemplateMixin2.default)(HTMLElement)));

customElements.define('toolbar-tab', ToolbarTab);
exports.default = ToolbarTab;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Dialog = __webpack_require__(16);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _renderArrayAsElements = __webpack_require__(23);

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _ShadowReferencesMixin = __webpack_require__(32);

var _ShadowReferencesMixin2 = _interopRequireDefault(_ShadowReferencesMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var choicesKey = (0, _Symbol3.default)('choices');

/**
 * An `AlertDialog` is a form of `Dialog` designed to ask the user a single
 * question and let them respond by clicking one of a small number of buttons
 * labeled with text.
 * 
 * @extends {Dialog}
 * @mixes ShadowReferencesMixin
 */

var AlertDialog = function (_ShadowReferencesMixi) {
  _inherits(AlertDialog, _ShadowReferencesMixi);

  function AlertDialog() {
    _classCallCheck(this, AlertDialog);

    return _possibleConstructorReturn(this, (AlertDialog.__proto__ || Object.getPrototypeOf(AlertDialog)).apply(this, arguments));
  }

  _createClass(AlertDialog, [{
    key: _symbols2.default.shadowCreated,
    value: function value() {
      var _this2 = this;

      if (_get(AlertDialog.prototype.__proto__ || Object.getPrototypeOf(AlertDialog.prototype), _symbols2.default.shadowCreated, this)) {
        _get(AlertDialog.prototype.__proto__ || Object.getPrototypeOf(AlertDialog.prototype), _symbols2.default.shadowCreated, this).call(this);
      }
      this.$.buttonContainer.addEventListener('click', function (event) {
        // TODO: Ignore clicks on buttonContainer background.
        if (event.target instanceof HTMLElement) {
          var button = event.target;
          _this2.close(button.textContent);
        }
      });
    }

    /**
     * An array of strings indicating the choices the `AlertDialog` will present
     * to the user as responses to the alert. For each string in the array, the
     * `AlertDialog` displays a button labeled with that string.
     * 
     * You can use any strings for the choices. `AlertDialog` provides static
     * properties offering two simple arrays of choices for common situations:
     * 
     * * `OK`: an array with the single choice "OK".
     * * `OK_CANCEL`: an array with two choices, "OK" and “Cancel”.
     * 
     * You can use these to set the `choices` property, or you can provide custom
     * choices:
     * 
     *     // Create an OK/Cancel alert.
     *     const alert = new AlertDialog();
     *     alert.choices = AlertDialog.OK_CANCEL;
     *  
     * @type {[string]}
     */

  }, {
    key: _symbols2.default.keydown,


    // Let the user select a choice by pressing its initial letter.
    value: function value(event) {
      var handled = false;

      // Loop over choices to see if one of them starts with the key.
      // TODO: Loop over buttons instead of choices?
      var found = false;
      var index = 0;
      while (index < this.choices.length && !found) {
        if (this.choices[index].charCodeAt(0) === event.keyCode) {
          found = true;
        } else {
          index++;
        }
      }
      if (found && index >= 0) {
        this.close(this.choices[index]);
        handled = true;
      }

      // Prefer mixin result if it's defined, otherwise use base result.
      return handled || _get(AlertDialog.prototype.__proto__ || Object.getPrototypeOf(AlertDialog.prototype), _symbols2.default.keydown, this) && _get(AlertDialog.prototype.__proto__ || Object.getPrototypeOf(AlertDialog.prototype), _symbols2.default.keydown, this).call(this, event) || false;
    }

    /**
     * An array with a single item: the string "OK".
     * 
     * @type {[string]}
     */

  }, {
    key: _symbols2.default.template,
    value: function value() {
      var fillers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var defaultFiller = typeof fillers === 'string' ? fillers : fillers.default || '<slot></slot>';
      var buttonFiller = fillers.buttons || '<slot name="buttons"><button>OK</button></slot>';
      return _get(AlertDialog.prototype.__proto__ || Object.getPrototypeOf(AlertDialog.prototype), _symbols2.default.template, this).call(this, '\n      <style>\n        #container {\n          padding: 1em;\n        }\n\n        #buttonContainer {\n          margin-top: 1em;\n        }\n\n        button {\n          font-family: inherit;\n          font-size: inherit;\n        }\n\n        button:not(:first-child) {\n          margin-left: 0.25em;\n        }\n      </style>\n      <div id="container">\n        ' + defaultFiller + '\n        <div id="buttonContainer">\n          ' + buttonFiller + '\n        </div>\n      </div>\n    ');
    }
  }, {
    key: 'choices',
    get: function get() {
      return this[choicesKey];
    }
    /**
     * @param {[string]} choices - The choices to present to the user
     */
    ,
    set: function set(choices) {
      this[choicesKey] = choices;
      if (!this.shadowRoot) {
        console.warn('NotificationDialog couldn\'t find its own shadowRoot.');
        return;
      }
      var slot = this.shadowRoot.querySelector('slot[name="buttons"]');
      if (!slot) {
        console.warn('NotificationDialog couldn\'t find its default slot.');
        return;
      }
      (0, _renderArrayAsElements2.default)(choices, slot, function (choice, button) {
        if (!button) {
          button = document.createElement('button');
        }
        button.textContent = choice;
        return button;
      });
    }
  }], [{
    key: 'OK',
    get: function get() {
      return ['OK'];
    }

    /**
     * An array containing two strings: "OK" and "Cancel".
     * 
     * @type {[string]}
     */

  }, {
    key: 'OK_CANCEL',
    get: function get() {
      return ['OK', 'Cancel'];
    }
  }]);

  return AlertDialog;
}((0, _ShadowReferencesMixin2.default)(_Dialog2.default));

customElements.define('elix-alert-dialog', AlertDialog);
exports.default = AlertDialog;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _BackdropWrapper = __webpack_require__(25);

var _BackdropWrapper2 = _interopRequireDefault(_BackdropWrapper);

var _DialogModalityMixin = __webpack_require__(31);

var _DialogModalityMixin2 = _interopRequireDefault(_DialogModalityMixin);

var _FocusCaptureWrapper = __webpack_require__(26);

var _FocusCaptureWrapper2 = _interopRequireDefault(_FocusCaptureWrapper);

var _KeyboardMixin = __webpack_require__(4);

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _OpenCloseMixin = __webpack_require__(10);

var _OpenCloseMixin2 = _interopRequireDefault(_OpenCloseMixin);

var _OverlayMixin = __webpack_require__(11);

var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _TransitionEffectMixin = __webpack_require__(21);

var _TransitionEffectMixin2 = _interopRequireDefault(_TransitionEffectMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base =
// Relative order of wrapper application matters: first focus capture
// wrapper, then backdrop wrapper. Remaining mixins can be applied in
// any order.
(0, _BackdropWrapper2.default)((0, _FocusCaptureWrapper2.default)((0, _AttributeMarshallingMixin2.default)((0, _DialogModalityMixin2.default)((0, _KeyboardMixin2.default)((0, _OpenCloseMixin2.default)((0, _OverlayMixin2.default)((0, _ShadowTemplateMixin2.default)((0, _TransitionEffectMixin2.default)(HTMLElement)))))))));

/**
 * A drawer is a modal container generally used to provide navigation in
 * situations where: a) screen real estate is constrained and b) the navigation
 * UI is not critical to completing the user’s primary goal (and, hence, not
 * critical to the application’s business goal).
 * 
 * Dialog uses `BackdropWrapper` to add a backdrop behind the main overlay
 * content. Both the backdrop and the dialog itself can be styled.
 * 
 * @extends {HTMLElement}
 * @mixes AttributeMarshallingMixin
 * @mixes BackdropWrapper
 * @mixes DialogModalityMixin
 * @mixes FocusCaptureWrapper
 * @mixes KeyboardMixin
 * @mixes OpenCloseMixin
 * @mixes OverlayMixin
 * @mixes ShadowTemplateMixin
 * @mixes TransitionEffectMixin
 */

var Drawer = function (_Base) {
  _inherits(Drawer, _Base);

  function Drawer() {
    _classCallCheck(this, Drawer);

    return _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
  }

  _createClass(Drawer, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(Drawer.prototype.__proto__ || Object.getPrototypeOf(Drawer.prototype), 'connectedCallback', this)) {
        _get(Drawer.prototype.__proto__ || Object.getPrototypeOf(Drawer.prototype), 'connectedCallback', this).call(this);
      }
      // We can't seem to write a CSS rule that lets a shadow element be sensitive
      // to the `dir` attribute of an ancestor, so we reflect the inherited
      // direction to the component. We can then write styles that key off of
      // that.
      var direction = getComputedStyle(this).direction;
      if (direction === 'rtl' && !this.dir) {
        this.setAttribute('dir', 'rtl');
      }
    }
  }, {
    key: _symbols2.default.elementsWithTransitions,
    value: function value(effect) {
      return [this.backdrop, this.shadowRoot.querySelector('#overlayContent')];
    }
  }, {
    key: _symbols2.default.shadowCreated,
    value: function value() {
      var _this2 = this;

      if (_get(Drawer.prototype.__proto__ || Object.getPrototypeOf(Drawer.prototype), _symbols2.default.shadowCreated, this)) {
        _get(Drawer.prototype.__proto__ || Object.getPrototypeOf(Drawer.prototype), _symbols2.default.shadowCreated, this).call(this);
      }

      // Implicitly close on background clicks.
      this.backdrop.addEventListener('click', function () {
        _this2.close();
      });
    }
  }, {
    key: _symbols2.default.template,
    value: function value(filler) {
      return _get(Drawer.prototype.__proto__ || Object.getPrototypeOf(Drawer.prototype), _symbols2.default.template, this).call(this, '\n      <style>\n        :host {\n          display: flex;\n          align-items: stretch;\n          flex-direction: row;\n          justify-content: flex-start;\n        }\n\n        :host(:not(.visible)) {\n          display: none;\n        }\n\n        #backdrop {\n          background: black;\n          opacity: 0;\n          will-change: opacity;\n        }\n\n        :host(.effect) #backdrop {\n          transition: opacity 0.25s linear;\n        }\n        :host(.opened:not(.effect)) #backdrop,\n        :host(.effect.opening) #backdrop {\n          opacity: 0.4;\n        }\n\n        #overlayContent {\n          background: white;\n          border: 1px solid rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n          transform: translateX(-100%);\n          will-change: transform;\n        }\n        :host([dir="rtl"]) #overlayContent {\n          transform: translateX(100%);\n        }\n\n        :host(.opened:not(.effect)) #overlayContent,\n        :host(.effect.opening) #overlayContent {\n          transform: translateX(0);\n        }\n\n        :host(.effect) #overlayContent {\n          transition: transform 0.25s;\n        }\n        :host(.effect.opening) #overlayContent {\n          transition-timing-function: ease-out;\n        }\n        :host(.effect.closing) #overlayContent {\n          transition-timing-function: ease-in;\n        }\n      </style>\n      ' + (filler || '<slot></slot>') + '\n    ');
    }
  }]);

  return Drawer;
}(Base);

customElements.define('elix-drawer', Drawer);
exports.default = Drawer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _LabeledTabButton = __webpack_require__(27);

var _LabeledTabButton2 = _interopRequireDefault(_LabeledTabButton);

var _renderArrayAsElements = __webpack_require__(23);

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _Tabs2 = __webpack_require__(30);

var _Tabs3 = _interopRequireDefault(_Tabs2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A set of tabs with default tab buttons for each tab panel. Each button will
 * have a text label extracted from the `aria-label` attribute of the
 * corresponding panel.
 *
 * This is a specialized version of the more general [Tabs](Tabs) component.
 * It's intended for the common case where the tab buttons just need a text
 * label. The tab buttons will be instances of
 * [LabeledTabButton](LabeledTabButton). If you'd like to use a different
 * element for the tab buttons, you can use the `Tabs` component directly.
 *
 * @extends Tabs
 */
var LabeledTabs = function (_Tabs) {
  _inherits(LabeledTabs, _Tabs);

  function LabeledTabs() {
    _classCallCheck(this, LabeledTabs);

    return _possibleConstructorReturn(this, (LabeledTabs.__proto__ || Object.getPrototypeOf(LabeledTabs)).apply(this, arguments));
  }

  _createClass(LabeledTabs, [{
    key: _symbols2.default.itemsChanged,
    value: function value() {
      if (_get(LabeledTabs.prototype.__proto__ || Object.getPrototypeOf(LabeledTabs.prototype), _symbols2.default.itemsChanged, this)) {
        _get(LabeledTabs.prototype.__proto__ || Object.getPrototypeOf(LabeledTabs.prototype), _symbols2.default.itemsChanged, this).call(this);
      }

      // Create one tab button for each panel.
      var tabStrip = this.tabStrip;

      var slot = this.shadowRoot.querySelector('slot[name="tabButtons"]');
      if (!slot) {
        console.warn('LabeledTabs couldn\'t find a slot named "tabButtons".');
        return;
      }

      var tabPosition = this.tabPosition;
      (0, _renderArrayAsElements2.default)(this.items, slot, function (tabPanel, tabButton) {
        if (!tabButton || !(tabButton instanceof _LabeledTabButton2.default)) {
          tabButton = new _LabeledTabButton2.default();
          tabButton.setAttribute('tabindex', 0);
          tabButton.setAttribute('tab-position', tabPosition);
        }
        tabButton.id = tabPanel.id + '_tab';
        tabButton.textContent = tabPanel.getAttribute('aria-label');

        // Point the tab button and tab panel at each other.
        tabButton.setAttribute('aria-controls', tabPanel.id);
        tabPanel.setAttribute('aria-labelledby', tabButton.id);

        return tabButton;
      });

      tabStrip.selectedIndex = this.selectedIndex;
    }

    // HACK: A bug in WebKit and Blink prevents TabStrip from correctly applying
    // styling to a slot's default nodes. See
    // https://github.com/w3c/webcomponents/issues/631. This bug comes into play
    // when a LabeledTabs component has tabAlign set to "stretch". We work around
    // this bug by adding a style rule that explicitly styles slot children.

  }, {
    key: _symbols2.default.template,
    value: function value(fillers) {
      var defaultFiller = typeof fillers === 'string' ? fillers : fillers && fillers.default || '<slot></slot>';
      var tabButtonsFiller = fillers && fillers.tabButtons;
      /* Styling workaround: see note above */
      var template = '\n      ' + defaultFiller + '\n      <style>\n        :host([tab-align="stretch"]) slot[name="tabButtons"] > * {\n          flex: 1;\n        }\n      </style>\n    ';
      return _get(LabeledTabs.prototype.__proto__ || Object.getPrototypeOf(LabeledTabs.prototype), _symbols2.default.template, this).call(this, {
        default: template,
        tabButtons: tabButtonsFiller
      });
    }
  }]);

  return LabeledTabs;
}(_Tabs3.default);

customElements.define('elix-labeled-tabs', LabeledTabs);
exports.default = LabeledTabs;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _ClickSelectionMixin = __webpack_require__(12);

var _ClickSelectionMixin2 = _interopRequireDefault(_ClickSelectionMixin);

var _ContentItemsMixin = __webpack_require__(7);

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _DefaultSlotContentMixin = __webpack_require__(13);

var _DefaultSlotContentMixin2 = _interopRequireDefault(_DefaultSlotContentMixin);

var _DirectionSelectionMixin = __webpack_require__(8);

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _KeyboardDirectionMixin = __webpack_require__(9);

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardMixin = __webpack_require__(4);

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _KeyboardPagedSelectionMixin = __webpack_require__(18);

var _KeyboardPagedSelectionMixin2 = _interopRequireDefault(_KeyboardPagedSelectionMixin);

var _KeyboardPrefixSelectionMixin = __webpack_require__(19);

var _KeyboardPrefixSelectionMixin2 = _interopRequireDefault(_KeyboardPrefixSelectionMixin);

var _SelectedItemTextValueMixin = __webpack_require__(52);

var _SelectedItemTextValueMixin2 = _interopRequireDefault(_SelectedItemTextValueMixin);

var _SelectionAriaMixin = __webpack_require__(15);

var _SelectionAriaMixin2 = _interopRequireDefault(_SelectionAriaMixin);

var _SelectionInViewMixin = __webpack_require__(20);

var _SelectionInViewMixin2 = _interopRequireDefault(_SelectionInViewMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _SingleSelectionMixin = __webpack_require__(6);

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _attributes = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = (0, _AttributeMarshallingMixin2.default)((0, _ClickSelectionMixin2.default)((0, _ContentItemsMixin2.default)((0, _DefaultSlotContentMixin2.default)((0, _DirectionSelectionMixin2.default)((0, _KeyboardDirectionMixin2.default)((0, _KeyboardMixin2.default)((0, _KeyboardPagedSelectionMixin2.default)((0, _KeyboardPrefixSelectionMixin2.default)((0, _SelectedItemTextValueMixin2.default)((0, _SelectionAriaMixin2.default)((0, _SelectionInViewMixin2.default)((0, _ShadowTemplateMixin2.default)((0, _SingleSelectionMixin2.default)(HTMLElement))))))))))))));

/**
 * A simple single-selection list box.
 *
 * This component supports a generic visual style, ARIA support, and full
 * keyboard navigation. See `KeyboardDirectionMixin`,
 * `KeyboardPagedSelectionMixin`, and `KeyboardPrefixSelectionMixin` for
 * keyboard details.
 *
 * @extends {HTMLElement}
 * @mixes AttributeMarshallingMixin
 * @mixes ClickSelectionMixin
 * @mixes ContentItemsMixin
 * @mixes DefaultSlotContentMixin
 * @mixes DirectionSelectionMixin
 * @mixes KeyboardDirectionMixin
 * @mixes KeyboardMixin
 * @mixes KeyboardPagedSelectionMixin
 * @mixes KeyboardPrefixSelectionMixin
 * @mixes SelectedItemTextValueMixin
 * @mixes SelectionAriaMixin
 * @mixes SelectionInViewMixin
 * @mixes ShadowTemplateMixin
 * @mixes SingleSelectionMixin
 */

var ListBox = function (_Base) {
  _inherits(ListBox, _Base);

  function ListBox() {
    _classCallCheck(this, ListBox);

    return _possibleConstructorReturn(this, (ListBox.__proto__ || Object.getPrototypeOf(ListBox)).apply(this, arguments));
  }

  _createClass(ListBox, [{
    key: _symbols2.default.itemSelected,


    // Map item selection to a `selected` CSS class.
    /**
     * @param {Element} item 
     * @param {boolean} selected 
     */
    value: function value(item, selected) {
      if (_get(ListBox.prototype.__proto__ || Object.getPrototypeOf(ListBox.prototype), _symbols2.default.itemSelected, this)) {
        _get(ListBox.prototype.__proto__ || Object.getPrototypeOf(ListBox.prototype), _symbols2.default.itemSelected, this).call(this, item, selected);
      }
      (0, _attributes.toggleClass)(item, 'selected', selected);
    }

    /**
     * The vertical (default) or horizontal orientation of the list.
     *
     * Supported values are "horizontal" or "vertical".
     *
     * @type {string}
     */

  }, {
    key: _symbols2.default.template,
    value: function value(filler) {
      return '\n      <style>\n      :host {\n        border: 1px solid gray;\n        box-sizing: border-box;\n        cursor: default;\n        display: flex;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n\n      #itemsContainer {\n        flex: 1;\n        -webkit-overflow-scrolling: touch; /* for momentum scrolling */\n        overflow-x: hidden;\n        overflow-y: scroll;\n      }\n      :host([orientation="horizontal"]) #itemsContainer {\n        display: flex;\n        overflow-x: scroll;\n        overflow-y: hidden;\n      }\n\n      #itemsContainer ::slotted(*) {\n        cursor: default;\n        padding: 0.25em;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n\n      #itemsContainer ::slotted(.selected) {\n        background: var(--elix-selected-background, highlight);\n        color: var(--elix-selected-color, highlighttext);\n      }\n      </style>\n\n      <div id="itemsContainer" role="none">\n        ' + (filler || '<slot></slot>') + '\n      </div>\n    ';
    }

    /**
     * Fires when the orientation property changes in response to internal
     * component activity.
     *
     * @memberof ListBox
     * @event orientation-changed
     */

  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(ListBox.prototype.__proto__ || Object.getPrototypeOf(ListBox.prototype), _symbols2.default.defaults, this) || {};
      // By default, we assume the list presents list items vertically.
      defaults.orientation = 'vertical';
      return defaults;
    }
  }, {
    key: 'orientation',
    get: function get() {
      return this[_symbols2.default.orientation] || this[_symbols2.default.defaults].orientation;
    },
    set: function set(value) {
      var changed = value !== this[_symbols2.default.orientation];
      this[_symbols2.default.orientation] = value;
      // @ts-ignore
      if ('orientation' in Base) {
        _set(ListBox.prototype.__proto__ || Object.getPrototypeOf(ListBox.prototype), 'orientation', value, this);
      }
      // Reflect attribute for styling
      this.reflectAttribute('orientation', value);
      if (changed && this[_symbols2.default.raiseChangeEvents]) {
        var event = new CustomEvent('orientation-changed');
        this.dispatchEvent(event);
      }
    }
  }]);

  return ListBox;
}(Base);

customElements.define('elix-list-box', ListBox);
exports.default = ListBox;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _KeyboardMixin = __webpack_require__(4);

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _OpenCloseMixin = __webpack_require__(10);

var _OpenCloseMixin2 = _interopRequireDefault(_OpenCloseMixin);

var _OverlayMixin = __webpack_require__(11);

var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

var _PopupModalityMixin = __webpack_require__(51);

var _PopupModalityMixin2 = _interopRequireDefault(_PopupModalityMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = (0, _AttributeMarshallingMixin2.default)((0, _KeyboardMixin2.default)((0, _OpenCloseMixin2.default)((0, _OverlayMixin2.default)((0, _PopupModalityMixin2.default)((0, _ShadowTemplateMixin2.default)(HTMLElement))))));

/**
 * A `Popup` is a lightweight form of overlay that, when opened, displays its
 * children on top of other page elements.
 * 
 * @extends {HTMLElement}
 * @mixes AttributeMarshallingMixin
 * @mixes KeyboardMixin
 * @mixes OpenCloseMixin
 * @mixes OverlayMixin
 * @mixes PopupModalityMixin
 * @mixes ShadowTemplateMixin
 */

var Popup = function (_Base) {
  _inherits(Popup, _Base);

  function Popup() {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
  }

  _createClass(Popup, [{
    key: _symbols2.default.template,
    value: function value(filler) {
      return '\n      <style>\n        :host {\n          align-items: center;\n          display: flex;\n          flex-direction: column;\n          height: 100%;\n          justify-content: center;\n          left: 0;\n          outline: none;\n          pointer-events: none;\n          position: fixed;\n          top: 0;\n          width: 100%;\n        }\n\n        :host(:not(.visible)) {\n          display: none;\n        }\n\n        #overlayContent {\n          background: white;\n          border: 1px solid rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n          pointer-events: initial;\n        }\n      </style>\n      <div id="overlayContent">\n        ' + (filler || '<slot></slot>') + '\n      </div>\n    ';
    }
  }]);

  return Popup;
}(Base);

customElements.define('elix-popup', Popup);
exports.default = Popup;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _OpenCloseMixin = __webpack_require__(10);

var _OpenCloseMixin2 = _interopRequireDefault(_OpenCloseMixin);

var _OverlayMixin = __webpack_require__(11);

var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _TransitionEffectMixin = __webpack_require__(21);

var _TransitionEffectMixin2 = _interopRequireDefault(_TransitionEffectMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var durationKey = (0, _Symbol3.default)('duration');
var fromEdgeKey = (0, _Symbol3.default)('fromEdge');
var timeoutKey = (0, _Symbol3.default)('timeout');

var Base = (0, _AttributeMarshallingMixin2.default)((0, _OpenCloseMixin2.default)((0, _OverlayMixin2.default)((0, _ShadowTemplateMixin2.default)((0, _TransitionEffectMixin2.default)(HTMLElement)))));

/**
 * A lightweight popup intended to display a short, non-critical message until a
 * specified `duration` elapses or the user dismisses it.
 * 
 * @extends {HTMLElement}
 * @mixes AttributeMarshallingMixin
 * @mixes OpenCloseMixin
 * @mixes OverlayMixin
 * @mixes ShadowTemplateMixin
 * @mixes TransitionEffectMixin
 */

var Toast = function (_Base) {
  _inherits(Toast, _Base);

  function Toast() {
    _classCallCheck(this, Toast);

    // If the user moves the mouse over the element, stop the timer.
    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this));

    _this.addEventListener('mouseover', function () {
      clearTimer(_this);
    });

    // If the user moves the mouse away, restart the timer.
    _this.addEventListener('mouseout', function () {
      startTimer(_this);
    });

    // Set defaults.
    if (typeof _this.duration === 'undefined') {
      _this.duration = _this[_symbols2.default.defaults].duration;
    }
    if (typeof _this.fromEdge === 'undefined') {
      _this.fromEdge = _this[_symbols2.default.defaults].fromEdge;
    }
    return _this;
  }

  _createClass(Toast, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (_get(Toast.prototype.__proto__ || Object.getPrototypeOf(Toast.prototype), 'connectedCallback', this)) {
        _get(Toast.prototype.__proto__ || Object.getPrototypeOf(Toast.prototype), 'connectedCallback', this).call(this);
      }

      // Set default ARIA role for the popup.
      if (this.getAttribute('role') == null && this[_symbols2.default.defaults].role) {
        this.setAttribute('role', this[_symbols2.default.defaults].role);
      }

      // We can't seem to write a CSS rule that lets a shadow element be sensitive
      // to the `dir` attribute of an ancestor, so we reflect the inherited
      // direction to the component. We can then write styles that key off of
      // that.
      var direction = getComputedStyle(this).direction;
      if (direction === 'rtl' && !this.dir) {
        this.setAttribute('dir', 'rtl');
      }
    }
  }, {
    key: _symbols2.default.afterEffect,
    value: function value(effect) {
      if (_get(Toast.prototype.__proto__ || Object.getPrototypeOf(Toast.prototype), _symbols2.default.afterEffect, this)) {
        _get(Toast.prototype.__proto__ || Object.getPrototypeOf(Toast.prototype), _symbols2.default.afterEffect, this).call(this, effect);
      }
      switch (effect) {
        case 'opening':
          startTimer(this);
          break;
      }
    }
  }, {
    key: _symbols2.default.elementsWithTransitions,
    value: function value(effect) {
      return [this.shadowRoot.querySelector('#overlayContent')];
    }

    /**
     * The `fromEdge` property determines the edge from which the toast will slide
     * into view. Supported values are:
     * 
     * * "bottom" (the default): slides in from the center of the bottom of the
     *   window.
     * * "bottom-left"
     * * "bottom-right"
     * * "top"
     * * "top-left"
     * * "top-right"
     * 
     * The `Toast` component supports right-to-left languages such as Arabic and
     * Hebrew. If the effective value of the element’s `dir` attribute is set to
     * "rtl" (right to left), then the interpretation of the `fromEdge` property
     * will be flipped horizontally: for example, setting `from-edge=“top-right”`
     * will cause the `Toast` to appear from the top _left_.
     *
     * @type {"bottom"|"bottom-left"|"bottom-right"|"top"|"top-left"|"top-right"|null}
     */

  }, {
    key: _symbols2.default.openedChanged,
    value: function value(opened) {
      if (!opened) {
        clearTimer(this);
      }
    }
  }, {
    key: _symbols2.default.template,
    value: function value(filler) {
      return '\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          height: 100%;\n          left: 0;\n          outline: none;\n          pointer-events: none;\n          position: fixed;\n          top: 0;\n          width: 100%;\n        }\n\n        :host(:not(.visible)) {\n          display: none;\n        }\n\n        #overlayContent {\n          background: white;\n          border: 1px solid rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n          margin: 1em;\n          opacity: 0;\n          pointer-events: initial;\n          will-change: opacity, transform;\n        }\n\n        :host(.opened:not(.effect)) #overlayContent,\n        :host(.effect.opening) #overlayContent {\n          opacity: 1.0;\n        }\n\n        :host(.effect) #overlayContent {\n          transition-duration: 0.25s;\n          transition-property: opacity, transform;\n        }\n        :host(.effect.opening) #overlayContent {\n          transition-timing-function: ease-out;\n        }\n        :host(.effect.closing) #overlayContent {\n          transition-timing-function: ease-in;\n        }\n\n        /* From bottom edge (the default) */\n        :host([from-edge="bottom"]) {\n          align-items: center;\n          justify-content: flex-end;\n        }\n        :host([from-edge="bottom"]) #overlayContent {\n          transform: translateY(100%);\n        }\n        :host([from-edge="bottom"].opened:not(.effect)) #overlayContent,\n        :host([from-edge="bottom"].effect.opening) #overlayContent {\n          transform: translateY(0);\n        }\n\n        /* From bottom-left corner */\n        :host([from-edge="bottom-left"]) {\n          align-items: flex-start;\n          justify-content: flex-end;\n        }\n        :host([from-edge="bottom-left"]) #overlayContent {\n          transform: translateX(-100%);\n        }\n        :host([from-edge="bottom-left"][dir="rtl"]) #overlayContent {\n          transform: translateX(100%);\n        }\n        :host([from-edge="bottom-left"].opened:not(.effect)) #overlayContent,\n        :host([from-edge="bottom-left"].effect.opening) #overlayContent {\n          transform: translateX(0);\n        }\n\n        /* From bottom-right corner */\n        :host([from-edge="bottom-right"]) {\n          align-items: flex-end;\n          justify-content: flex-end;\n        }\n        :host([from-edge="bottom-right"]) #overlayContent {\n          transform: translateX(100%);\n        }\n        :host([from-edge="bottom-right"][dir="rtl"]) #overlayContent {\n          transform: translateX(-100%);\n        }\n        :host([from-edge="bottom-right"].opened:not(.effect)) #overlayContent,\n        :host([from-edge="bottom-right"].effect.opening) #overlayContent {\n          transform: translateX(0);\n        }\n\n        /* From top edge */\n        :host([from-edge="top"]) {\n          align-items: center;\n        }\n        :host([from-edge="top"]) #overlayContent {\n          transform: translateY(-100%);\n        }\n        :host([from-edge="top"].opened:not(.effect)) #overlayContent,\n        :host([from-edge="top"].effect.opening) #overlayContent {\n          transform: translateY(0);\n        }\n\n        /* From top-left corner */\n        :host([from-edge="top-left"]) {\n          align-items: flex-start;\n        }\n        :host([from-edge="top-left"]) #overlayContent {\n          transform: translateX(-100%);\n        }\n        :host([from-edge="top-left"][dir="rtl"]) #overlayContent {\n          transform: translateX(100%);\n        }\n        :host([from-edge="top-left"].opened:not(.effect)) #overlayContent,\n        :host([from-edge="top-left"].effect.opening) #overlayContent {\n          transform: translateX(0);\n        }\n\n        /* From top-right corner */\n        :host([from-edge="top-right"]) {\n          align-items: flex-end;\n        }\n        :host([from-edge="top-right"]) #overlayContent {\n          transform: translateX(100%);\n        }\n        :host([from-edge="top-right"][dir="rtl"]) #overlayContent {\n          transform: translateX(-100%);\n        }\n        :host([from-edge="top-right"].opened:not(.effect)) #overlayContent,\n        :host([from-edge="top-right"].effect.opening) #overlayContent {\n          transform: translateX(0);\n        }\n      </style>\n      <div id="overlayContent">\n        ' + (filler || '<slot></slot>') + '\n      </div>\n    ';
    }
  }, {
    key: _symbols2.default.defaults,
    get: function get() {
      var defaults = _get(Toast.prototype.__proto__ || Object.getPrototypeOf(Toast.prototype), _symbols2.default.defaults, this) || {};
      defaults.duration = 2500; /* milliseconds */
      defaults.fromEdge = 'bottom';
      defaults.role = 'alert';
      return defaults;
    }

    /**
     * This property specifies in milliseconds how long a toast should remain open
     * before being implicitly closed. The default value is 2500 milliseconds (2.5
     * seconds).
     * 
     * To support interactivity within a toast, the timer is disabled if the user
     * moves the mouse inside the toast or taps within it. When/if the user later
     * moves the mouse outside the toast, or taps outside it, the timer will be
     * restarted at zero.
     * 
     * Setting `duration` to `null` will disable the timer, allowing the toast to
     * remain open indefinitely.
     * 
     * @type {number}
     * @default 2500
     */

  }, {
    key: 'duration',
    get: function get() {
      return this[durationKey];
    }
    /**
     * @param {number} duration - The duration to show the toast, in milliseconds
     */
    ,
    set: function set(duration) {
      this[durationKey] = typeof duration === 'string' ? parseInt(duration) : duration;
    }
  }, {
    key: 'fromEdge',
    get: function get() {
      return this[fromEdgeKey];
    },
    set: function set(fromEdge) {
      this[fromEdgeKey] = fromEdge;
      this.reflectAttribute('from-edge', fromEdge);
    }
  }]);

  return Toast;
}(Base);

customElements.define('elix-toast', Toast);
exports.default = Toast;


function clearTimer(element) {
  if (element[timeoutKey]) {
    clearTimeout(element[timeoutKey]);
    element[timeoutKey] = null;
  }
}

function startTimer(element) {
  clearTimer(element);
  var duration = element.duration;
  if (duration != null && duration > 0) {
    element[timeoutKey] = setTimeout(function () {
      element[_symbols2.default.raiseChangeEvents] = true;
      element.close();
      element[_symbols2.default.raiseChangeEvents] = false;
    }, duration);
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _attributes = __webpack_require__(5);

var attributes = _interopRequireWildcard(_attributes);

var _content = __webpack_require__(34);

var content = _interopRequireWildcard(_content);

var _AttributeMarshallingMixin = __webpack_require__(3);

var _AttributeMarshallingMixin2 = _interopRequireDefault(_AttributeMarshallingMixin);

var _ClickSelectionMixin = __webpack_require__(12);

var _ClickSelectionMixin2 = _interopRequireDefault(_ClickSelectionMixin);

var _constants = __webpack_require__(33);

var _constants2 = _interopRequireDefault(_constants);

var _ContentItemsMixin = __webpack_require__(7);

var _ContentItemsMixin2 = _interopRequireDefault(_ContentItemsMixin);

var _defaultScrollTarget = __webpack_require__(22);

var _defaultScrollTarget2 = _interopRequireDefault(_defaultScrollTarget);

var _DefaultSlotContentMixin = __webpack_require__(13);

var _DefaultSlotContentMixin2 = _interopRequireDefault(_DefaultSlotContentMixin);

var _DirectionSelectionMixin = __webpack_require__(8);

var _DirectionSelectionMixin2 = _interopRequireDefault(_DirectionSelectionMixin);

var _KeyboardDirectionMixin = __webpack_require__(9);

var _KeyboardDirectionMixin2 = _interopRequireDefault(_KeyboardDirectionMixin);

var _KeyboardMixin = __webpack_require__(4);

var _KeyboardMixin2 = _interopRequireDefault(_KeyboardMixin);

var _KeyboardPagedSelectionMixin = __webpack_require__(18);

var _KeyboardPagedSelectionMixin2 = _interopRequireDefault(_KeyboardPagedSelectionMixin);

var _KeyboardPrefixSelectionMixin = __webpack_require__(19);

var _KeyboardPrefixSelectionMixin2 = _interopRequireDefault(_KeyboardPrefixSelectionMixin);

var _OpenCloseMixin = __webpack_require__(10);

var _OpenCloseMixin2 = _interopRequireDefault(_OpenCloseMixin);

var _OverlayMixin = __webpack_require__(11);

var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

var _renderArrayAsElements = __webpack_require__(23);

var _renderArrayAsElements2 = _interopRequireDefault(_renderArrayAsElements);

var _SelectionAriaMixin = __webpack_require__(15);

var _SelectionAriaMixin2 = _interopRequireDefault(_SelectionAriaMixin);

var _SelectionInViewMixin = __webpack_require__(20);

var _SelectionInViewMixin2 = _interopRequireDefault(_SelectionInViewMixin);

var _ShadowReferencesMixin = __webpack_require__(32);

var _ShadowReferencesMixin2 = _interopRequireDefault(_ShadowReferencesMixin);

var _ShadowTemplateMixin = __webpack_require__(2);

var _ShadowTemplateMixin2 = _interopRequireDefault(_ShadowTemplateMixin);

var _SingleSelectionMixin = __webpack_require__(6);

var _SingleSelectionMixin2 = _interopRequireDefault(_SingleSelectionMixin);

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

var _TransitionEffectMixin = __webpack_require__(21);

var _TransitionEffectMixin2 = _interopRequireDefault(_TransitionEffectMixin);

var _AlertDialog = __webpack_require__(44);

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

var _Dialog = __webpack_require__(16);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Drawer = __webpack_require__(45);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _LabeledTabButton = __webpack_require__(27);

var _LabeledTabButton2 = _interopRequireDefault(_LabeledTabButton);

var _LabeledTabs = __webpack_require__(46);

var _LabeledTabs2 = _interopRequireDefault(_LabeledTabs);

var _ListBox = __webpack_require__(47);

var _ListBox2 = _interopRequireDefault(_ListBox);

var _Modes = __webpack_require__(17);

var _Modes2 = _interopRequireDefault(_Modes);

var _Popup = __webpack_require__(48);

var _Popup2 = _interopRequireDefault(_Popup);

var _Tabs = __webpack_require__(30);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabStrip = __webpack_require__(28);

var _TabStrip2 = _interopRequireDefault(_TabStrip);

var _TabStripWrapper = __webpack_require__(29);

var _TabStripWrapper2 = _interopRequireDefault(_TabStripWrapper);

var _Toast = __webpack_require__(49);

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// The complete list of all mixins and elements.


// Import elements
/*
 * This file is transpiled to create an ES5-compatible distribution in which
 * the package's main feature(s) are available via the window.Elix global.
 * If you're already using ES6 yourself, ignore this file, and instead import
 * the source file(s) you want from the src folder.
 */

// Import mixins
var Elix = {
  AttributeMarshallingMixin: _AttributeMarshallingMixin2.default,
  attributes: attributes,
  ClickSelectionMixin: _ClickSelectionMixin2.default,
  constants: _constants2.default,
  content: content,
  ContentItemsMixin: _ContentItemsMixin2.default,
  defaultScrollTarget: _defaultScrollTarget2.default,
  DefaultSlotContentMixin: _DefaultSlotContentMixin2.default,
  Dialog: _Dialog2.default,
  DirectionSelectionMixin: _DirectionSelectionMixin2.default,
  Drawer: _Drawer2.default,
  KeyboardDirectionMixin: _KeyboardDirectionMixin2.default,
  KeyboardMixin: _KeyboardMixin2.default,
  KeyboardPagedSelectionMixin: _KeyboardPagedSelectionMixin2.default,
  KeyboardPrefixSelectionMixin: _KeyboardPrefixSelectionMixin2.default,
  LabeledTabButton: _LabeledTabButton2.default,
  LabeledTabs: _LabeledTabs2.default,
  ListBox: _ListBox2.default,
  Modes: _Modes2.default,
  AlertDialog: _AlertDialog2.default,
  OpenCloseMixin: _OpenCloseMixin2.default,
  OverlayMixin: _OverlayMixin2.default,
  Popup: _Popup2.default,
  renderArrayAsElements: _renderArrayAsElements2.default,
  SelectionAriaMixin: _SelectionAriaMixin2.default,
  SelectionInViewMixin: _SelectionInViewMixin2.default,
  ShadowReferencesMixin: _ShadowReferencesMixin2.default,
  ShadowTemplateMixin: _ShadowTemplateMixin2.default,
  SingleSelectionMixin: _SingleSelectionMixin2.default,
  Symbol: _Symbol3.default,
  symbols: _symbols2.default,
  Tabs: _Tabs2.default,
  TabStrip: _TabStrip2.default,
  TabStripWrapper: _TabStripWrapper2.default,
  TransitionEffectMixin: _TransitionEffectMixin2.default,
  Toast: _Toast2.default
};

// Create (or add to) Elix global.
window.Elix = Object.assign(window.Elix || {}, Elix);

exports.default = Elix;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = PopupModalityMixin;

var _Symbol2 = __webpack_require__(1);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Symbols for private data members on an element.
var closeListenerKey = (0, _Symbol3.default)('closeListener');

/**
 * This mixin makes an overlay behave like a popup by dismissing it when certain
 * user interactions occur.
 * 
 * This mixin expects the component to provide:
 * 
 * * An open/close API compatible with `OpenCloseMixin`.
 * 
 * The mixin provides these features to the component:
 * 
 * * Event handlers that close the element if the user clicks outside the
 *   element, presses the Esc key, moves the focus outside the element, scrolls
 *   the document, resizes the document, or switches focus away from the
 *   document.
 * * A default ARIA role of `alert`.
 * 
 * For modal overlays, use `DialogModalityMixin` instead. See the documentation
 * of that mixin for a comparison of modality behaviors.
 * 
 * @module PopupModalityMixin
 */
function PopupModalityMixin(Base) {

  // The class prototype added by the mixin.
  var PopupModality = function (_Base) {
    _inherits(PopupModality, _Base);

    function PopupModality() {
      _classCallCheck(this, PopupModality);

      // Implicitly close on loss of focus.
      var _this = _possibleConstructorReturn(this, (PopupModality.__proto__ || Object.getPrototypeOf(PopupModality)).call(this));
      // @ts-ignore


      _this.addEventListener('blur', function () {
        _this[_symbols2.default.raiseChangeEvents] = true;
        _this.close();
        _this[_symbols2.default.raiseChangeEvents] = false;
      });
      return _this;
    }

    _createClass(PopupModality, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(PopupModality.prototype.__proto__ || Object.getPrototypeOf(PopupModality.prototype), 'connectedCallback', this)) {
          _get(PopupModality.prototype.__proto__ || Object.getPrototypeOf(PopupModality.prototype), 'connectedCallback', this).call(this);
        }

        // Set default ARIA role for the popup.
        if (this.getAttribute('role') == null && this[_symbols2.default.defaults].role) {
          this.setAttribute('role', this[_symbols2.default.defaults].role);
        }
      }
    }, {
      key: _symbols2.default.keydown,


      // Close on Esc key.
      value: function value(event) {
        var handled = false;

        switch (event.keyCode) {
          case 27:
            // Escape
            this.close();
            handled = true;
            break;
        }

        // Prefer mixin result if it's defined, otherwise use base result.
        return handled || _get(PopupModality.prototype.__proto__ || Object.getPrototypeOf(PopupModality.prototype), _symbols2.default.keydown, this) && _get(PopupModality.prototype.__proto__ || Object.getPrototypeOf(PopupModality.prototype), _symbols2.default.keydown, this).call(this, event) || false;
      }
    }, {
      key: _symbols2.default.openedChanged,
      value: function value(opened) {
        var _this2 = this;

        if (_get(PopupModality.prototype.__proto__ || Object.getPrototypeOf(PopupModality.prototype), _symbols2.default.openedChanged, this)) {
          _get(PopupModality.prototype.__proto__ || Object.getPrototypeOf(PopupModality.prototype), _symbols2.default.openedChanged, this).call(this, opened);
        }
        if (opened) {

          // General purpose listener for events that happen outside the
          // component.
          this[closeListenerKey] = function (event) {
            var insideEvent = _this2 === event.target || event.target instanceof Node && _this2.contains(event.target);
            if (!insideEvent) {
              _this2[_symbols2.default.raiseChangeEvents] = true;
              _this2.close();
              _this2[_symbols2.default.raiseChangeEvents] = false;
            }
          };

          // Wait a tick before wiring up events — if the popup was opened
          // because the user clicked something, that opening click event may
          // still be bubbling up, and we only want to start listening after
          // it's been processed.
          setTimeout(function () {
            // It's conceivable the popup was closed before the timeout completed,
            // so double-check that it's still opened before listening to events.
            if (_this2.opened) {
              document.addEventListener('click', _this2[closeListenerKey]);
              document.addEventListener('keydown', _this2[closeListenerKey]);
              window.addEventListener('blur', _this2[closeListenerKey]);
              window.addEventListener('resize', _this2[closeListenerKey]);
              window.addEventListener('scroll', _this2[closeListenerKey]);
            }
          });
        } else {
          // Stop closing on window blur/resize/scroll.
          document.removeEventListener('click', this[closeListenerKey]);
          document.removeEventListener('keydown', this[closeListenerKey]);
          window.removeEventListener('blur', this[closeListenerKey]);
          window.removeEventListener('resize', this[closeListenerKey]);
          window.removeEventListener('scroll', this[closeListenerKey]);
        }
      }
    }, {
      key: _symbols2.default.defaults,
      get: function get() {
        var defaults = _get(PopupModality.prototype.__proto__ || Object.getPrototypeOf(PopupModality.prototype), _symbols2.default.defaults, this) || {};
        defaults.role = 'alert';
        return defaults;
      }
    }]);

    return PopupModality;
  }(Base);

  return PopupModality;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = SelectedItemTextValueMixin;

var _symbols = __webpack_require__(0);

var _symbols2 = _interopRequireDefault(_symbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mixin which defines a `value` property that reflects the text content of a
 * selected item.
 *
 * This mixin exists for list-like components that want to provide a more
 * convenient way to get/set the selected item using text. It adds a `value`
 * property that gets the `textContent` of a component's `selectedItem`. The
 * `value` property can also be set to set the selection to the first item in
 * the `items` collection that has the requested `textContent`. If the indicated
 * text is not found in `items`, the selection is cleared.
 *
 * This mixin expects a component to provide an `items` array of all elements
 * in the list. A standard way to do that with is
 * [ContentItemsMixin](ContentItemsMixin). This also expects the definition
 * of `selectedIndex` and `selectedItem` properties, which can be obtained
 * from [SingleSelectionMixin](SingleSelectionMixin).
 *
 * @module SelectedItemTextValueMixin
 */
function SelectedItemTextValueMixin(Base) {

  // The class prototype added by the mixin.
  var SelectedItemTextValue = function (_Base) {
    _inherits(SelectedItemTextValue, _Base);

    function SelectedItemTextValue() {
      _classCallCheck(this, SelectedItemTextValue);

      return _possibleConstructorReturn(this, (SelectedItemTextValue.__proto__ || Object.getPrototypeOf(SelectedItemTextValue)).apply(this, arguments));
    }

    _createClass(SelectedItemTextValue, [{
      key: 'value',


      /**
       * The text content of the selected item.
       *
       * Setting this value to a string will attempt to select the first list item
       * whose text content match that string. Setting this to a string not matching
       * any list item will result in no selection.
       *
       * @type {string}
       */
      get: function get() {
        return this.selectedItem == null || this.selectedItem.textContent == null ? '' : this.selectedItem.textContent;
      },
      set: function set(text) {

        var currentIndex = this.selectedIndex;
        var newIndex = -1; // Assume we won't find the text.

        // Find the item with the indicated text.
        var items = this.items;
        if (items == null) {
          return;
        }
        for (var i = 0, length = items.length; i < length; i++) {
          if (items[i].textContent === text) {
            newIndex = i;
            break;
          }
        }

        if (newIndex !== currentIndex) {
          this.selectedIndex = newIndex;
          if (this[_symbols2.default.raiseChangeEvents]) {
            var event = new CustomEvent('value-changed');
            this.dispatchEvent(event);
          }
        }
      }
    }]);

    return SelectedItemTextValue;
  }(Base);

  return SelectedItemTextValue;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ })
/******/ ]);
//# sourceMappingURL=demos.js.map