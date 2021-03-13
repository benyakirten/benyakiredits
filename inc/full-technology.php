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
        case "cs":
            return "C#";
        case "unity":
            return "Unity";
        case "ml":
            return "Machine Learning";
        default:
            return $tech;
    }
}