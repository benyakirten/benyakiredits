// Fetch latest update date for the repo
const fetchLastUpdated = async () => {
    // We want to exit the function immediately if we can't find the #last-updated element
    let lastUpdated = null;
    
    try {
        lastUpdated = document.querySelector("#last-updated");
    } catch {
        return;
    }

    // project_info is an associative array provided by functions.php
    const { repo_link } = project_info;

    const fullLink = repo_link.replace('github.com/', 'api.github.com/repos/')
    const res = await fetch(fullLink);
    const results = await res.json();
    // NOTE: this is one of the largest uses of network resources
    // But I've yet to figure out how to get the API to only give back
    // the pushed_at date. I can go for the latest release, but that too
    // is a lot of information

    // toLocaleDateString provides the date in the format we want
    const updateDate = new Date(results.pushed_at).toLocaleDateString();
    
    // Instead of removing the spinner div and replacing it with another child
    // We simply remove the spinner class
    // The div has another that sets it to inline-block, but the spinner sets it to block
    // So by removing the spinner it becomes an inline element
    lastUpdated.classList.remove("spinner");
    lastUpdated.innerHTML = updateDate;
}

fetchLastUpdated();