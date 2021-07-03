import React, { useContext } from "react";

import { SIMPLE_RATIO } from "@Data/constants/general";
import {
    GRID_BOX_GAP,
    COLOR_BOX_MEASUREMENTS,
    NUMBER_OF_BOXES,
    BOX_ALTERNATION_DELAY,
} from "@ShowcaseConstants/colorBox";

import ColorBoxesContext from "@ColorBoxesContext";

import Subtitle from "@Type/Subtitle/Subtitle.component";
import Range from "@Inputs/Range/Range.component";
import Checkbox from "@Inputs/Checkbox/Checkbox.component";

const ColorBoxesControls: React.FC = () => {
    const colorBoxesCtx = useContext(ColorBoxesContext);
    return (
        <div>
            <Subtitle>Controls</Subtitle>
            <Range
                rangeConsts={GRID_BOX_GAP}
                value={colorBoxesCtx.gridRowGap}
                labelText="Grid Row Gap"
                name="color-boxes-row-gap"
                handleRangeChange={colorBoxesCtx.setGridRowGap}
            />
            <Range
                rangeConsts={COLOR_BOX_MEASUREMENTS}
                value={colorBoxesCtx.boxHeight}
                labelText="Individual Box Height"
                name="color-boxes-box-height"
                handleRangeChange={colorBoxesCtx.setBoxHeight}
            />
            <Range
                rangeConsts={NUMBER_OF_BOXES}
                value={colorBoxesCtx.boxAmount}
                labelText="No. Boxes"
                name="color-boxes-box-amount"
                handleRangeChange={colorBoxesCtx.setBoxAmount}
            />
            <Range
                rangeConsts={SIMPLE_RATIO}
                value={colorBoxesCtx.ratioOfBoxesAlternating}
                labelText="Ratio of Boxes Changing Color"
                name="color-boxes-box-alternating-ratio"
                handleRangeChange={colorBoxesCtx.setRatioOfBoxesAlternating}
            />
            <Range
                rangeConsts={BOX_ALTERNATION_DELAY}
                value={colorBoxesCtx.boxAlternationDelay}
                labelText="Box Color Change Speed"
                name="color-boxes-box-alternating-delay"
                handleRangeChange={colorBoxesCtx.setBoxAlternationDelay}
            />
            <Checkbox
                value={colorBoxesCtx.showColorNames}
                handleToggle={colorBoxesCtx.toggleShowColorNames}
                name="color-boxes-show-color-names"
                labelText="Show Color Names:"
            />
        </div>
    );
};

export default ColorBoxesControls;
