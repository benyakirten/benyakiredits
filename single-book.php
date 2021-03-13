<?php get_header();
// We want to get the date it was published on and if that was in the past or not
$today = date('mdY');
$published_on = get_field('published_on');

// Purchase links for where the book can be acquired
$link_urls = explode(', ', get_field('purchase_links'));
$link_names = explode(', ', get_field('purchase_links_names'));
$links_length = range(0, count($link_urls) - 1);

$related_stories = get_field('related_stories');
$related_project = get_field('related_project');

// For the popup
$cover = get_field('cover');
$cover_links = explode(', ', get_field('cover_designer_links'));
$cover_links_names = explode(', ', get_field('cover_designer_links_names'));
$cover_links_length = range(0, count($cover_links) - 1);

while (have_posts()) :
    the_post(); ?>
    <main class="generic-container book">
        <?php
            // The link box will have the realted projects in the parent-box
            // And related stories in the child-box
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
                            Related Short Stories &#9660;
                        </span>
                        <ul class="linkbox__child-box__list">
                            <?php
                                foreach($related_stories as $story):
                            ?>
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
        <div class="book__header">
            <h2 class="generic-container__title heading-title squeeze-together">
                <?php the_title(); ?>
            </h2>
        </div>
        <section class="book__purchase">
            <?php
                echo $published_on > $today
                    ? 'Published ' . $published_on . '. <div>Available for purchase on'
                    : 'Coming out ' . $published_on . '. <div>Available for preorder on';
            ?>
                <?php foreach($links_length as $index): ?>
                    <span class="book__link-span">
                        <a
                            class="book__purchase__link"
                            href="<?php echo $link_urls[$index]; ?>">
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
                        </a>
                    </span>
                <?php endforeach; ?>
            </div>
        </section>
        <section class="generic-container__content book__content">
            <div class="text-image book__content__image-text">
                <figure
                    class="text-image__figure text-image__figure--square book__content__figure"
                    id="popup-opener"
                    style="<?php if ($cover) echo 'cursor: pointer' ?>"
                >
                    <img
                        class="text-image__figure__img book__content__figure__cover"
                        src="
                            <?php
                                echo $cover
                                    ? $cover
                                    : get_theme_file_uri('images/Fallback-cover-no-text.svg');
                            ?>"
                        alt="Book cover"
                        aria-labelledby="portrait-caption"
                    />
                    <figcaption
                        class="text-image__figure__caption"
                        id="portrait-caption"
                    >
                        <?php
                            // A book should always have a cover, but thisis a fallback
                            // NOTE: The caption for the cover will be clickable or not if there is a cover
                            echo $cover
                                ? "Learn about the cover"
                                : the_title(); ?>
                    </figcaption>
                </figure>
            </div>
            <div class="book__content__text">
                <?php the_content(); ?>
            </div>
        </section>
        <?php if ($cover): ?>
            <section class="popup" id="popup">
                <div class="popup__content">
                    <h4 class="popup__heading book__popup__heading book__text">
                        Cover designed by <?php echo get_field('cover_designer') . ". " . get_field('cover_designer_bio'); ?>
                        <div class="book__popup__link-group">
                            <?php foreach($cover_links_length as $index): ?>
                                <a class="popup__link book__popup__link" href="<?php echo $cover_links[$index]; ?>">
                                    <span class="book__link-span">
                                        <?php
                                            // Cover links can either be their direct URL
                                            // Or a nice looking name (i.e. Behance, Instagram vs instagram/...)
                                            echo $cover_links_names[$index]
                                                ? $cover_links_names[$index]
                                                : $cover_links[$index];
                                        ?>
                                    </span>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </h4>
                    <a class="popup__close" id="popup-closer">&times;</a>
                </div>
            </section>
        <?php endif; ?>
    </main>
<?php
    endwhile;
    get_footer();
?>