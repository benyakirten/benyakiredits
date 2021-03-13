<?php
    // PARTIAL TEMPLATE of a single short story card for author.php
    // CF components/_card.scss and page/_author.scss for the SASS
    $related_book = get_field('related_book');
    $image = get_theme_file_uri("images/Fallback-cover-no-text.svg");

    $today = date('mdY');
    $published_on = get_field('published_on');
?>
<div class="card author__shortstory__card">
    <div class="card__side card__side--front author__shortstory__card author__shortstory__card--front">
        <div class="author__shortstory__card__summary">
            <h2 class="author__shortstory__card__summary__title heading-card">
                <?php echo get_the_title();?>
                <div class="author__shortstory__card__summary__related-book">
                    <?php
                        echo $related_book
                            ? get_field('relationship_to_book') . ' to ' . $related_book->post_title
                            : 'No relation to any published book';
                    ?>
                </div>
            </h2>
            <h3 class="author__shortstory__card__summary__text">
                <?php
                    echo has_excerpt()
                        ? get_the_excerpt()
                        : wp_trim_words(get_the_content(), 18);
                ?>
            </h3>
        </div>
        <span class="author__shortstory__card__released heading-card">
            <?php
                echo $published_on > $today
                    ? "Published " . $published_on
                    : "Coming out " . $published_on;
            ?>
        </span>
        <div
            class="author__shortstory__card__picture author__shortstory__card__picture"
            style="background-image:
                linear-gradient(
                    to right bottom,
                    #ff9a3c,
                    #ffc93c),
                url(<?php echo $image ?>);"
            >&nbsp;
        </div>
    </div>
    <div class="card__side card__side--back author__shortstory__card author__shortstory__card--back">
        <div class="author__shortstory__card__more-details">
            <a href="<?php the_permalink(); ?>">
                <button class="btn btn--other author__shortstory__card__btn">
                    <?php echo get_the_title(); ?>
                </button>
            </a>
            <?php
                if ($related_book):
            ?>
                <a href="<?php the_permalink($related_book->ID); ?>">
                    <button class="btn btn--other author__shortstory__card__btn">
                        <?php echo $related_book->post_title ?>
                    </button>
                </a>
            <?php
                endif;
            ?>
        </div>
    </div>
</div>