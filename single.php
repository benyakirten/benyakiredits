<?php get_header();
// Posts are inherently hierarchical within categories and so display that
// with child boxes and parent boxes, like posts
// but instead of children posts use categorical children/parents
// Parent catgory | Child category in parent-box, list of all child categories in the child box
$current_cat = get_the_category()[0];
$parent = $current_cat->parent;
while (have_posts()) :
    the_post(); ?>
    <main class="generic-container">
        <?php if ($current_cat && $parent): ?>
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
                        <?php echo get_cat_name($parent) ?>
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
        <h1 class="generic-container__title heading-title">
            <?php the_title(); ?>
        </h1>
        <div class="generic-container__content">
            <?php the_content(); ?>
        </div>
    </main>
<?php
endwhile;
get_footer();
?>