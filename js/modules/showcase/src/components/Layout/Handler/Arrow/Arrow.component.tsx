import React from "react";

import classes from "./Arrow.module.scss";

const Arrow: React.FC<OnClickProp> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={classes.arrow}>
            &larr;
        </button>
    );
};

export default Arrow;