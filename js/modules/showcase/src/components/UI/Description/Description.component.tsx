import React from "react";
import classes from "./Description.module.scss";

const Description: React.FC<DescriptionProps> = ({
    description,
    meta,
}) => {
    return (
        <aside className={classes.aside}>
            <div className={classes.description}>{description}</div>
            <div className={classes.search}>Search tags: {meta.join(", ")}</div>
        </aside>
    );
};

export default Description;
