<?php get_header();

while (have_posts()) :
    the_post();
?>
    <article class="generic-container">
        <?php
            // We need the published on date and to know if it was in the past
            $published_on = get_field('published_on');
            $published_already = compare_formatted_date_strings(date('mdY'), $published_on);

            // To display an image of the book
            $cover = get_field('cover');
            $cover_designer = get_field('cover_designer');
            
            // Related stories and projects for the link box
            $related_stories = get_field('related_stories');
            $related_project = get_field('related_project');

            // This could be gotten rid of - but good ol' capitalism
            $link_urls = explode(', ', get_field('purchase_links'));
            $link_names = explode(', ', get_field('purchase_links_names'));
            $links_length = range(0, count($link_urls) - 1);
            
            // Check for elegibility for linkbox
            if ($related_stories || $related_project):
        ?>
            <aside class="linkbox">
                <?php if ($related_project): ?>
                    <div class="linkbox__parent-box">
                        <a
                            class="linkbox__parent-box__link book__related-project"
                            href="<?php the_permalink($related_project->ID) ?>">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            Accompanying project:
                            <?php echo $related_project->post_title; ?>
                        </a>
                    </div>
                <?php
                    endif;
                    if ($related_stories):
                ?>
                    <div class="linkbox__child-box">
                        <span class="linkbox__child-box__link">
                            Related Short Stories
                        </span>
                        <ul class="linkbox__child-box__list">
                            <?php foreach($related_stories as $story): ?>
                                <li class="linkbox__child-box__list__child">
                                    <a href="<?php the_permalink($story->ID); ?>">
                                        <?php echo $story->post_title; ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>   
                    </div>
                <?php endif; ?>
            </aside>
        <?php endif; ?>
        <h1 class="generic-container__title heading-title">
            <a href="<?php the_permalink(); ?>" class="title-link">
                <span class="squeeze-together"><?php the_title(); ?></span>
            </a>
            <div class="generic-container__subtitle">
                <?php
                    echo $published_already
                        ? "Published " . $published_on . ". Available for purchase on"
                        : "Coming out " . $published_on . ". Available for preorder on";

                    foreach($links_length as $index):
                ?>
                    <a
                        class="book__purchase__link"
                        href="<?php echo $link_urls[$index]; ?>">
                        <span class="book__link-span">
                            <?php
                                echo $link_names[$index]
                                    ? $link_names[$index]
                                    : $link_urls[$index];
                                
                                // Separate all the links by , as long as there are > 2 left
                                if ($index < (count($link_urls) - 2)) {
                                    echo ", ";
                                // If it's the second to last one, we switch to an add
                                } else if ($index == (count($link_urls) - 2)) {
                                    echo " and ";
                                }
                                // Then nothing if it's the last one
                            ?>
                        </span>
                    </a>
                <?php endforeach; ?>
            </div>
        </h1>
        <div class="generic-container__content">
            <div class="flex">
                <?php if ($cover): ?>
                    <figure class="figure">
                        <img class="figure__img" src="<?php echo $cover; ?>" />
                        <figcaption class="figure__caption">
                            <?php
                                if ($cover_designer) {
                                    echo 'Cover design by ' . $cover_designer;
                                } else {
                                    echo get_the_title();
                                }
                            ?>
                        </figcaption>
                    </figure>
                <?php endif; ?>
                <?php
                    echo has_excerpt()
                        ? get_the_excerpt()
                        : wp_trim_words(get_the_content(), 100);
                ?>
            </div>
            <div class="generic-container__read-more">
                <a href="<?php the_permalink(); ?>">Read more &rarr;</a>
            </div>
        </div>
    </article>
<?php endwhile; ?>
<?php if ($numpages > 0): ?>
    <aside class="generic-container archive-pagination">
        <?php echo paginate_links(); ?>
    </aside>
<?php endif; ?>
<?php get_footer(); ?>