/**
 * WordPress dependencies
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Get stuff to filter block attributes on the fly
 *
 * @see https://github.com/WordPress/gutenberg/issues/10082#issuecomment-642786811
 */
import { createHigherOrderComponent } from '@wordpress/compose';

import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, Disabled } from '@wordpress/components';

import { useEntityProp } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import { FeedButtonsEdit } from './components/FeedButtonsEdit';
import { getCurrentContextualPostId } from './helpers/globals';

// import { isEventPostType } from './helpers/event';

import { PT_EVENT, PT_VENUE, TAX_VENUE_SHADOW, GPFB_CLASS_NAME, VARIATION_OF } from './helpers/namespace';

const feedButtonsEdit = createHigherOrderComponent( ( BlockEdit ) => {
	return (props) => {

		if (props.name !== VARIATION_OF) {
			return <BlockEdit {...props} />;
		}

		// if ( !props?.attributes?.className?.includes( GPFB_CLASS_NAME + '-button' ) ) {
		if ( !props?.attributes?.className?.includes( GPFB_CLASS_NAME ) ) {
			return <BlockEdit {...props} />
		}

		const { isSelected } = props;

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


		return (
			<>
				<BlockEdit {...props} />

				{/* { ! isDescendentOfQueryLoop && isSelected && ( */}
				{ isSelected && (
					<InspectorControls>
						<PanelBody
							title={__('Feed Links settings', 'gatherpress')}
							initialOpen={true}
						>
							<PanelRow>
								<FeedButtonsEdit {...props} />
							</PanelRow>
						</PanelBody>
					</InspectorControls>
				) }
			</>
		);
	};
}, 'feedButtonsEdit' );

export { feedButtonsEdit };
