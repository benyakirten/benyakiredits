<?php

 function blog_scripts() {
    // Align Footer Position
    wp_enqueue_script('align-footer-position', get_theme_file_uri('js/modules/default/alignFooterPosition.js'), NULL, '1.0', true);
    // Rather than manipulating the footer height from within the react, this way all the direct
    // dom manipulations are done from inside the WP scripts
    // But to do so, we need to remove the align footer class and any check for it on the showcase page
    // Then we just set the showcase page to have a min-height
    wp_localize_script('align-footer-position', 'page_info', array(
        'is_showcase' => is_page('showcase')
    ));

    // Search script
    wp_enqueue_script('search-js', get_theme_file_uri('js/modules/default/search.js'), NULL, '1.0', true);
    wp_localize_script('search-js', 'item_info', array(
        'site_url' => get_site_url(),
        'icon_uri' => get_theme_file_uri('images/tech')
    ));

    // Script for removing bottom pagination div on archives with no pages
    if ( is_archive() ) {
        wp_enqueue_script(
            'remove-archive-pagination',
            get_theme_file_uri('js/modules/default/deactivatePaginationOnArchivesWithNoPages.js'),
            NULL,
            '1.0',
            true
        );
    }

    // Script for fetching the date of the latest update on a github repo
    if ( is_singular('project') ) {
        wp_enqueue_script('github-fetch', get_theme_file_uri('js/modules/default/fetchLatestUpdate.js'), NULL, '1.0', true);
        wp_localize_script('github-fetch', 'project_info', array(
            'repo_link' => get_field('repo_link')
        ));
    }

        // Script for creating a popup (note: it could be done in CSS, but I prefer JS-based popups)
        if ( is_singular('book') ) {
            wp_enqueue_script('popup', get_theme_file_uri('js/modules/default/popup.js'), NULL, '1.0', true);
        }
    

    // Script for fetching the update date for multiple projects
    if ( is_archive('project') ) {
        wp_enqueue_script('mass-fetch', get_theme_file_uri('js/modules/default/massFetchUpdated.js'), NULL, '1.0', true);
    }
    
    if ( is_page('showcase') ) {
        wp_enqueue_script('showcase', get_theme_file_uri('js/modules/showcase/dist/bundle.js'), NULL, '1.0', true);
        // Though this is a CSS file, it is highly connected with the React files
        // This will error out if running in dev since the styles aren't in a separate CSS file
        // However, the styles are necessary for the production build
        wp_enqueue_style('showcase-styles', get_theme_file_uri('js/modules/showcase/dist/index.css'));;
    }

}
add_action('wp_enqueue_scripts', 'blog_scripts');