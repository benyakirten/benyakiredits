<?php
// Custom endpoint for the search functionality
// This reduces logic in JS and puts the load of filtering the result
// on WP and not the browser
add_action('rest_api_init', 'blog_register_search');

function blog_register_search() {
    // The WP_REST_SERVER is better than declaring the method as get
    // Because the method may depend on the host
    register_rest_route('benyakirblog/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'sort_blog_search_results'
    ));
    // The callback filters the data for the reasons exlained above
}


function sort_blog_search_results($data) {
    // We sanitize/escape the query before we use it
    $q = sanitize_text_field($data['q']);
    $query = new WP_Query(array(
        'post_type' => array(
            'book',
            'post',
            'project',
            'shortstory',
            'page'
        ),
        's' => $q
    ));

    // This variable will contain the five fields for the JSON response object
    // Each of these will contain associative arrays with the following data:
    // BOOKS:
    //  1. Title
    //  2. Permalink
    //  3. Cover
    // POST:
    //  1. Title
    //  2. Permalink
    //  3. Category
    // PROJECTS:
    //  1. Title
    //  2. Permalink
    //  3. Associated technologies
    //  4. Github link
    // SHORT STORIES:
    //  1. Title
    //  2. Permalink
    //  3. The book it's related to
    //  4. Its relation to said book or default 'Related'
    // OTHER:
    //  1. Title
    //  2. Permalink

    $results = array(
        'books' => array(),
        'posts' => array(),
        'projects' => array(),
        'shortstories' => array(),
        'other' => array()
    );

    // Instead of a map function,
    // we are using WP's convenient Loop to
    // cycle through the data
    while ($query->have_posts()) {
        $query->the_post();
        // We filter the post type according to the custom post types
        // blog posts, and an 'other' catchall in case it doesn't fit
        // into one of those other categories
        switch(get_post_type()) {
            case 'book':
                $cover = get_field('cover');
                if (!$cover) {
                    $cover = get_theme_file_uri('images/Fallback-cover-no-text.svg');
                }
                array_push($results['books'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'cover' => $cover
                ));
                break;
            case 'post':
                $cat = get_the_category()[0]->name;
                array_push($results['posts'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'category' => $cat ? $cat : NULL
                ));
                break;
            case 'project':
                $technologies = explode(", ", get_field('technologies'));
                array_push($results['projects'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'tech' => $technologies,
                    'repo_link' => get_field('repo_link')
                ));
                break;
            case 'shortstory':
                $related_book = get_field('related_book')->post_title;
                $relationship_to_book = get_field('relationship_to_book');
                array_push($results['shortstories'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink(),
                    'related_book' => $related_book ? $related_book : NULL,
                    'relationship_to_book' => $relationship_to_book ? $relationship_to_book : "Related"
                ));
                break;
            default:
                array_push($results['other'], array(
                    'title' => get_the_title(),
                    'permalink' => get_the_permalink()
                ));
        }
    }

    return $results;
}