/**
 * WordPress dependencies
 */
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { postCategories, button } from '@wordpress/icons';

import { addFilter } from "@wordpress/hooks";


/**
 * Internal dependencies
*/
import { TAX_VENUE_SHADOW, GPFB_CLASS_NAME, VARIATION_OF } from './helpers/namespace';
import GPQLIcon from './components/icon';


import { feedButtonsEdit } from './edit';


/**
 * Extend 'core/post-terms' to show feed links instead of archive links.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
registerBlockVariation( VARIATION_OF, {
	name: GPFB_CLASS_NAME,
	title: __( 'Venue Feeds', 'gatherpress' ),
	description: __( 'Displays links to the feeds of selected terms.', 'gatherpress' ),
	// category: 'gatherpress',
	// icon: GPQLIcon( postCategories ),
	// isActive: [ 'feed','className' ],
	isActive: [ 'term', 'show_feed' ],
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
		className: GPFB_CLASS_NAME,
		term:TAX_VENUE_SHADOW,
		feed: 'rss',
		show_feed: true
	},
	// allowedControls: [],
	scope: [ 'inserter', 'block' ], // Defaults to 'block' and 'inserter'.
	// example: {} // Disabled like the original 'core/post-terms' block.
} );



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
addFilter(
	'editor.BlockEdit',
	'gatherpress-feed-buttons/button-block-variation',
	feedButtonsEdit,
	1
);




addFilter(
    'blocks.registerBlockType',
	'gatherpress-feed-buttons/extend-button-block',
    extendButtonBlock
);

function extendButtonBlock(settings, name) {
    if (name !== VARIATION_OF) {
        return settings;
    }

	const newSettings = {
        ...settings,
		attributes: {
			...settings.attributes,
			feed: { 
				type: 'string',
			},
			show_feed: { 
				type: 'boolean',
			},
		},
        // supports: {
        //     ...settings.supports,
		// 	className: false, // Removes "Additional CSS classes" panel for blocks that support it
		// 	// customClassName: false // **Updated** For blocks that don't have className
        // },
    }
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








