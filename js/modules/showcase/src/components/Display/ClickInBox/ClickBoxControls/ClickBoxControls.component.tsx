import React, { useContext } from "react";

import ClickBoxContext from "@ClickBoxContext";

import { OPACITY_RANGE } from "@Constants/general";
import { CLICK_BOX_LENGTH, CLICK_BOX_SIZE } from "@ShowcaseConstants/clickBox";
import { shapeAsOptions } from "@Data/shapes";

import Subtitle from "@Type/Subtitle/Subtitle.component";
import Select from "@Inputs/Select/Select.component";
import ColorPicker from "@Inputs/ColorPicker/ColorPicker.component";
import Range from "@Inputs/Range/Range.component";
import Checkbox from "@Inputs/Checkbox/Checkbox.component";

const Controls: React.FC = () => {
    const clickBoxCtx = useContext(ClickBoxContext);
    return (
        <aside>
            <Subtitle>Controls</Subtitle>
            <Select
                options={shapeAsOptions}
                labelText="Select a Shape:"
                name="shape"
                value={clickBoxCtx.shape}
                handleChange={clickBoxCtx.setShape}
            />
            <ColorPicker
                color={clickBoxCtx.animationColor}
                name="animation-color"
                labelText="Animation Color:"
                handleColorChange={clickBoxCtx.setAnimationColor}
            />
            <ColorPicker
                color={clickBoxCtx.backgroundColor}
                name="background-color"
                labelText="Background Color:"
                handleColorChange={clickBoxCtx.setBackgroundColor}
            />
            <Range
                rangeConsts={CLICK_BOX_LENGTH}
                name="animation-length"
                value={clickBoxCtx.length}
                handleRangeChange={clickBoxCtx.setLength}
                labelText="Animation Length:"
            />
            <Range
                rangeConsts={CLICK_BOX_SIZE}
                name="animation-size"
                value={clickBoxCtx.size}
                handleRangeChange={clickBoxCtx.setSize}
                labelText="Animation Size:"
            />
            <Range
                rangeConsts={OPACITY_RANGE}
                name="parent-opacity"
                value={clickBoxCtx.parentOpacity}
                handleRangeChange={clickBoxCtx.setParentOpacity}
                labelText="Parent Opacity(%):"
            />
            <Checkbox
                value={clickBoxCtx.expand}
                handleToggle={clickBoxCtx.toggleExpand}
                name="animation-expand"
                labelText="Animation Expands Out:"
            />
            <Checkbox
                value={clickBoxCtx.randomization}
                handleToggle={clickBoxCtx.toggleRandomization}
                name="animation-randomization"
                labelText="Randomize Animation On Click:"
            />
        </aside>
    );
};

export default Controls;
