<?php get_header();
// For any other page
// Has two linkboxes:
// Parent-box is left-top and gives the parent category with a link if it's a child
// Child-box is right-top and elaborates the heirarchy if it's either parent or child
while (have_posts()) :
    the_post(); ?>
    <main class="generic-container">
        <?php
            $parent_post_id = wp_get_post_parent_id(get_the_ID());
            $child_array = get_pages(array(
                'child_of' => get_the_ID()
            ));
            if ($parent_post_id || $child_array):
        ?>
            <aside class="linkbox">
                <?php
                    if ($parent_post_id):
                ?>
                    <div class="linkbox__parent-box">
                        <a
                            class="linkbox__parent-box__link"
                            href="<?php echo get_permalink($parent_post_id) ?>">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            Back to <?php echo get_the_title($parent_post_id)?>
                        </a>
                        <span class="linkbox__parent-box__current"><?php the_title(); ?></span>
                    </div>
                <?php endif; ?>
                <div class="linkbox__child-box">
                    <a
                        class="linkbox__child-box__link"
                        href="<?php echo get_permalink($parent_post_id); ?>">
                        <?php echo get_the_title($parent_post_id); ?>
                    </a>
                    <ul class="linkbox__child-box__list">
                        <?php
                            wp_list_pages(array(
                                'title_li' => null,
                                'child_of' => $parent_post_id ? $parent_post_id : get_the_ID(),
                                'sort_column' => 'menu_order'
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