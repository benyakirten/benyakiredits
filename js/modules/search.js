// HTML ELEMENTS
const searchBar = document.querySelector("#search-bar");
const searchResults = document.querySelector('#search-results');
const searchDiv = searchResults.children[0];

// Timeout to only perform search if the user pauses for half a second
let searchTimeout;

// Div is by default hidden by having a Y scale of 0
// This makes it appear along a transform-origin of top
// so it folds out
const showDiv = () => {
    searchResults.style.transform = "scaleY(1)";
};

const hideDiv = () => {
    // Reset the searchResults div to contain only a loading bar while putting it away
    searchResults.style.transform = "scaleY(0)";
    searchResults.innerHTML = '<div class="search-results__spinner spinner spinner--inverted"></div>';
};

// NOTE: The following functions format various items.
// How they arrive at these functions comes up after all the formatting

// FORMATTING - POST
const formatPostDiv = post => {
    const category = post.category ? ` - ${post.category}` : '';
    return `
        <div class="search-results__item">
            <a class="search-results__item__link" href="${post.permalink}">
                <i class="fa fa-gavel search-results__item__icon" aria-hidden="true"></i>
                <span>${post.title}${category}</span>
            </a>
        </div>
    `;
};

// FORMATTING - BOOK
const formatBookDiv = book => (`
    <div class="search-results__item">
        <a class="search-results__item__link" href="${book.permalink}">
            <i class="fa fa-book search-results__item__icon" aria-hidden="true"></i>
            <span class="search-results__item__title">${book.title}</span>
            <img class="search-results__item__img" alt="Book cover" src="${book.cover}">
        </a>
    </div>`
);

// FORMATTING - PROJECT
// NOTE: The tech property is run through a reduce function because the HTML needs to be
// a simple string because, unfortunately, this isn't JSX
const formatProjectDiv = project => (`
    <div class="search-results__item search-results__item--project">
        <a class="search-results__item__link search-results__item__link--project" href="${project.permalink}">
            <i class="fa fa-file search-results__item__icon" aria-hidden="true"></i>
            <span class="search-results__item__title">${project.title}</span>
        </a>
        <a href="${project.permalink}">
            <div class="search-results__item__grid">
                ${project.tech.reduce((acc, next) => (acc += `
                    <img class="search-results__item__grid__img" src="${icon_uri}/${next}.svg">
                `), '')}
            </div>
        </a>
        <a class="search-results__item__link search-results__item__link--project" href="${project.repo_link}">
            <img class="search-results__item__github" src="${icon_uri}/Github.svg">
        </a>
    </div>`
);

// FORMATTING - SHORT STORY
const formatShortstoryDiv = shortstory => {
    // If we have a relatedBook then we will always have the
    // relationship to book, even if that just reads "Related"
    const relatedBookFormatted = shortstory.related_book
        ? `${shortstory.relationship_to_book} to ${shortstory.related_book}`
        : '';
    return `
        <div class="search-results__item">
            <a class="search-results__item__link" href="${shortstory.permalink}">
                <i class="fa fa-pencil search-results__item__icon" aria-hidden="true"></i>
                <span class="search-results__item__title">
                    ${shortstory.title}, ${relatedBookFormatted}
                </span>
            </a>
        </div>`;
};

// FORMATTING - OTHER
const formatOtherDiv = other => (`
    <div class="search-results__item">
        <a class="search-results__item__link" href="${other.permalink}">
            <i class="fa fa-crop search-results__item__icon" aria-hidden="true"></i>
            <span>${other.title}</span>
        </a>
    </div>`
);

// FORMATTING FUNCTION
const formatResults = data => {
    // All the data that's passed in is being reduced to the properly formatted HTML
    // NOTE: As above, the data needs to be reduced to a simple string because we are working
    // with vanilla JS and not JSX
    const posts = data.posts ? data.posts.reduce((acc, next) => acc += formatPostDiv(next), '') : '';
    const books = data.books ? data.books.reduce((acc, next) => acc += formatBookDiv(next), '') : '';
    const projects = data.projects ? data.projects.reduce((acc, next) => acc += formatProjectDiv(next), '') : '';
    const shortstories = data.shortstories ? data.shortstories.reduce((acc, next) => acc += formatShortstoryDiv(next), '') : '';
    const other = data.other ? data.other.reduce((acc, next) => acc += formatOtherDiv(next), '') : '';

    return posts + books + projects + shortstories + other;
}

// Request sent to our custom WP endpoint as set up in inc/search-route.php
const sendRequest = async search => {
    // Error handling by parent function
    const results = await fetch(`${site_url}/wp-json/benyakirblog/v1/search?q=${search}`);
    const data = await results.json();
    return data;
}

// SEARCH FUNCTIONALITY
searchBar.addEventListener('keypress', e => {
    // keypress rather than keydown event avoids activation on
    // a lot of keys that we dont' want
    // Another solution would be to return if e.key is not in /[a-zA-Z]/
    // Keypress does catch most keys we dont' want but still catches escape and enter
    if (e.key === 'Escape' || e.key === 'Enter') {
        return;
    }

    // We want to show the div right away with the loading bar
    showDiv();

    // We only want to send a request if there's been no changes in last half second
    if (searchTimeout) {
        window.clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(async () => {
        // Assign the width value for when search results are found
        width = searchBar.clientWidth;
        console.log(width);
        // If the searchbar is empty, we stop the function now
        const search = searchBar.value;
        if (!search) {
            return;
        }
        try {
            const data = await sendRequest(search);
            const formatted = formatResults(data);
            // CHECK FOR EMPTY RESULTS
            searchResults.innerHTML = formatted ? formatted : `
                <div class="search-results__empty">
                    Sorry, no results found <i class="fa fa-frown-o" aria-hidden="true"></i>
                </div>`;
        } catch (e) {
            // ERROR
            console.log(e);
            searchResults.innerHTML = `
            <div class="search-results__empty">
                <i class="fa fa-exclamation" aria-hidden="true"></i> An Error Has Occurred. Please try again.
            </div>`;
        }
    }, 500);
});

// If all is deleted in the searchbar, then hide the search
searchBar.addEventListener('keyup', e => {
    if (!e.target.value) {
        hideDiv();
    }
});

// This is a bad solution to the jankiness of clicking on one
// of the dead spaces in a search result
searchBar.addEventListener('focusout', () => {
    setTimeout(() => {
        hideDiv();
        searchBar.value = "";
    }, 200);
});