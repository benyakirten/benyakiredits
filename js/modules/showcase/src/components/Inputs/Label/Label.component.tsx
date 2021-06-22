import React from 'react';

import classes from './Label.module.scss';

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className={classes.label}>{children}</label>
    );
};

export default Label;