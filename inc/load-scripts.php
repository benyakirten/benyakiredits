<?php

 function blog_scripts() {
    // Main script

    // NOTE: It is prone to acting bizarrely if the description for the project is 1 line or less
    // Because it fetches data dynamically from the github api and the spinner used is of a different
    // height than the text

    // So therefore the script is disabled if the page is a project
    // since the footer will be positioned relatively by default because either it is 1 line or less
    // and functions incorrectly, or it is longer than 1 line and not needed
    wp_enqueue_script('main-blog-js', get_theme_file_uri('js/scripts.js'), NULL, '1.0', true);
    wp_localize_script('main-blog-js', 'page_data', array(
        'is_archive' => is_archive() ? true : false
    ));

    // Search script
    wp_enqueue_script('search-js', get_theme_file_uri('js/modules/search.js'), NULL, '1.0', true);
    wp_localize_script('search-js', 'item_info', array(
        'site_url' => get_site_url(),
        'icon_uri' => get_theme_file_uri('images/tech')
    ));

    // Scripts for individual pages
    if ( is_singular('project') ) {
        // Script for fetching the date of the latest update on a github repo
        wp_enqueue_script('github-fetch', get_theme_file_uri('js/modules/fetchLatestUpdate.js'), NULL, '1.0', true);
        wp_localize_script('github-fetch', 'project_info', array(
            'repo_link' => get_field('repo_link')
        ));
    }

    if ( is_archive('project') ) {
        // Script for fetching the update date for multiple projects
        wp_enqueue_script('mass-fetch', get_theme_file_uri('js/modules/massFetchUpdated.js'), NULL, '1.0', true);
    }

    if ( is_singular('book') ) {
        // Script for creating a popup - could be done in CSS, but I preferred this way
        wp_enqueue_script('popup', get_theme_file_uri('js/modules/popup.js'), NULL, '1.0', true);
    }
}
add_action('wp_enqueue_scripts', 'blog_scripts');