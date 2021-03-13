<footer class="footer">
    <div class="footer__extra"></div>
    <div class="footer__extra"></div>
    <?php
        // Bottom menu cannot support sub menus
        wp_nav_menu(array(
            'theme_location' => 'footer_menu_location',
            'depth' => 1
        ));
    ?>
    <div class="footer__copyright">
        &copy; 2021 by Benyakir Horowitz. All Rights Reserved.
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>