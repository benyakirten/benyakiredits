<?php get_header();
// For the /author URL
// Uses two custom queries: one for the book type and one for short stories
// Each of the two is put in a section and all results put on cards
while (have_posts()) :
    the_post(); ?>
    <main class="generic-container">
        <h2 class="generic-container__title heading-title">
            <?php the_title(); ?>
        </h2>
        <div class="generic-container__content">
            <?php the_content(); ?>
        </div>
        <div class="generic-container__section">
            <a href="<?php echo esc_url(site_url('/books')); ?>">
                <h2 class="generic-container__section__header heading-section title-link">
                    Books
                </h2>
            </a>
        </div>
        <section class="author generic-container__grid">
            <?php
                $books = new WP_Query(array(
                    'posts_per_page' => -1,
                    'post_type' => 'book',
                    'meta_key' => 'published_on',
                    'orderby' => 'meta_value_num',
                    'order' => 'ASC'
                ));
                // For each project: create a card
                while ($books->have_posts()):
                    $books->the_post();
                    get_template_part('template-parts/content', 'book');
                endwhile;
                wp_reset_postdata();
            ?>
        </section>
        <div class="generic-container__section">
            <a href="<?php echo esc_url(site_url('shortstory')); ?>" class="title-link">
                <h2 class="generic-container__section__header heading-section">
                    Short Stories
                </h2>
            </a>
        </div>
        <section class="author generic-container__grid">
            <?php
                $stories = new WP_Query(array(
                    'posts_per_page' => -1,
                    'post_type' => 'shortstory',
                    'meta_key' => 'published_on',
                    'orderby' => 'meta_value_num',
                    'order' => 'ASC'
                ));
                while ($stories->have_posts()):
                    $stories->the_post();
                    get_template_part('template-parts/content', 'shortstory');
                endwhile;
                wp_reset_postdata();
            ?>
        </section>
    </main>
<?php
    endwhile;
    get_footer();
?>