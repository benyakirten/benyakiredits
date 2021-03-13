<?php get_header();
// For the /portfolio URL
// Query all related projects - put them in grid
// Each will be a card that flips over
// Front: used technologies/name
// Back: Description/repo link/main link
while (have_posts()) :
    the_post(); ?>
    <main class="generic-container">
        <h2 class="generic-container__title heading-title">
            <?php the_title(); ?>
        </h2>
        <div class="generic-container__content">
            <?php the_content(); ?>
        </div>
        <section class="portfolio generic-container__grid">
            <?php
                $projects = new WP_Query(array(
                    'posts_per_page' => -1,
                    'post_type' => 'project',
                    'meta_key' => 'latest_update',
                    'orderby' => 'meta_value_num',
                    'order' => 'ASC'
                ));
                // For each project: create a card
                while ($projects->have_posts()):
                    $projects->the_post();
                    get_template_part('template-parts/content', 'project');
                endwhile;
                wp_reset_postdata();
            ?>
        </section>
    </main>
<?php
endwhile;
get_footer();
?>