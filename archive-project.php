<?php get_header();
while (have_posts()) :
    the_post();
    // We will unnecessarily check that this exists later on,
    // so it's useful to avoid code duplication
    $repo_link = get_field('repo_link');
?>
    <section class="generic-container">
        <h1 class="generic-container__title heading-title">
            <a href="<?php the_permalink(); ?>" class="title-link">
                <span class="squeeze-together"><?php the_title(); ?></span>
            </a>
        </h1>
        <article class="project__technologies">
            <div class="project__technologies__lead">
                <h4 class="project__technologies__lead__title">
                    <span class="project__technologies__lead__released">
                        First released on <?php echo get_field('first_released'); ?>
                    </span>
                    &horbar;
                    <span class="project__technologies__lead__released">
                        Last updated<?php if ($repo_link) echo '*' ?> on
                        <?php if ($repo_link): ?>
                            <div style="display: inline-block;" data-repo="<?php echo $repo_link ?>" class="spinner" id="last-updated"></div>
                        <?php else: ?>
                            <div style="display: inline-block;" id="last-updated"><?php echo get_field('latest_update'); ?></div>
                        <?php endif; ?>
                    </span>
                </h4>
                <h4 class="project__technologies__lead__title">
                    Technologies used:
                </h4>
            </div>
            <div class="project__technologies__tech">
                <?php
                    // Container for the grid of icons
                    $technologies_split = explode(", ", get_field('technologies'));
                    foreach($technologies_split as $tech):
                        $link_icon = get_theme_file_uri('/images/tech/' . $tech . '.svg');
                        $full_tech = get_full_technology($tech);
                ?>
                    <div class="project__technologies__tech__group">
                        <img
                            class="project__technologies__tech__group__icon"
                            alt="<?php echo $tech ?>" src="<? echo $link_icon ?>">
                        <h5 class="project__technologies__tech__group__caption"><?php echo $full_tech ?></h5>
                    </div>
                <?php endforeach; ?>
            </div>
        </article>
        <div class="generic-container__content">
            <?php
                echo has_excerpt()
                    ? get_the_excerpt()
                    : wp_trim_words(get_the_content(), 30);
            ?>
            <?php if ($repo_link): ?>
                <aside class="project__asterisky">
                    *If fetch request to Github is unsuccessful, please consult the repository for latest information
                </aside>
            <?php endif; ?>
            <div class="generic-container__read-more">
                <a href="<?php the_permalink(); ?>">More details &rarr;</a>
            </div>
        </div>
    </section>
<?php endwhile; ?>
<aside class="generic-container archive-pagination">
    <?php echo paginate_links(); ?>
</aside>
<?php get_footer(); ?>