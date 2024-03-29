* What is this?
A custom WordPress theme made for my blog. It is meant to highlight my work as both a briter and as a programmer.

* How do I apply this on my own WordPress installation?
Clone the repository, put all files EXCEPT 1. everything in the the readme-images folder, 2. everything in the sass folder, 3. this file and 4. MUCopy.php in a zip file (or leave them in if space/upload size isn't a concern). Then on your WordPress admin panel go to My Sites -> Design -> Themes, then upload the zip file. You can read a much better description in the [WordPress Docs](https://wordpress.com/support/themes/uploading-setting-up-custom-themes/)

Please note the following:
> 1. A lot of the design is customized to my particular desires. Notably the header and footer are not particularly scalable. For example, the footer does not support nested menus, and the top menu supports only 1 depth nested menus - additional notes in the SCSS files
> 3. This theme expects all the files in the images folder
> 4. The MU plugins includes support for custom types - but is not included in this repo. It is all placed in MUCopy.php. Make sure that on the same folder level as the plugins/themes/upgrades/uploads level you create a folder called mu-plugins then move MUCopy.php into that folder (file can be renamed to anything)
> 5. This theme expects pages with the following three stubs: about-me, author and portfolio
> 6. I used the plugin Advanced Custom Fields to add three field groups: Book, Project and Short Story. What fields are used and how are listed in the following screenshots (note that * indicates a required field):

> Book:
![Book Custom Fields](/readme-images/book.png)
> Project:
![Project Custom Fields](/readme-images/project.png)
> Short Story:
![Short Story Custom Fields](/readme-images/shortstory.png)

* Addenda
The theme was written using a WordPress 5.7 installation with PHP 7.3.5 and MySQL version 8.0.16. I am not sure about how much future/backwards compatibility there is. That said, always make sure your plugins are up to date!

I wrote most of the comments in a few hours and am too lazy to make them better/more comprehensive. That said, if any of the functionality is unclear, let me know so I can explain it. There were a handful of CSS features that I used for the first time (such as object fit), and I'm sure there are better ways to write it.

PLANNED CHANGES
* Create a template part for the linkbox. Unfortunately, there are a wide varities of ways the linkbox is handled, so it may require something more complicated.
* Add custom gutenberg blocks as plugins (will be separate github projects).
* Update the pictures for this portion

CHANGELOG
* 3/13/2021: Put single line statements into single line instead of spreading across multiple lines. Added some redundancies to help with Bluehost differences between it and local environment. Fixed custom field variable reading in template-parts/content-book.php
* 3/13/2021-2: Uh, it turns out I forgot to paginate links in the archive pages. I completely overlooked it, but it was a quick fix. I might have to push a few other small changes in the coming days.
* 3/15/2021: I changed the ::before pseudo element for ul and ol. Turns out the nav menus, linkbox child menus and jetpack's social menu icons are lists too.
* 3/25/2021: I didn't notice that the ::before was applied to the tech list on the cards. I also added a small margin bottom to the end of regular lists.
* 4/27/2021: Fixed the footer alignment function so it works properly in production (no errors in development before previously, just in production). Added a function to remove the pagination div on archive pages with no pages to paginate. Changed all script localizations in the inc folder to provide information as arrays instead of as one-off information. Changed full-technology.php to utils.php because, some day, it may include more functions than that one.
* 4/27/2021: I remade the footer alignment function because I hadn't actually fixed it. I also took the opportunity to make the searchbar focus and size entirely run in JavaScript because it was working jankily because CSS counted it as losing focus when clicking on one of the results. It made clicking on any of the results difficult.
* 5/21/2021: Made github repos no longer obligatory for projects. Changed the padding on the header navigation items.
* 5/22/2021: Thanks to a great suggestion by my friend Matt, I've added an enlarged book cover to the popup about the cover designer.
* 6/22/2021: Finally, I added the showcase section to the website. It was a lot more work to set it up than I'd anticipated, but now that it's been done, future additions shouldn't be too difficult. Oh, yeah, some formatting too.
* 7/3/2021: Added two new widgets. It also gave me a time to reinforce a bunch of infrastructure for the React page.
* 8/18/2021: Added Tailwind CSS to technologies. Also added a react-routing.php file in inc. It doesn't work correctly.
* 8/23/2021: Fixed date comparison for books, added two utils for that purpose.
* 8/29/2021: A variety of updates to allow GraphQL compatability. None of the following changes are necessary to the continuing functioning of the theme.
> 1. Changed the license to GPL because WordPress themes/plugins need to have a GPL license
> 2. Added GraphQL compatability to work with a Gatsby project I'm working on. Therefore, the following plugins were added: WP GraphQL, WP Gatsby, WPGraphQL for Advanced Custom Fields (not available on the registry, instead consult: https://github.com/wp-graphql/wp-graphql-acf)
> 3. The MUPlugins were updated to be included in the GraphQL API. Therefore, I copied the new version into MUCopy.php. For all three custom post types, I added:
>> * 'show_in_graphql' => true,
>> * 'hierarchical' => true,
>> * 'graphql_single_name' => 'project' (book/shortstory),
>> * 'graphql_plural_name' => 'projects' (books/shortstories)
> 4. To make the Advanced Custom Fields compliant with GraphQL, you have to enable Show in GraphQL in each field group. If you don't follow these steps, your custom post types and/or ACF won't show up. Yes, it's lame, but it's not my fault (entirely).
* 1/15/2021: Added golang icon