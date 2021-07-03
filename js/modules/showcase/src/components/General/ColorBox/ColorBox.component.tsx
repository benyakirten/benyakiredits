import React from 'react';

import classes from './ColorBox.module.scss';
import { getOppositeColor } from '@Util/colors';

const ColorBox: React.FC<ColorBoxProps> = ({ width, height, color, text }) => {
    return (
        <div
            className={classes.box}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: color
            }}
        >
            {!!text && (
                <span style={{ color: getOppositeColor(color) }}>{text}</span>
            )}
        </div>
    );
}

export default ColorBox;