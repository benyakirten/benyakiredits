<?php get_header();
// For the /about-me url
while (have_posts()) :
    the_post(); ?>
    <main class="generic-container">
        <h2 class="generic-container__title heading-title">
            <?php the_title(); ?>
        </h2>
        <section class="text-image about-me">
            <figure class="text-image__figure about-me__figure">
                <img
                    class="text-image__figure__img about-me__img"
                    src="
                        <?php
                            // See if the user has a gravatar
                            $profile_image = get_avatar_url(get_the_author(),
                                array(
                                    'default' => '404'
                                )
                            );
                            // If they do: we use that
                            // If they don't: we use a Portrait.jpg in the image folder
                            echo strpos($profile_image, '404')
                                ? get_theme_file_uri("/images/Portrait.jpg")
                                : $profile_image;
                        ?>
                    "
                    aria-labelledby="portrait-caption"
                />
                <figcaption
                    class="text-image__figure__caption"
                    id="portrait-caption"
                >
                    <?php echo get_the_author(); ?>
                </figcaption>
            </figure>
        </section>
        <div class="generic-container__content">
            <?php
                echo the_content();
            ?>
        </div>
    </main>
<?php
endwhile;
get_footer();
?>