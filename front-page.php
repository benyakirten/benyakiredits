<?php get_header();
    // Simple and flashy front page
?>
    <main class="front-page" style="background-image: url(<?php echo get_theme_file_uri('/images/CO-snow.svg'); ?>);">
        <div class="front-page__banner">
            <h1 class="front-page__banner__headline heading-primary">Benyakir Horowitz</h1>
            <h2 class="front-page__banner__subtitle heading-secondary">Writer and Programmer</h2>
            <div class="front-page__banner__container">
                <a href="<?php echo esc_url(site_url('/author')) ?>">
                    <button
                        class="front-page__banner__container__button front-page__banner__container__button-left btn">
                        <i class="fa fa-book"></i>&nbsp;Books and Writing
                    </button>
                </a>
                <a href="<?php echo esc_url(site_url('/portfolio')) ?>">
                    <button
                        class="front-page__banner__container__button front-page__banner__container__button-right btn btn--inverse">
                        <i class="fa fa-mouse-pointer"></i>&nbsp;Web and Programming
                    </button>
                </a>
            </div>
        </div>
    </main>
<?php get_footer(); ?>