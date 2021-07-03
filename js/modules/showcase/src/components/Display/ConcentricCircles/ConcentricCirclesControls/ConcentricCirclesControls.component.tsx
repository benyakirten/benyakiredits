import React, { useContext } from "react";

import {
    CANVAS_CONCENTRIC_CIRCLES,
    CANVAS_START_RADIUS,
    CANVAS_RADIUS_DELTA,
} from "@ShowcaseConstants/concentricCircles";
import ConcentricCirclesContext from "@ConcentricCirclesContext";

import Subtitle from "@Type/Subtitle/Subtitle.component";
import ColorPicker from "@Inputs/ColorPicker/ColorPicker.component";
import Range from "@Inputs/Range/Range.component";
import Checkbox from "@Inputs/Checkbox/Checkbox.component";

const ConcentricCirclesControls: React.FC = () => {
    const concentricCirclesCtx = useContext(ConcentricCirclesContext);
    return (
        <aside>
            <Subtitle>Controls</Subtitle>
            <ColorPicker
                color={concentricCirclesCtx.startingColor}
                name="canvas-start-color"
                labelText="Start Color:"
                handleColorChange={concentricCirclesCtx.setStartingColor}
            />
            <ColorPicker
                color={concentricCirclesCtx.endingColor}
                name="canvas-end-color"
                labelText="End Color:"
                handleColorChange={concentricCirclesCtx.setEndingColor}
            />
            <Range
                rangeConsts={CANVAS_CONCENTRIC_CIRCLES}
                name="canvas-concentric-circles"
                value={concentricCirclesCtx.numberOfCircles}
                handleRangeChange={concentricCirclesCtx.setNumberOfCircles}
                labelText="No. Circles:"
            />
            <Range
                rangeConsts={CANVAS_START_RADIUS}
                name="canvas-start-radius"
                value={concentricCirclesCtx.startRadius}
                handleRangeChange={concentricCirclesCtx.setStartRadius}
                labelText="Start Radius:"
            />
            <Range
                rangeConsts={CANVAS_RADIUS_DELTA}
                name="canvas-radius-delta"
                value={concentricCirclesCtx.radiusDelta}
                handleRangeChange={concentricCirclesCtx.setRadiusDelta}
                labelText="Radius Delta:"
            />
            <Checkbox
                value={concentricCirclesCtx.colorRandomization}
                handleToggle={concentricCirclesCtx.toggleColorRandomization}
                name="canvas-color-randomization"
                labelText="Color Randomization:"
            />
            <ColorPicker
                color={concentricCirclesCtx.backgroundColor}
                name="canvas-background-color"
                labelText="Background Color:"
                handleColorChange={concentricCirclesCtx.setBackgroundColor}
            />
        </aside>
    );
};

export default ConcentricCirclesControls;
