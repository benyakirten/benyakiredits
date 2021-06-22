import React from "react";

import classes from "./ColorPicker.module.scss";
import Label from '../Label/Label.component';

const ColorPicker: React.FC<IColorPickerProps> = ({
    name,
    labelText,
    color,
    handleColorChange,
}) => {
    const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(e.target.value)) {
            // This validation can be seen as redundant,
            // but there's no reason to have this too
            handleColorChange(e.target.value);
        }
    };
    return (
        <div className={classes.controlGroup}>
            <Label htmlFor={name}>{labelText}</Label>
            <input
                name={name + "-text"}
                onChange={onValueChange}
                value={color}
                type="text"
            />
            <input
                name={name}
                id={name}
                onChange={onValueChange}
                value={color}
                type="color"
            />
        </div>
    );
};

export default ColorPicker;
