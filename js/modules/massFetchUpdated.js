const fetchLastUpdated = async repoLink => {
    // This is very similar function to fetchLatestUpdate.js with two differences:
    // 1. The fitness check is done outside of the function
    // 2. This function does not modify the element
    const fullLink = repoLink.replace('github.com/', 'api.github.com/repos/');

    // Fetch the data and find the piece of info we want
    const res = await fetch(fullLink);
    const results = await res.json();
    return new Date(results.pushed_at).toLocaleDateString();
}

const updateData = async el => {
    // Each element has a data-repo attribute
    // which we pass to the the fetchLastUpdated function
    const repo = el.getAttribute('data-repo');
    if (!repo) {
        return;
    }
    const date = await fetchLastUpdated(repo);

    // Remove the spinner and replace it with the correct data
    // as was done in fetchLastUpdate.js 
    el.classList.remove('spinner');
    el.innerHTML = date;
}

const toBeUpdated = document.querySelectorAll('#last-updated');
if (toBeUpdated) {
    toBeUpdated.forEach(el => updateData(el));
}