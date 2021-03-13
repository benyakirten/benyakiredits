<?php
// CUSTOM TYPES - project, book, short story

function custom_blog_types() {
    // PROJECT custom type: for portfolio
    register_post_type('project', array(
        'public' => true,
        'rewrite' => array('slug' => 'projects'),
        'labels' => array(
            'name' => 'Projects',
            'singular_name' => 'Project',
            'add_new_item' => 'Add New Project',
            'edit_item' => 'Edit Project',
            'all_items' => 'All Projects',
        ),
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail'
        ),
        'description' => 'A programming project to display in my portfolio',
        'publicly_queryable' => true,
        'show_in_rest' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-feedback'
    ));

    // SHORT STORY custom type: for author/writing
    register_post_type('shortstory', array(
        'public' => true,
        'labels' => array(
            'name' => 'Short stories',
            'singular_name' => 'Short story',
            'add_new_item' => 'Add New Short Story',
            'edit_item' => 'Edit Short Story',
            'all_items' => 'All Short Stories',
        ),
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail'
        ),
        'description' => 'A short story, to accompany a book or not',
        'publicly_queryable' => true,
        'show_in_rest' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-editor-spellcheck'
    ));

    // BOOK custom type: for author/writing
    register_post_type('book', array(
        'public' => true,
        'rewrite' => array('slug' => 'books'),
        'labels' => array(
            'name' => 'Books',
            'singular_name' => 'Book',
            'add_new_item' => 'Add New Book',
            'edit_item' => 'Edit Book',
            'all_items' => 'All Books',
        ),
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail'
        ),
        'description' => 'A book, upcoming or already published',
        'publicly_queryable' => true,
        'show_in_rest' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-edit-large'
    ));
}
add_action('init', 'custom_blog_types');