<?php
    // PARTIAL TEMPLATE of a single book card for page-author.php
    // CF components/_card.scss and page/_author.scss for the SASS
    // Fallback cover in case there is no cover
    $image = get_field('cover');
    if ( empty ( $image )) {
        $image = get_theme_file_uri("images/Fallback-cover-no-text.svg");
    }
    // CF single-book.php for explanation of these fields
    $link_urls = explode(', ', get_field('purchase_links'));
    $link_names = explode(', ', get_field('purchase_links_names'));
    $links_length = range(0, count($link_urls) - 1);
    
    $today = date('mdY');
    $published_on = get_field('published_on');
?>
<div class="card author__book__card">
    <div class="card__side card__side--front author__book__card author__book__card--front">
        <div
            class="author__book__card__picture author__book__card__picture"
            style="background-image:
                linear-gradient(
                    to right bottom,
                    #ff9a3c,
                    #ffc93c),
                url(<?php echo $image ?>);"
            >
        </div>
        <?php if (!get_field('cover')): ?>
            <span class="author__book__card__title heading-card"><?php echo get_the_title(); ?></span> 
        <?php endif; ?>
        <span class="author__book__card__released heading-card">
            <?php
                echo $published_on > $today
                    ? "Published " . $published_on
                    : "Coming out " . $published_on;
            ?>
        </span>
    </div>
    <div class="card__side card__side--back author__book__card author__book__card--back">
        <div class="author__book__card__summary">
            <h3 class="author__book__card__summary__text">
                <?php
                    echo has_excerpt()
                        ? get_the_excerpt()
                        : wp_trim_words(get_the_content(), 18);
                ?>
            </h3>
        </div>
        <div class="author__book__card__more-details">
            <a href="<?php the_permalink(); ?>">
                <button class="btn btn--dark author__book__card__btn">
                    Find out more
                </button>
            </a>
        </div>
        <div class="author__book__card__purchase-links">
            <?php foreach($links_length as $index): ?>
                <a href="<?php echo $link_urls[$index] ?>">
                    <button class="btn btn--dark author__book__card__btn">
                        <?php
                            echo $link_names[$index]
                                ? 'On ' . $link_names[$index]
                                : 'At ' . $link_urls[$index]
                        ?>
                    </button>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</div>