<?php

function nav_features() {
    // Nav menus as described in the footer and header
    register_nav_menu('header_menu_location', 'Header Menu Location');
    register_nav_menu('footer_menu_location', 'Footer Menu Location');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    // Allow pages to have excerpts
    add_post_type_support( 'page', 'excerpt' );
}
add_action('after_setup_theme', 'nav_features');