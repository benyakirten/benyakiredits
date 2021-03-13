<?php

function blog_styles() {
    // SASS compiled styles
    wp_enqueue_style('main-blog-styles', get_theme_file_uri('/css/styles.css'));

    // Icons and google fonts
    // Note: Font Awesome is by far the biggest network traffic of the blog (70 kb)
    // But I am loathe to make my own icons when the library isavailable
    // Google fonts uses a lot of network traffic too, but the fonts are nice
    wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Poppins&family=Shippori+Mincho&display=swap');   
}
add_action('wp_enqueue_scripts', 'blog_styles');