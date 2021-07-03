import React, { createContext } from "react";

import defaultState from "./defaultState";

import useRange from "@Hooks/useRange";
import useToggle from "@Hooks/useToggle";
import { SIMPLE_RATIO } from "@Constants/general";
import {
    GRID_BOX_GAP,
    COLOR_BOX_MEASUREMENTS,
    NUMBER_OF_BOXES,
    BOX_ALTERNATION_DELAY
} from "@ShowcaseConstants/colorBox";

const ColorBoxesContext = createContext(defaultState);

export const ColorBoxesContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [gridRowGap, setGridRowGap] = useRange(defaultState.gridRowGap, GRID_BOX_GAP);
    const [boxHeight, setBoxHeight] = useRange(defaultState.boxHeight, COLOR_BOX_MEASUREMENTS);

    const [boxAmount, setBoxAmount] = useRange(defaultState.boxAmount, NUMBER_OF_BOXES);
    const [ratioOfBoxesAlternating, setRatioOfBoxesAlternating] = useRange(defaultState.ratioOfBoxesAlternating, SIMPLE_RATIO);
    const [boxAlternationDelay, setBoxAlternationDelay] = useRange(defaultState.boxAlternationDelay, BOX_ALTERNATION_DELAY);

    const [showColorNames, toggleShowColorNames] = useToggle(defaultState.showColorNames);

    const value: ColorBoxesState = {
        gridRowGap,
        setGridRowGap,
        boxHeight,
        setBoxHeight,
        boxAmount,
        setBoxAmount,
        ratioOfBoxesAlternating,
        setRatioOfBoxesAlternating,
        boxAlternationDelay,
        setBoxAlternationDelay,
        showColorNames,
        toggleShowColorNames
    }

    return (
        <ColorBoxesContext.Provider value={value}>
            {children}
        </ColorBoxesContext.Provider>
    );
};

export default ColorBoxesContext;
