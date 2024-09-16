<?php
/**
 * Plugin Name:       Gatherpress feed-buttons block
 * Description:       ...
 * Version:           0.1.0-alpha
 * Requires at least: 6.4
 * Requires PHP:      8.1
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gatherpress-feed-buttons
 *
 * @package           create-block
 */

namespace GatherPressFeedButtons;


// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; // @codeCoverageIgnore

use GatherPress\Core\Venue;

/**
 * DEBUG ONLY
 *
 * Using a global here is just because im lazy.
 * Will be removed before merge!!
 */
$gatherpress_TEMP_feed_type = '';

/**
 * Start the engines.
 *
 * @return void
 */
function bootstrap(): void {

	add_action( 'init', __NAMESPACE__ . '\\register_assets', 1 );
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_assets' );

	// God damn!!!!
	//
	// https://core.trac.wordpress.org/ticket/59551
	// [...] This means anybody following the example usage of that filter could end up
	// with their return not respected unless they change priority to higher than 10,
	// which is not documented!
	//
	add_filter( 'pre_render_block', __NAMESPACE__ . '\\pre_render_post_terms_block', 11, 2 );

	// https://developer.wordpress.org/reference/hooks/render_block_this-name/
	add_filter( 'render_block_core/post-terms', __NAMESPACE__ . '\\render_post_terms_block', 10, 3 );

	// God damn!!!!
	//
	// https://core.trac.wordpress.org/ticket/59551
	// [...] This means anybody following the example usage of that filter could end up
	// with their return not respected unless they change priority to higher than 10,
	// which is not documented!
	//
	// Prevent block rendering if no 'online-event' term exists.
#	add_filter( 'pre_render_block', __NAMESPACE__ . '\\pre_render_button_block', 11, 2 );


	/**
	 * Filters the term link.
	 *
	 * @param string   $termlink Term link URL.
	 * @param \WP_Term $term     Term object.
	 * @param string   $taxonomy Taxonomy slug.
	 * @return string Term link URL.
	 */
	add_filter('term_link',function( string $termlink, \WP_Term $term, string $taxonomy ) : string {
		if ('_gatherpress_venue' !== $taxonomy ) {
			return $termlink;
		}
		
		$gatherpress_venue = Venue::get_instance()->get_venue_post_from_term_slug( $term->slug );

		// An Online-Event will have no Venue; prevent error on non-existent object.
		// Feels weird to use a *_comments_* function here, but it delivers clean results
		// in the form of "domain.tld/event/my-sample-event/feed/ical/".
		// $href = ( $gatherpress_venue ) ? get_post_comments_feed_link( $gatherpress_venue->ID, self::ICAL_SLUG ) : null;

		return get_permalink( $gatherpress_venue );
		// return $termlink;
	}, 10, 3 );


	/**
	 * Filters the feed link for a taxonomy other than 'category' or 'post_tag'.
	 *
	 * @param string $link     The taxonomy feed link.
	 * @param string $feed     Feed type. Possible values include 'rss2', 'atom'.
	 * @param string $taxonomy The taxonomy name.
	 * @return string The taxonomy feed link.
	 */
	// add_filter('taxonomy_feed_link', function( string $link, string $feed, string $taxonomy ) : string {
	// 	if ('_gatherpress_venue' !== $taxonomy ) {
	// 		return $link;
	// 	}
		
	// 	$gatherpress_venue = Venue::get_instance()->get_venue_post_from_term_slug( $term->slug );

	// 	// An Online-Event will have no Venue; prevent error on non-existent object.
	// 	// Feels weird to use a *_comments_* function here, but it delivers clean results
	// 	// in the form of "domain.tld/event/my-sample-event/feed/ical/".
	// 	$link = ( $gatherpress_venue ) ? get_post_comments_feed_link( $gatherpress_venue->ID, $feed ) : null;

	// 	return $link;
	// }, 10, 3 );


	/**
	 * ATTENTION
	 * 
	 * This includes BREAKING CHANGES, because permalinks may change and must be reset.
	 */
	\add_filter(
		'register_' . '_gatherpress_venue' . '_taxonomy_args',
		function ( $args ) {

			/**
			 * Event-Archives per Venue, like archives for categories or tags.
			 * 
			 * Disable this option to:
			 * - avoid duplicated content issues,
			 * - keep your sitemaps clean,
			 * - avoid having a venue-tag-cloud (block),
			 * - and to keep the block-inserter free from unnecessary clutter.
			 *
			 * Depending on the used theme AND the Use-case, enabling archives maybe from interest:
			 *
			 * 1. Meetup Group
			 *    Has only one physical venue, maybe online-events
			 *    => Does not need Event-Archives per Venue.
			 *
			 * 2. Patricias Choir
			 *    Has multiple venues
			 *    => Could benefit from Event-Archives per Venue.
			 *
			 * 3. A theater (portal) website
			 *    Has multiple venues, maybe hybrid & maybe online-events
			 *    => Absolutely needs Event-Archives per Venue.
			 */
			/**
			 * QUESTION: Wasn't there a filter to add or remove settings?
			 */
			// $settings            = Settings::get_instance();
			// $with_venue_archives = $settings->get_value( 'general', 'general', 'with_venue_archives' ),
			$with_venue_archives = true;
			// $with_venue_archives = false;

			// $args['rewrite']            = false; // Results in https://gatherpress.test/?_gatherpress_venue=_new-york
			// $args['publicly_queryable'] = false; // Results in: nothing rendered in frontend & block says: "Term items not found".
			// $args['publicly_queryable'] = \is_admin(); // Results in: nothing rendered in frontend & block says: "Term items not found".

			// $args['public']             = $with_venue_archives;
			// $args['publicly_queryable'] = $with_venue_archives ?? true;

			$args['publicly_queryable'] = $with_venue_archives;
			// $_args_rewrite              = ( isset( $args['rewrite'] ) ) ? $args['rewrite'] : [];
			// $args['rewrite']            = get_rewrite_argument( $with_venue_archives, $_args_rewrite );
			// $args['rewrite']            = 'venue';

			return $args;
		}
	);
}
bootstrap();


/**
 * Get backend-only editor assets.
 *
 * @return string[]
 */
function get_editor_assets(): array {
	return [
	// 'feed-buttons',
	];
}


/**
 * 
 *
 * @return void
 */
function register_assets(): void {
	\array_map(
		__NAMESPACE__ . '\\register_asset',
		\array_merge(
			get_editor_assets(),
			[
				'variations',
			]
		)
	);
}

/**
 * Enqueue all scripts.
 *
 * @return void
 */
function enqueue_assets(): void {
	\array_map(
		__NAMESPACE__ . '\\enqueue_asset',
		// get_editor_assets()
		[
			'variations',
		]
	);
}

/**
 * Enqueue a script.
 *
 * @param  string $asset Slug of the block to load the frontend scripts for.
 *
 * @return void
 */
function enqueue_asset( string $asset ): void {
	wp_enqueue_script( "gatherpress-feed-buttons--$asset" );
	// wp_enqueue_style( "gatherpress-feed-buttons--$asset" );
}


/**
 * Register a new script and sets translated strings for the script.
 *
 * @throws \Error If build-files doesn't exist errors out in local environments and writes to error_log otherwise.
 *
 * @param  string $asset Slug of the block to register scripts and translations for.
 *
 * @return void
 */
function register_asset( string $asset ): void {

	$dir = __DIR__;

	$script_asset_path = "$dir/build/$asset/$asset.asset.php";

	
	if ( ! \file_exists( $script_asset_path ) ) {
		$error_message = "You need to run `npm start` or `npm run build` for the '$asset' block-asset first.";
		if ( \in_array( wp_get_environment_type(), [ 'local', 'development' ], true ) ) {
			throw new \Error( esc_html( $error_message ) );
		} else {
			// Should write to the \error_log( $error_message ); if possible.
			return;
		}
	}

	$index_js     = "build/$asset/$asset.js";
	$script_asset = require $script_asset_path; // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingVariable
	\wp_register_script(
		"gatherpress-feed-buttons--$asset",
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	// $index_css = "build/$asset/$asset.css";
	// \wp_register_style(
	// "gatherpress-feed-buttons--$asset",
	// plugins_url( $index_css, __FILE__ ),
	// [ 'wp-block-post-date','global-styles' ],
	// time(),
	// 'screen'
	// );
	wp_set_script_translations(
		"gatherpress-feed-buttons--$asset",
		'gatherpress',
		"$dir/languages"
	);
}

function append_feed( string $termlink, \WP_Term $term, string $taxonomy ) : string {

	global $gatherpress_TEMP_feed_type;

	$feed_type = ( 'rss' === $gatherpress_TEMP_feed_type ) ? '' : $gatherpress_TEMP_feed_type;

	// if ('_gatherpress_venue' === $taxonomy ) {
		
	// 	$gatherpress_venue = Venue::get_instance()->get_venue_post_from_term_slug( $term->slug );
		
	// 	// An Online-Event will have no Venue; prevent error on non-existent object.
	// 	// Feels weird to use a *_comments_* function here, but it delivers clean results
	// 	// in the form of "domain.tld/event/my-sample-event/feed/ical/".
	// 	return ( $gatherpress_venue ) ? get_post_comments_feed_link( $gatherpress_venue->ID, $feed_type ) : '';
	// }


	// Avoid regression
	remove_filter( 'term_link', __NAMESPACE__ . '\\append_feed', 10 );

	return get_term_feed_link( $term->term_id, $term->taxonomy, $feed_type );
	// return $termlink;
}

function pre_render_post_terms_block( $pre_render, $block ) {
	// if ( ! isset( $block['attrs']['className'] ) || false === \strpos( $block['attrs']['className'], 'gatherpress-feed-buttons' ) ) {
	if ( ! isset( $block['attrs']['feed'] ) ) {
		return $pre_render;
	}
	// error_log(var_export([
	// 	// $pre_render,
	// 	$block,
	// ],true));

	global $gatherpress_TEMP_feed_type;
	$gatherpress_TEMP_feed_type = $block['attrs']['feed'];
	/**
	 * Filters the term link.
	 *
	 * @param string   $termlink Term link URL.
	 * @param \WP_Term $term     Term object.
	 * @param string   $taxonomy Taxonomy slug.
	 * @return string Term link URL.
	 */
	add_filter( 'term_link', __NAMESPACE__ . '\\append_feed', 10, 3 );

	return $pre_render;
}

/**
 * Filter the render_block to add the needed directives to the inner cover blocks.
 * 
 * @see https://developer.wordpress.org/reference/hooks/render_block_this-name/
 *
 * @param string $block_content The content being rendered by the block.
 */
function render_post_terms_block( $block_content, $block, $instance ) {
	// if ( ! isset( $block['attrs']['className'] ) || false === \strpos( $block['attrs']['className'], 'gatherpress-feed-buttons' ) ) {
	if ( ! isset( $block['attrs']['feed'] ) ) {
		return $block_content;
	}

	global $gatherpress_TEMP_feed_type;
	unset( $gatherpress_TEMP_feed_type );

	remove_filter( 'term_link', __NAMESPACE__ . '\\append_feed', 10 );
	// error_log(var_export([
	// 	$block_content,
	// 	$block,
	// ],true));

	return $block_content;
}


/**
 * Prevent block rendering if no 'online-event' term exists.
 * 
 * Allows render_block() to be short-circuited, by returning a non-null value.
 */
function pre_render_button_block( $pre_render, $parsed_block ) {
	if ( isset( $parsed_block['attrs']['className'] ) && false !== \strpos( $parsed_block['attrs']['className'], 'gatherpress-feed-buttons-button' ) ) {

		// Will short-circuit if no 'online-event' term exists.
		if ( ! \has_term( 'online-event', '_gatherpress_venue', get_post()->ID ) ) {
			
			return false; // And do not render the block at all.

			// @TODO
			// Can still be a real venue.
			// Maybe show the website of the venue here ???
			// return '';
		}
		// DEMO & DEBUG ONLY !!!
		$on_off = ( 1 === rand( 1, 2 ) ) ? '__return_true' : '__return_false';
		\add_filter( 'gatherpress_force_online_event_link', $on_off );

		// Enable modifications to the block.
		add_filter( 'render_block_core/button', __NAMESPACE__ . '\\render_button_block', 10, 3 );
	}

	return $pre_render;
}


/**
 * Filter the render_block to ...
 * 
 * At this point we already know, that the event has the 'online-event' term.
 * 
 * @see https://developer.wordpress.org/reference/hooks/render_block_this-name/
 *
 * @param string $block_content The content being rendered by the block.
 */
function render_button_block( $block_content, $block, $instance ) {
	if ( ! isset( $block['attrs']['className'] ) || false === \strpos( $block['attrs']['className'], 'gatherpress-feed-buttons-button' ) ) {
		return $block_content;
	}
	// Change behaviour ...
	// ... or remove rendering.
	// return '';
	if ( empty( get_block_binding_values( [ 'key' => 'url' ], $instance ) ) ) {
		$button = new \WP_HTML_Tag_Processor( $block_content );
		if ( $button->next_tag( 'a' ) ) {
			// Inform the user with a spinning cursor and a waiting message.
			$button->set_attribute( 'style', 'cursor:wait;' . $button->get_attribute( 'style' ) );
			$button->set_attribute( 'title', __( 'Link is visible to attendees only.', 'gatherpress' ) . '(CHANGES BY RANDOM FOR THE DEMO)' );
			// Allow for styling with CSS.
			$button->add_class( 'gatherpress-feed-buttons-button__disabled' );
			// Prevent click & focus,
			// by removing the href, which works better than 'disabled'.
			$button->remove_attribute( 'href' );
			// Return modified HTML.
			$block_content = $button->get_updated_html();
		}   
	}
	// // // DEMO & DEBUG ONLY !!!
	\remove_all_filters( 'gatherpress_force_online_event_link' );

	return $block_content;
}

