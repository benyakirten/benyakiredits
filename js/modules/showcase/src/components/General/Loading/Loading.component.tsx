import React from 'react';
import classes from './Loading.module.scss';

const Loading: React.FC<ColorTheme> = ({ theme }) => {
    const border = `1px solid ${theme === 'dark' ? '#000' : '#fff'}`;
    return (
        <div
            className={classes.loading}
            style={{ border }}
        >
            <div
                className={classes.vertical}
                style={{ border }}
            />
            <div
                className={classes.horizontal}
                style={{ border }}
            />
        </div>
    );
}

export default Loading;