import React, { useContext, useEffect, useState } from 'react';

import classes from './ClickAnimation.module.scss';

import shapes from '@Data/shapes';
import { getRandomValueFromObject } from '@Util/random';

import ClickBoxContext from '@ClickBoxContext';

const ClickAnimation: React.FC<Coords> = ({ x, y }) => {
    const clickBoxCtx = useContext(ClickBoxContext);
    const [finalPosition, setFinalPosition] = useState<Coords>({ x: 0, y: 0 });
    useEffect(() => {
        // The aniamted element needs to be translated -50%, -50%, but
        // for some reason, the browser  was offsetting that incorrectly
        // and causing the position to be animated
        // So therefore the animation needs to calculate transform: translate(-50%, -50%)
        const offset = Math.floor(clickBoxCtx.size / 2)
        const finalX = x - offset;
        const finalY = y - offset;
        setFinalPosition({ x: finalX, y: finalY });
    }, [x, y]);
    const getShape = (): string => {
        return clickBoxCtx.shape === 'random'
            ? getRandomValueFromObject(shapes)
            : shapes[clickBoxCtx.shape];
    }
    const getAnimation = (): string => {
        const animation = clickBoxCtx.expand
            ? 'click-animation-expand'
            : 'click-animation-retract';
        return animation + ` ${clickBoxCtx.length}ms linear`;
    }
    return (
        <div
            className={classes.anim}
            style={{
                top: finalPosition.y + 'px',
                left: finalPosition.x + 'px',
                width: `${clickBoxCtx.size}px`,
                height: `${clickBoxCtx.size}px`,
                clipPath: getShape(),
                backgroundColor: clickBoxCtx.animationColor,
                animation: getAnimation()
            }}
        />
    )
}

export default ClickAnimation;