import React from "react";

import classes from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className={classes.button} onClick={onClick}>
            <span>{children}</span>
        </button>
    );
};

export default Button;
