/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/FeedButtonsEdit.js":
/*!*******************************************!*\
  !*** ./src/components/FeedButtonsEdit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedButtonsEdit: () => (/* binding */ FeedButtonsEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */








/**
 * This component shows ...
 * 
 * @param {Object} props Properties of the 'gatherpress-feed-buttons'-core/button block-variation.
 * @returns ... component with a range slider to set url_shorten
 */

const FeedButtonsEdit = (props = null) => {
  const setValue = () => {
    return props?.attributes?.feed || 'rss';
  };

  // This example assumes that a core/embed block is the first block in the Block Editor.
  const activeBlockVariation = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    // Return the active block variation for the first block.
    return select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.store).getActiveBlockVariation(props.name, props.attributes);
  }, [props]);

  // if ( (undefined === props.attributes.metadata || undefined === props.attributes.metadata.name ) ) {
  //     const newName = activeBlockVariation.title + ': ' + props.attributes.feed;
  //     const newAttributes = {
  //         ...props.attributes,
  //         metadata: {
  //             name: newName,
  //         },
  //     };
  //     props.setAttributes(newAttributes);
  // }

  const options = [];
  const update = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(value => {
    const newName = activeBlockVariation.title + ': ' + value;
    const newAttributes = {
      ...props.attributes,
      feed: value,
      metadata: {
        name: newName
      }
    };
    props.setAttributes(newAttributes);
  }, [props]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type', 'gatherpress'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Defaults to RSS.', 'gatherpress'),
      selected: setValue()
      // afterIcon={ moreHorizontalMobile }
      ,

      onChange: update,
      options: [{
        label: 'RSS',
        value: 'rss'
      }, {
        label: 'Atom',
        value: 'atom'
      }, {
        label: 'iCal',
        value: 'ical'
      }]
    })
  });
};


/***/ }),

/***/ "./src/components/icon.js":
/*!********************************!*\
  !*** ./src/components/icon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




/*  */

function GPQLIcon(iconName) {
  // Taken from the <Icon> component at
  // https://github.com/WordPress/gutenberg/blob/bbdf1a7f39dd75f672fe863c9d8ac7bf8faa874b/packages/components/src/icon/index.tsx#L54C2-L54C44
  const BaseSize = 'string' === typeof iconName ? 20 : 24;
  const NameTagSize = 12; // BaseSize/2;
  const NameTagMargin = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('-$%dpx', BaseSize / 4);
  // console.log('BaseSize', BaseSize);
  // console.log('NameTagMargin', NameTagMargin);
  // https://github.com/WordPress/gutenberg/blob/bbdf1a7f39dd75f672fe863c9d8ac7bf8faa874b/packages/block-editor/src/components/block-icon/index.js#L23
  const NameTagIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
    icon: "nametag",
    size: NameTagSize
  });
  const OtherIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
    icon: iconName
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalZStack, {
    offset: 15,
    isLayered: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(OtherIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        color: 'var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))',
        // color:'fuchsia',
        // marginLeft: '24px',
        // marginTop: '12px',
        marginTop: NameTagMargin,
        // marginBottom: '-12px',
        // marginRight: '-24px',
        marginRight: NameTagMargin
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NameTagIcon, {})
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GPQLIcon);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   feedButtonsEdit: () => (/* binding */ feedButtonsEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FeedButtonsEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FeedButtonsEdit */ "./src/components/FeedButtonsEdit.js");
/* harmony import */ var _helpers_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/globals */ "./src/helpers/globals.js");
/* harmony import */ var _helpers_namespace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/namespace */ "./src/helpers/namespace.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Get stuff to filter block attributes on the fly
 *
 * @see https://github.com/WordPress/gutenberg/issues/10082#issuecomment-642786811
 */





/**
 * Internal dependencies
 */



// import { isEventPostType } from './helpers/event';



const feedButtonsEdit = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== _helpers_namespace__WEBPACK_IMPORTED_MODULE_7__.VARIATION_OF) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BlockEdit, {
        ...props
      });
    }

    // if ( !props?.attributes?.className?.includes( GPFB_CLASS_NAME + '-button' ) ) {
    if (!props?.attributes?.className?.includes(_helpers_namespace__WEBPACK_IMPORTED_MODULE_7__.GPFB_CLASS_NAME)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BlockEdit, {
        ...props
      });
    }
    const {
      isSelected
    } = props;

    // const cId = getCurrentContextualPostId(props?.context?.postId) 
    // const post = useSelect(
    // 	(select) => select('core/editor').getCurrentPost(),
    // 	[]
    // );
    // const [meta, setMeta] = useEntityProp(
    // 	'postType',
    // 	// post.type,
    // 	// 'gatherpress_event',
    // 	PT_EVENT,
    // 	'meta',
    // 	// post.id
    // 	cId
    // );

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BlockEdit, {
        ...props
      }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Feed Links settings', 'gatherpress'),
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_FeedButtonsEdit__WEBPACK_IMPORTED_MODULE_5__.FeedButtonsEdit, {
              ...props
            })
          })
        })
      })]
    });
  };
}, 'feedButtonsEdit');


/***/ }),

/***/ "./src/helpers/globals.js":
/*!********************************!*\
  !*** ./src/helpers/globals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentContextualPostId: () => (/* binding */ getCurrentContextualPostId)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 
 *
 * @return {boolean} True if the c...., false otherwise.
 */
function getCurrentContextualPostId(postId = null) {
  const post = postId || (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').getCurrentPostId();
  // console.log(post);

  return post;
}

/***/ }),

/***/ "./src/helpers/namespace.js":
/*!**********************************!*\
  !*** ./src/helpers/namespace.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GPFB_CLASS_NAME: () => (/* binding */ GPFB_CLASS_NAME),
/* harmony export */   PT_EVENT: () => (/* binding */ PT_EVENT),
/* harmony export */   TAX_VENUE_SHADOW: () => (/* binding */ TAX_VENUE_SHADOW),
/* harmony export */   VARIATION_OF: () => (/* binding */ VARIATION_OF)
/* harmony export */ });
const PT_EVENT = 'gatherpress_event';
// export const PT_VENUE = 'gatherpress_venue';
const TAX_VENUE_SHADOW = '_gatherpress_venue';

// export const GPV_CLASS_NAME   = 'gp-venue-v3'; // maybe better: 'gp-venue-portal-group'

// const GPFB = 'gatherpress-feed-buttons';
const GPFB_CLASS_NAME = 'gatherpress-feed-buttons';
const VARIATION_OF = 'core/post-terms';
// export const VARIATION_OF = 'core/button';

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/variations.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_namespace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/namespace */ "./src/helpers/namespace.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/icon */ "./src/components/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
*/




/**
 * Extend 'core/post-terms' to show feed links instead of archive links.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)(_helpers_namespace__WEBPACK_IMPORTED_MODULE_3__.VARIATION_OF, {
  name: _helpers_namespace__WEBPACK_IMPORTED_MODULE_3__.GPFB_CLASS_NAME,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Venue Feeds', 'gatherpress'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Displays links to the feeds of selected terms.', 'gatherpress'),
  // category: 'gatherpress',
  // icon: GPQLIcon( postCategories ),
  // isActive: [ 'feed','className' ],
  isActive: ['term', 'show_feed'],
  // @source https://github.com/WordPress/gutenberg/issues/41303#issuecomment-1760985709 
  // I had to add blockAttrs to the fn to make this work, because the className only exists within the variationAttrs, which comes second.
  // 	isActive: ( blockAttrs, variationAttrs ) => {
  // console.log(variationAttrs.className.includes(GPFB_CLASS_NAME));
  // console.log(variationAttrs);
  // 		return (
  // 			variationAttrs.className.includes(GPFB_CLASS_NAME) // check if className contains GPFB_CLASS_NAME and not equals. incase you add additional css classes it will still work
  // 		);
  // 	},
  attributes: {
    // namespace: GPFB_CLASS_NAME,
    className: _helpers_namespace__WEBPACK_IMPORTED_MODULE_3__.GPFB_CLASS_NAME,
    term: _helpers_namespace__WEBPACK_IMPORTED_MODULE_3__.TAX_VENUE_SHADOW,
    feed: 'rss',
    show_feed: true
  },
  // allowedControls: [],
  scope: ['inserter', 'block'] // Defaults to 'block' and 'inserter'.
  // example: {} // Disabled like the original 'core/post-terms' block.
});

/**
 * Add the edit component to the block.
 * This is the component that will be rendered in the editor.
 * It will be rendered after the original block edit component.
 *
 * @param {function} BlockEdit Original component
 * @returns {function} Wrapped component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'gatherpress-feed-buttons/button-block-variation', _edit__WEBPACK_IMPORTED_MODULE_5__.feedButtonsEdit, 1);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.registerBlockType', 'gatherpress-feed-buttons/extend-button-block', extendButtonBlock);
function extendButtonBlock(settings, name) {
  if (name !== _helpers_namespace__WEBPACK_IMPORTED_MODULE_3__.VARIATION_OF) {
    return settings;
  }
  const newSettings = {
    ...settings,
    attributes: {
      ...settings.attributes,
      feed: {
        type: 'string'
      },
      show_feed: {
        type: 'boolean'
      }
    }
    // supports: {
    //     ...settings.supports,
    // 	className: false, // Removes "Additional CSS classes" panel for blocks that support it
    // 	// customClassName: false // **Updated** For blocks that don't have className
    // },
  };
  // console.log(newSettings);
  return newSettings;
}

/*
const GPFB_VARIATION_ATTRIBUTES = {
	title: __( 'Online-Event Link', 'gatherpress' ),
	description: __( 'A button linking to the online-event or the venue.', 'gatherpress' ),
	category: 'gatherpress',
	icon: GPQLIcon( button ),
};

const GPFB_BUTTON_ATTRIBUTES = {
	className: GPFB_CLASS_NAME + '-button',
	// While <a> is semantically more accurat, button can be disabled.
	// By setting this to 'button', instead of 'a', we can completely prevent the LinkControl getting rendered into the Toolbar.
	// tagName: 'button',
	tagName: 'a',
	title: __( 'Visit Online-Event', 'gatherpress' ),
	text: '🌐 ' + __( 'Online-Event', 'gatherpress' ),
	metadata: {
		// Supported Attributes for 'core/button': url, text, linkTarget, rel
		// https://make.wordpress.org/core/2024/03/06/new-feature-the-block-bindings-api/
		bindings: {
			url: {
				source: "gatherpress/feed-buttons",
				args: {
					key: "url"
				}
			},
			// Works only if contains attribute has data, either from an editor or by default. BUT IT NEEDS SOME DATA !!
			text: {
				source: "gatherpress/feed-buttons",
				args: {
					key: "text"
				}
			}
		}
	},
	urlShorten: 20
};
*/

/*  
registerBlockVariation( VARIATION_OF, {
	...GPFB_VARIATION_ATTRIBUTES,
	name: GPFB_CLASS_NAME + '-button',
	isActive: [ 'className', 'metadata.bindings.url.source' ],
	// DO NOT ADD A CLASSNAME, IT PREVENT BLOCK-STYLES.
	isActive: [ 'metadata.bindings.url.source' ],
	// @source https://github.com/WordPress/gutenberg/issues/41303#issuecomment-1760985709 
	// I had to add blockAttrs to the fn to make this work, because the className only exists within the variationAttrs, which comes second.
	// isActive: ( blockAttrs, { className }) => {
	// 	return (
	// 		className.includes(GPFB_CLASS_NAME) // check if className contains GPV_CLASS_NAME and not equals. incase you add additional css classes it will still work
	// 	);
	// },
	attributes: {
		...GPFB_BUTTON_ATTRIBUTES,
	},
	scope: [ 'inserter', 'transform', 'block' ], // Defaults to 'block' and 'inserter'.
	example: {}
} ); */

/**
 * A Trap block, that looks like a single button, hohoho.
 *  
 * This block-variation is only useful, because a user can pick the block directly from the inserter or the left sidebar.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/

registerBlockVariation( 'core/buttons', {
	...GPFB_VARIATION_ATTRIBUTES,
	name: 'pseudo-' + GPFB_CLASS_NAME + '-button',
	// isActive: [ 'namespace', 'title' ], // This is not used/disabled by purpose.
	innerBlocks: [
		[
			VARIATION_OF,
			{
				...GPFB_BUTTON_ATTRIBUTES
			},

		],
	],
	example: {
		innerBlocks: [
			{
				name: VARIATION_OF,
				attributes: {
					...GPFB_BUTTON_ATTRIBUTES
				}
			},
		]
	}
} ); */
/******/ })()
;
//# sourceMappingURL=variations.js.map