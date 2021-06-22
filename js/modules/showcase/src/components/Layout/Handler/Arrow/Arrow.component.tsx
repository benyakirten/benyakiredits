import React from "react";

import classes from "./Arrow.module.scss";

export default ({ onClick }: OnClickChild): JSX.Element => {
    return (
        <button onClick={onClick} className={classes.arrow}>
            &larr;
        </button>
    );
};
