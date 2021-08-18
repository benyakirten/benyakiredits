<?php

# I adapted the code from the URL:
# https://anchor.host/wordpress-routing-hacks-for-single-page-applications/
# Unfortunately it doesn't seem to work - however, I tried.
add_filter('template_include', 'setup_custom_routing');

// The showcase page will handle any request
// that goes to /showcase or any of its subpaths
function setup_custom_routing($original_template)
{
    global $wp;
    $request = explode('/', $wp->request);
    echo(strpos($wp->request, 'showcase') >= 1);
    if (is_page('showcase') || current($request) == 'showcase') {
        return get_theme_file_path('/page-showcase.php');
    }
    return $original_template;
}

// Disable 404 for any subpath so WP doesn't overwrite it with a 404 page
add_filter('redirect_canonical', 'disable_404_redirection_for_react', 10, 2);
function disable_404_redirection_for_react($redirect_url, $do_redirect)
{
    global $wp;
    if (strpos($wp->request, "showcase/") != false) {
        wp_enqueue_script('showcase', get_theme_file_uri('js/modules/showcase/dist/bundle.js'), NULL, '1.0', true);
        wp_enqueue_style('showcase-styles', get_theme_file_uri('js/modules/showcase/dist/index.css'));
        return get_theme_file_path('/page-showcase.php');
    }
    return $redirect_url;
}
