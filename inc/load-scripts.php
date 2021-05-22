<?php

 function blog_scripts() {
    // Main script
    wp_enqueue_script('main-blog-js', get_theme_file_uri('js/scripts.js'), NULL, '1.0', true);

    // Search script
    wp_enqueue_script('search-js', get_theme_file_uri('js/modules/search.js'), NULL, '1.0', true);
    wp_localize_script('search-js', 'item_info', array(
        'site_url' => get_site_url(),
        'icon_uri' => get_theme_file_uri('images/tech')
    ));

    // Script for removing bottom pagination div on archives with no pages
    if ( is_archive() ) {
        wp_enqueue_script(
            'remove-archive-pagination',
            get_theme_file_uri('js/modules/deactivatePaginationOnArchivesWithNoPages.js'),
            NULL,
            '1.0',
            true
        );
    }

    // Script for fetching the date of the latest update on a github repo
    if ( is_singular('project') ) {
        wp_enqueue_script('github-fetch', get_theme_file_uri('js/modules/fetchLatestUpdate.js'), NULL, '1.0', true);
        wp_localize_script('github-fetch', 'project_info', array(
            'repo_link' => get_field('repo_link')
        ));
    }

    // Script for fetching the update date for multiple projects
    if ( is_archive('project') ) {
        wp_enqueue_script('mass-fetch', get_theme_file_uri('js/modules/massFetchUpdated.js'), NULL, '1.0', true);
    }

    // Script for creating a popup (note: it could be done in CSS, but I prefer JS-based popups)
    if ( is_singular('book') ) {
        wp_enqueue_script('popup', get_theme_file_uri('js/modules/popup.js'), NULL, '1.0', true);
    }
}
add_action('wp_enqueue_scripts', 'blog_scripts');