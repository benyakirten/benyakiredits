import React, { createContext, useState } from "react";

import defaultState from "./defaultState";
import { CLICK_BOX_LENGTH, CLICK_BOX_SIZE, OPACITY_RANGE } from "@Data/constants";
import { rangeToCallback } from "@Util/range";

const ClickBoxContext = createContext(defaultState);

export const ClickBoxContentProvider: React.FC = ({ children }) => {
    const [shape, setShape] = useState<AnimationShape>(defaultState.shape);

    const [animationColor, setClickColor] = useState<string>(defaultState.animationColor);
    const setAnimationColor = (val: string) => {
        if (/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(val)) setClickColor(val);
    };

    const [backgroundColor, setContainerColor] = useState<string>(defaultState.backgroundColor);
    const setBackgroundColor = (val: string) => {
        if (/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(val)) setContainerColor(val);
    };

    const [length, setAnimationLength] = useState<number>(defaultState.length);
    const setLength = (val: number) => {
        rangeToCallback(val, CLICK_BOX_LENGTH, setAnimationLength);
    };

    const [expand, setAnimationExpand] = useState<boolean>(defaultState.expand);
    const toggleExpand = () => setAnimationExpand(prevValue => !prevValue);

    const [size, setAnimationSize] = useState<number>(defaultState.size);
    const setSize = (val: number) => {
        rangeToCallback(val, CLICK_BOX_SIZE, setAnimationSize);
    }

    const [parentOpacity, setAnimationParentOpacity] = useState<number>(defaultState.parentOpacity);
    const setParentOpacity = (ratio: number) => {
        rangeToCallback(ratio, OPACITY_RANGE, setAnimationParentOpacity);
    }

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
        setParentOpacity
    };
    return (
        <ClickBoxContext.Provider value={value}>
            {children}
        </ClickBoxContext.Provider>
    );
};

export default ClickBoxContext;
