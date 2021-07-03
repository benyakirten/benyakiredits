import React, { createContext } from "react";

import useRange from "@Hooks/useRange";
import useColor from "@Hooks/useColor";
import useToggle from "@Hooks/useToggle";

import defaultState from "./defaultState";
import {
    CANVAS_CONCENTRIC_CIRCLES,
    CANVAS_START_RADIUS,
    CANVAS_RADIUS_DELTA,
} from "@ShowcaseConstants/concentricCircles";

const ConcentricCirclesContext = createContext(defaultState);

export const ConcentricCirclesContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [numberOfCircles, setNumberOfCircles] = useRange(defaultState.numberOfCircles, CANVAS_CONCENTRIC_CIRCLES);
    const [startRadius, setStartRadius] = useRange(defaultState.startRadius, CANVAS_START_RADIUS);
    const [radiusDelta, setRadiusDelta] = useRange(defaultState.radiusDelta, CANVAS_RADIUS_DELTA);

    const [startingColor, setStartingColor] = useColor(defaultState.startingColor);
    const [endingColor, setEndingColor] = useColor(defaultState.endingColor);
    const [backgroundColor, setBackgroundColor] = useColor(defaultState.backgroundColor);

    const [colorRandomization, toggleColorRandomization] = useToggle(defaultState.colorRandomization);

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