/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RadioControl } from '@wordpress/components';
import { moreHorizontalMobile } from '@wordpress/icons';

import { useState, useCallback, useMemo } from '@wordpress/element';

import { getBlockType } from '@wordpress/blocks';

import { store as blocksStore } from '@wordpress/blocks';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
/**
 * This component shows ...
 * 
 * @param {Object} props Properties of the 'gatherpress-feed-buttons'-core/button block-variation.
 * @returns ... component with a range slider to set url_shorten
 */
const FeedButtonsEdit = (props=null) => {


    const setValue = () => {
        return props?.attributes?.feed || 'rss'
	}

    // This example assumes that a core/embed block is the first block in the Block Editor.
    const activeBlockVariation = useSelect( ( select ) => {
        // Return the active block variation for the first block.
        return select( blocksStore ).getActiveBlockVariation(
            props.name,
            props.attributes
        );
    }, [props] );

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

    const update = useCallback( (value) => { 

        const newName = activeBlockVariation.title + ': ' + value;
        const newAttributes = {
            ...props.attributes,
            feed: value,
            metadata: {
                name: newName,
            },
        };
        props.setAttributes(newAttributes);
    }, [props] );

    return (
		<>
            <RadioControl
                label={__('Type', 'gatherpress')}
                help={__('Defaults to RSS.', 'gatherpress')}
                selected={ setValue() }
                // afterIcon={ moreHorizontalMobile }

                onChange={ update }
                options={ [
                    { label: 'RSS', value: 'rss' },
                    { label: 'Atom', value: 'atom' },
                    { label: 'iCal', value: 'ical' },
                  ] }

            />
		</>
		
	);
};

export { FeedButtonsEdit };

