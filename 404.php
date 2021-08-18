<?php get_header();
    global $wp;
    $route = $wp->request;
?>
    <main class="generic-container">
        <h1 class="generic-container__title heading-title">
            Whoa! It looks like you took a wrong turn.
        </h1>
        <div class="generic-container__content">
            <p>
                Unfortunately, <?php echo(esc_html($route)); ?> isn't a route.
                There's nothing really to do here. I suggest you find a link
                from the top bar. Or check out one of the following:
            </p>
            <ul>
                <li><a class="styled-link" href="<?php echo(esc_url('/bblogs')); ?>">Blogs</a></li>
                <li><a class="styled-link" href="<?php echo(esc_url('/author')); ?>">Author</a></li>
                <li><a class="styled-link" href="<?php echo(esc_url('/showcase')); ?>">Showcase</a></li>
                <li><a class="styled-link" href="<?php echo(esc_url('/portfolio')); ?>">Portfolio</a></li>
            </ul>
            <p>
                If you're relaoding one of the showcase items and ended up here,
                I know it's bugged and I'm working on it.
            </p>
        </div>
    </main>
<?php get_footer(); ?>