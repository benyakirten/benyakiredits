<?php get_header();
// Archive of all short stories
while (have_posts()):
    the_post();

    // For the link box - short story always points at book it's related to and any other links to read it from
    $related_book = get_field('related_book');
    $relationship_to_book = get_field('relationship_to_book');

    $alternate_links = explode(', ', get_field('alternate_links'));
    $alternate_links_names = explode(', ', get_field('alternate_links_names'));
    $alternate_links_length = range(0, count($alternate_links) - 1);
?>
    <section class="generic-container">
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
                        Alternate Links
                    </span>
                    <ul class="linkbox__child-box__list">
                        <?php
                            foreach($alternate_links_length as $index):
                        ?>
                            <li class="linkbox__child-box__list__child">
                                <a href="<?php $alternate_links[$index]; ?>">
                                    <?php echo $alternate_links_names[$index]
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
            <a href="<?php the_permalink(); ?>" class="title-link">
                <span class="squeeze-together"><?php the_title(); ?></span>
                <div class="generic-container__subtitle">
                    <?php echo 'Published on ' . get_field('published_on'); ?>
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