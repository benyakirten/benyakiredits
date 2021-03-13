<?php
    // PARTIAL TEMPLATE of a single project card for page-portfolio.php
    // CF single-project.php
    $technologies =  get_field('technologies');
    $technologies_split = explode(", ", $technologies);
?>
<div class="card portfolio__card">
    <div class="card__side card__side--front portfolio__card--front">
        <div class="portfolio__card__heading">
            <h4 class="portfolio__card__heading__primary">
                <?php the_title(); ?>
            </h4>
        </div>
        <div class="portfolio__card__details">
            <span class="portfolio__card__details__caption">Technologies Used:</span>
            <ul>
                <?php
                    foreach($technologies_split as $tech):
                        $link_icon = get_theme_file_uri('/images/tech/' . $tech . '.svg');
                        $full_tech = get_full_technology($tech);
                ?>
                    <li>
                        <img alt="<?php echo $tech; ?>" src="<?php echo $link_icon ?>">
                        <span class="portfolio__card__details__technologies"><?php echo $full_tech; ?></span>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
    <div class="card__side card__side--back portfolio__card--back">
        <div class="portfolio__card__heading">
            <h3 class="portfolio__card__heading__secondary">
                <?php
                    echo has_excerpt()
                        ? get_the_excerpt()
                        : wp_trim_words(get_the_content(), 11);
                ?>
            </h3>
        </div>
        <div class="portfolio__card__links">
            <a href="<?php echo get_field('repo_link'); ?>">
                <button class="btn btn--dark portfolio__card__btn portfolio__card__links__other-btn">
                    Github Repo
                </button>
            </a>
            <?php
                $main_link = get_field('main_link');
                if ($main_link):
            ?>
                <a href="<?php echo $main_link ?>">
                    <button class="btn btn--dark portfolio__card__btn portfolio__card__links__other-btn">
                        On <?php
                            echo get_field('hosted_on')
                                ? get_field('hosted_on')
                                : $main_link;
                            ?>
                    </button>
                </a>
            <?php endif; ?>
            <a href="<?php echo the_permalink(); ?>">
                <button class="btn btn--dark portfolio__card__btn">
                    View Project Details
                </button>
            </a>
        </div>
    </div>
</div>