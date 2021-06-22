<?php get_header();
// For a single project, we display a grid for all used technologies prior to the content

while (have_posts()) :
    the_post();
    $repo_link = get_field('repo_link');
?>
    <main class="generic-container">
        <h1 class="generic-container__title heading-title squeeze-together">
            <?php the_title(); ?>
        </h1>
        <div class="project">
            <section class="project__technologies">
                <div class="project__technologies__lead">
                    <h4 class="project__technologies__lead__title">
                        <span class="project__technologies__lead__released">
                            First released on <?php echo get_field('first_released'); ?>
                        </span>
                        &horbar;
                        <span class="project__technologies__lead__released">
                            Last updated<?php if ($repo_link) echo '*' ?> on
                            <?php if ($repo_link): ?>
                                <div style="display: inline-block;" class="spinner" id="last-updated"></div>
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
                        $technologies_split = explode(", ", get_field('technologies'));
                        // It would make more sense as a relational array, but then
                        // I would have to retrieve key-value pairs in the JS
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
            </section>
            <div class="generic-container__content">
                <?php the_content(); ?>
            </div>
            <?php if ($repo_link): ?>
                <aside class="project__asterisky">
                    *If fetch request to Github is unsuccessful, please consult the repository for latest information
                </aside>
            <?php endif; ?>
            <section class="project__links">
                <?php if ($repo_link): ?>
                    <a class="project__links__btn" href="<?php echo get_field('repo_link'); ?>">
                        <button class="btn btn--dark project__btn">
                            Github Repo
                        </button>
                    </a>
                <?php endif; ?>
                <?php
                    // Link where project can be seen such as Heroku, etc.
                    $main_link = get_field('main_link');
                    if ($main_link):
                ?>
                    <a class="project__links__btn" href="<?php echo $main_link ?>">
                        <button class="btn btn--dark project__btn">
                            On
                                <?php
                                // $hosted_on is a nice format, but it isn't required
                                $hosted_on = get_field('hosted_on');
                                echo $hosted_on
                                    ? $hosted_on
                                    : $main_link;
                                ?>
                        </button>
                    </a>
                <?php endif; ?>
            </section>
        </div>
    </main>
<?php
endwhile;
get_footer();
?>