import React from "react";

import classes from "./Checkbox.module.scss";

const Checkbox: React.FC<ICheckboxProps> = ({ value, name, handleToggle, labelText }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
        if (e.code === "Enter" || e.code === "Space") handleToggle();
    }
    return (
        <div className={classes.controlGroup}>
            <input
                type="checkbox"
                name={name}
                id={name}
                checked={value}
                onChange={handleToggle}
                aria-labelledby={name + "label"}
            />
            <label htmlFor={name} />
            <span
                id={name + "-label"}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                {labelText}
            </span>
        </div>
    );
};

export default Checkbox;
