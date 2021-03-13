<?php get_header();
// All pages should be caught, but this is a fallback
    while(have_posts()):
        the_post(); ?>
    <main class="generic-container">
        <h2 class="generic-container__title heading-title">
            <?php the_title(); ?>
        </h2>
        <div class="generic-container__content">
            <?php the_content(); ?>
        </div>
    </main>
<?php
    endwhile;
    get_footer();
?>