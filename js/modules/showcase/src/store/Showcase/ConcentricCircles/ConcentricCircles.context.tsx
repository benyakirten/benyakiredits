import React, { createContext, useState } from "react";

import defaultState from "./defaultState";
import {
    CANVAS_CONCENTRIC_CIRCLES,
    CANVAS_START_RADIUS,
    CANVAS_RADIUS_DELTA,
} from "@Data/constants";
import { rangeToCallback } from "@Util/range";

const ConcentricCirclesContext = createContext(defaultState);

export const ConcentricCirclesContextProvider: React.FC = ({ children }) => {
    const [numberOfCircles, setCanvasNumberOfCircles] = useState<number>(defaultState.numberOfCircles);
    const setNumberOfCircles = (num: number) => {
        rangeToCallback(num, CANVAS_CONCENTRIC_CIRCLES, setCanvasNumberOfCircles);
    }

    const [startRadius, setCanvasStartRadius] = useState<number>(defaultState.startRadius);
    const setStartRadius = (radius: number) => {
        rangeToCallback(radius, CANVAS_START_RADIUS, setCanvasStartRadius);
    }

    const [radiusDelta, setCanvasRadiusDelta] = useState<number>(defaultState.radiusDelta);
    const setRadiusDelta = (radius: number) => {
        rangeToCallback(radius, CANVAS_RADIUS_DELTA, setCanvasRadiusDelta);
    }

    const [startingColor, setCanvasStartingColor] = useState<string>(defaultState.startingColor);
    const setStartingColor = (color: string) => {
        if (/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(color)) setCanvasStartingColor(color);
    }

    const [endingColor, setCanvasEndingColor] = useState<string>(defaultState.endingColor);
    const setEndingColor = (color: string) => {
        if (/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(color)) setCanvasEndingColor(color);
    }

    const [backgroundColor, setCanvasBackgroundColor] = useState<string>(defaultState.backgroundColor);
    const setBackgroundColor = (color: string) => {
        if (/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(color)) setCanvasBackgroundColor(color);
    }

    const [colorRandomization, setCanvasColorRandomization] = useState<boolean>(defaultState.colorRandomization);
    const toggleColorRandomization = () => setCanvasColorRandomization(prevValue => !prevValue);



    const value: ConcentricCirclesState = {
        numberOfCircles,
        setNumberOfCircles,
        startRadius,
        setStartRadius,
        radiusDelta,
        setRadiusDelta,
        startingColor,
        setStartingColor,
        endingColor,
        setEndingColor,
        colorRandomization,
        toggleColorRandomization,
        backgroundColor,
        setBackgroundColor
    }

    return (
        <ConcentricCirclesContext.Provider value={value}>
            {children}
        </ConcentricCirclesContext.Provider>
    );
};

export default ConcentricCirclesContext;