import React from "react";
import classes from "./Title.module.scss";

const Title: React.FC<TitleProps> = ({ type = 'section', children }) => {
    return (
        <div className={classes.container}>
            {
                type === "h1" || type === "lead"
                    ? (<h1 className={classes.heading}>{children}</h1>)
                    : (<h2 className={classes.sectionTitle}>{children}</h2>)
            }
        </div>
    );
};

export default Title;