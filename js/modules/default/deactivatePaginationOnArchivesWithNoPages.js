(function () {
    const pages = document.querySelectorAll(".page-numbers");
    if (pages && pages.length === 0) {
        document.querySelector(".archive-pagination").style.display = "none";
    }
})();