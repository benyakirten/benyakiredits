const alignFooterPosition = () => {
    // The footer by default is set to be the last element on the page
    // and so it has a relative position after all others

    // If the scrollHeight (total height of all elements on document) is less than
    // the innerHeight, then that means that the elements do not reach the bottom of the page
    // Therefore we add an absolute positioning at the bottom of the page

    const footer = document.querySelector(".footer");
    const navBottom = document.querySelector(".navigation").getBoundingClientRect().bottom;

    const { scrollHeight } = document.body;
    const { innerHeight } = window;

    if (scrollHeight < innerHeight && navBottom > 0) footer.classList.add("cling-to-bottom");
    else if (footer.classList.contains("cling-to-bottom")) footer.classList.remove("cling-to-bottom");
}

if (page_info.is_showcase) {
   document.querySelector(".footer").classList.remove("cling-to-bottom");
} else {
    alignFooterPosition();
    window.addEventListener("resize", alignFooterPosition);
}