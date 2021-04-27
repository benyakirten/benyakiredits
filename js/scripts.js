const alignFooterPosition = () => {
    // This is a function to make sure the footer is at the bottom of the page

    // The footer by default is set to be the last element on the page
    // and so it has a relative position after all others

    // There were two possible scenarios:
    //  1. The content of the page was long enough and the footer is
    //      at the foot of the page
    //  2. The content of the page was not long enough and the footer appears in the
    //      middle of the page
    // This function checks for the second case and changes the footer
    // to be at an absolute position at the bottom of the page

    // This function gets two pieces of information:
    // the X position of the bottom of the footer and the bottom of the page
    // IF the bottom of the footer has a smaller X position (is closer to the top)
    // than the bottom of the page, then we add this class to set an aboslute position

    // NOTE: This function, because it's only run once, would not function well if
    // the content of the pages were dynamic
    
    const footer = document.querySelector(".footer");
    const footerBottom = footer.getBoundingClientRect().bottom;
    
    const { availHeight } = window.screen;

    const nav = document.querySelector(".navigation");
    const navBottom = nav.getBoundingClientRect().bottom;

    if (footerBottom < availHeight && navBottom > 0) footer.classList.add("cling-to-bottom");
    else if (footer.classList.contains("cling-to-bottom")) footer.classList.remove("cling-to-bottom");
}

const deactivatePaginationOnArchivesWithNoPages = () => {
    if (page_data.is_archive
        && document.querySelectorAll(".page-numbers").length === 0) {
        document.querySelector(".archive-pagination").style.display = "none";
    }
}

alignFooterPosition();
window.addEventListener("resize", alignFooterPosition);

deactivatePaginationOnArchivesWithNoPages();