<?php get_header();
// Short stories always link back to the main book in parent-box
$related_book = get_field('related_book');
$relationship_to_book = get_field('relationship_to_book');

$alternate_links = explode(', ', get_field('alternate_links'));
$alternate_links_names = explode(', ', get_field('alternate_links_names'));
$alternate_links_length = range(0, count($alternate_links) - 1);

while (have_posts()):
    the_post(); ?>
    <main class="generic-container short-story">
        <aside class="linkbox">
            <?php if ($related_book): ?>
                <div class="linkbox__parent-box">
                    <a
                        class="linkbox__parent-box__link"
                        href="<?php the_permalink($related_book->ID); ?>">
                        <i class="fa fa-book" aria-hidden="true"></i>
                        <?php echo $related_book->post_title; ?>
                    </a>
                    <span class="linkbox__parent-box__current"><?php the_title(); ?></span>
                </div>
            <?php
                endif;
                if (get_field('alternate_links')):
            ?>
                <div class="linkbox__child-box">
                    <span class="linkbox__child-box__link">
                        Alternate Links &#9660;
                    </span>
                    <ul class="linkbox__child-box__list">
                        <?php foreach($alternate_links_length as $index): ?>
                            <li class="linkbox__child-box__list__child">
                                <a href="<?php $alternate_links[$index]; ?>">
                                    <?php
                                        // Alternate nice name substituted if available
                                        echo $alternate_links_names[$index]
                                            ? $alternate_links_names[$index]
                                            : $alternate_links[$index];
                                    ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>   
                </div>
            <?php endif; ?>
        </aside>
        <h2 class="generic-container__title heading-title">
            <span class="squeeze-together"><?php the_title(); ?></span>
            <?php if ($related_book): ?>
                <div class="generic-container__subtitle">
                    <?php echo $relationship_to_book . ' to ' . $related_book->post_title; ?>
                </div>
            <?php endif; ?>
        </h2>
        <p class="generic-content__content">
            <?php the_content(); ?>
        </p>
    </main>
<?php
    endwhile;
    get_footer();
?>