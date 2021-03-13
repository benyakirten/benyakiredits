<?php get_header();
    while (have_posts()) :
        the_post();
        // Our blog articles are category based so if they're in a category
        // the linkbox will allow users to navigate between categories easily
        $current_cat = get_the_category()[0];
        $parent = $current_cat->parent;
?>
    <section class="generic-container">
        <?php if ($current_cat): ?>
            <aside class="linkbox">
                <div class="linkbox__parent-box linkbox__parent-box--wide">
                    <a
                        class="linkbox__parent-box__link"
                        href="<?php echo get_category_link($parent); ?>">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <?php echo get_cat_name($parent) ?>
                    </a>
                    <span class="linkbox__parent-box__current"><?php echo $current_cat->name; ?></span>
                </div>
                <div class="linkbox__child-box linkbox__child-box--wide">
                    <a
                        class="linkbox__child-box__link"
                        href="<?php echo get_category_link($parent); ?>">
                        <?php echo get_cat_name($parent) ?> &#9660;
                    </a>
                    <ul class="linkbox__child-box__list">
                        <?php
                            wp_list_categories(array(
                                'child_of' => $parent,
                                'title_li' => null,
                                'current_category' => $current_cat->term_id
                            ));
                        ?>
                    </ul>
                </div>
            </aside>
        <?php endif; ?>
        <h2 class="generic-container__title heading-title">
            <a href="<?php the_permalink(); ?>" class="title-link">
                <span class="squeeze-together"><?php the_title(); ?></span>
                <div class="generic-container__subtitle">
                    <?php echo 'Published on ' . get_the_date(); ?>
                </div>
            </a>
        </h2>
        <div class="generic-container__content">
            <?php
                echo has_excerpt()
                    ? get_the_excerpt()
                    : wp_trim_words(get_the_content(), 50);
            ?>
        </div>
        <div class="generic-container__read-more">
            <a href="<?php the_permalink(); ?>">Read more &rarr;</a>
        </div>
    </section>
<?php endwhile; ?>
<aside class="generic-container archive-pagination">
    <?php echo paginate_links(); ?>
</aside>
<?php get_footer(); ?>