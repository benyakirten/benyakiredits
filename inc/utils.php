<?php

function get_full_technology($tech) {
    // Switch statement to translate a short name
    // for a technology into its long form name
    switch($tech) {
        case "html":
            return "HTML";
        case "css":
            return "CSS";
        case "sass":
            return "Sass";
        case "js":
            return "JavaScript";
        case "ts":
            return "TypeScript";
        case "py":
            return "Python";
        case "php":
            return "PHP";
        case "wp":
            return "WordPress";
        case "ng":
            return "Angular";
        case "swift":
            return "Swift";
        case "react":
            return "React";
        case "vue":
            return "Vue";
        case "cs":
            return "C#";
        case "unity":
            return "Unity";
        case "ml":
            return "Machine Learning";
        case "svelte":
            return "Svelte";
        case "gql":
            return "GraphQL";
        case "tw":
            return "Tailwind CSS";
        case "go":
            return "Golang";
        case "ex":
            return "Elixir";
        default:
            return $tech;
    }
}

function compare_formatted_date_strings($date1, $date2) {
    return convert_formatted_date_string($date1) > convert_formatted_date_string($date2);
}

function convert_formatted_date_string($date) {
    // If dates are formatted like 11/02/2000 then it'll become 11022000
    $date_no_slashes = str_replace("/", "", $date);
    // This will get the last 4 characters, e.g. 2000
    $date_year = substr($date_no_slashes, 4);
    // This will return the date formatted to be like this: 20001102
    return $date_year . substr($date_no_slashes, 0, $date_strlen - 4);
}