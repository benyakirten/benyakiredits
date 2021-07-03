import React from "react";
import classes from "./Subtitle.module.scss";

const Subtitle: React.FC<SubtitleProps> = ({ children, theme }) => {
    return (
        <h3
            className={`
                ${classes.header} ${theme === "dark" ? classes.dark : classes.light}
            `}
        >
            {children}
        </h3>
    );
};

export default Subtitle;
