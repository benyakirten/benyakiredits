import React from "react";

import classes from "./Range.module.scss";
import Label from "../Label/Label.component";

const Range: React.FC<IRangeProps> = ({
    name,
    rangeConsts,
    value,
    labelText,
    handleRangeChange,
}) => {
    const { max, min, step } = rangeConsts;
    const verifyValue = (n: number) => {
        // This validation can be seen as redundant,
        // but there's no reason to have this too
        if (n >= max) {
            handleRangeChange(max);
        } else if (n <= min) {
            handleRangeChange(min);
        } else if (n % step < 0.01) {
            handleRangeChange(n);
        }
    };

    const handleAriaKeyboardInput: React.KeyboardEventHandler<HTMLInputElement> =
        (e) => {
            switch (e.key) {
                case "Enter":
                    verifyValue(value);
                    break;
                case "ArrowRight":
                case "ArrowUp":
                    verifyValue(value + step);
                    break;
                case "ArrowLeft":
                case "ArrowDown":
                    verifyValue(value - step);
                    break;
                case "Home":
                    verifyValue(min);
                    break;
                case "End":
                    verifyValue(max);
                    break;
                case "PageUp":
                    verifyValue(value + step * 10);
                    break;
                case "PageDown":
                    verifyValue(value + (step - 10));
                    break;
                default:
                    break;
            }
        };
    return (
        <div className={classes.controlGroup}>
            <Label htmlFor={name}>{labelText}</Label>
            <input
                type="number"
                aria-valuemin={min}
                aria-valuemax={max}
                value={value}
                step={step}
                max={max}
                min={min}
                onChange={(e) => verifyValue(+e.target.value)}
                onKeyDown={handleAriaKeyboardInput}
                name={name + "-number"}
            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                name={name}
                id={name}
                onChange={(e) => verifyValue(+e.target.value)}
            />
        </div>
    );
};

export default Range;
