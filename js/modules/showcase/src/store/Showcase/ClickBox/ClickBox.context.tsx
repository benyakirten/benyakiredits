import React, { createContext, useState } from "react";

import useRange from "@Hooks/useRange";
import useColor from "@Hooks/useColor";
import useToggle from "@Hooks/useToggle";

import defaultState from "./defaultState";
import shapes from "@Data/shapes";

import { OPACITY_RANGE, NAMED_COLOR_TO_HEXES } from "@Data/constants/general";
import { CLICK_BOX_LENGTH, CLICK_BOX_SIZE } from "@ShowcaseConstants/clickBox";

import { getRandomFromRange, getRandomItem } from "@Util/random";
import { isDark } from "@Util/colors";

const ClickBoxContext = createContext(defaultState);

export const ClickBoxContentProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [shape, setShape] = useState<AnimationShape>(defaultState.shape);

    const [animationColor, setAnimationColor] = useColor(defaultState.animationColor);
    const [backgroundColor, setBackgroundColor] = useColor(defaultState.backgroundColor);

    const [length, setLength] = useRange(defaultState.length, CLICK_BOX_LENGTH);
    const [size, setSize] = useRange(defaultState.size, CLICK_BOX_SIZE);
    const [parentOpacity, setParentOpacity] = useRange(defaultState.parentOpacity, OPACITY_RANGE);

    const [expand, toggleExpand] = useToggle(defaultState.expand);
    const [randomization, toggleRandomization] = useToggle(defaultState.randomization);

    const randomizeAnimation = () => {
        const allHexColors: Array<string> = Object.values(NAMED_COLOR_TO_HEXES);
        const animColor = getRandomItem(allHexColors);
        setAnimationColor(animColor);

        // Make sure background color contrasts with the animation color
        setBackgroundColor(isDark(animColor) ? "#ffffff" : "#000000");

        // No need to randomize the shape if it's set on randomize already
        if (shape !== "random") {
            const possibleShapes = Object.keys(shapes).filter(
                (s) => s !== "random"
            );
            const randomShape = getRandomItem(possibleShapes) as keyof IShape;
            setShape(randomShape);
        }
        if (Math.random() > 0.5) toggleExpand();

        // This 'randomization' isn't true randomziation because the really random values are
        // fairly unpleasant. Therefore there are minimums to allow QOL
        setLength(getRandomFromRange({ ...CLICK_BOX_LENGTH, min: 500 }));
        setSize(getRandomFromRange({ ...CLICK_BOX_SIZE, min: 200 }));
        setParentOpacity(getRandomFromRange({ ...OPACITY_RANGE, min: 0.5 }));
    };

    const value: ClickBoxState = {
        shape,
        setShape,
        animationColor,
        setAnimationColor,
        backgroundColor,
        setBackgroundColor,
        length,
        setLength,
        expand,
        toggleExpand,
        size,
        setSize,
        parentOpacity,
        setParentOpacity,
        randomization,
        toggleRandomization,
        randomizeAnimation,
    };
    return (
        <ClickBoxContext.Provider value={value}>
            {children}
        </ClickBoxContext.Provider>
    );
};

export default ClickBoxContext;
