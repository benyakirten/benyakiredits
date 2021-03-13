<!DOCTYPE html>
<html>
    <head>
        <meta charset="<?php echo bloginfo('charset') ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <navigation class="navigation">
            <div class="navigation__links">
                <a href="<?php echo esc_url(site_url()); ?>">
                    <img class="navigation__logo" src="<?php echo get_theme_file_uri('/images/Logo.svg'); ?>" alt="Benyakir Edits Logo">
                </a>
            </div>
            <?php
                // Theme only allows one submenu for top bar
                wp_nav_menu(array(
                    'theme_location' => 'header_menu_location',
                    'depth' => 2
                ));
            ?>
            <div class="navigation__searchbar">
                <div
                    class="navigation__searchbar__form"
                >
                    <div class="navigation__searchbar__form__container">
                        <input
                            type="search"
                            id="search-bar"
                            name="s"
                            placeholder="Search..."
                            class="navigation__searchbar__form__search"
                        >
                        <div class="search-results" id="search-results">
                            <div class="search-results__spinner spinner spinner--inverted"></div>
                        </div>
                    </div>
                    <button type="button" id="searchbutton" class="navigation__searchbar__form__searchbutton">
                        <i class="fa fa-search navigation__searchbar__form__searchbutton__icon"></i>
                    </button>
                </div>
            </div>
        </navigation>