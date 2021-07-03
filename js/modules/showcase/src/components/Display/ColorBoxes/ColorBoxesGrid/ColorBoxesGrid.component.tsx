import React, { useContext, useState, useEffect, createRef } from "react";

import classes from "./ColorBoxesGrid.module.scss";

import { NAMED_COLORS_TO_HEXES_ARRAY } from "@Constants/general";
import { BOX_WIDTH } from "@ShowcaseConstants/colorBox";
import { getRandomItem } from "@Util/random";

import ColorBoxesContext from "@ColorBoxesContext";
import ColorBox from "@Gen/ColorBox/ColorBox.component";

const ColorBoxesGrid: React.FC = () => {
    const colorBoxesCtx = useContext(ColorBoxesContext);

    // Used to calculate the size of the container
    const gridRef = createRef<HTMLDivElement>();
    const [gridColumns, setGridColumns] = useState<number>(1);

    // Always keep track of timeouts
    const [colorChangeInterval, setColorChangeInterval] =
        useState<NodeJS.Timeout>();
    const [boxes, setBoxes] = useState<Array<ColorBox>>([]);
    const [usableColors, setUsableColors] = useState<Array<UsableColorAndHex>>(
        NAMED_COLORS_TO_HEXES_ARRAY.map((c) => ({ ...c, used: false }))
    );

    // Helper function:
    // Gets a color from the array that hasn't been used
    // Take a random color - update the colors to array to mark it as used
    // Send the color back to whatever process is requesting it
    const getUnusedColorAndName = (): ColorNameAndHex => {
        const availableColors = usableColors.filter((c) => !c.used);
        const chosenColor = getRandomItem(availableColors);
        setUsableColors((prevValue) =>
            prevValue.map((c) =>
                c.name === chosenColor.name ? { ...chosenColor, used: true } : c
            )
        );
        return chosenColor;
    };

    // At a certain index, get the box, assign it a new color and mark
    // the old color as now usable
    const setNewBoxColorAtIndex = (idx: number) => {
        const _box = boxes[idx];
        const newColorAndName = getUnusedColorAndName();
        setBoxes((prevValue) =>
            prevValue.map((box, boxIndex) =>
                boxIndex === idx
                    ? {
                          color: newColorAndName.hex,
                          id: Math.random().toString(),
                          text: newColorAndName.name,
                      }
                    : box
            )
        );
        setUsableColors((prevValue) =>
            prevValue.map((c) =>
                c.name === _box.text ? { ...c, used: false } : c
            )
        );
    };

    // Primary useEffect - set the boxes and initial colors
    // whenever boxes/how many are changing
    useEffect(() => {
        // Get a box with a different color
        if (colorChangeInterval) {
            clearInterval(colorChangeInterval);
            setColorChangeInterval(undefined);
        }

        setUsableColors((prevValue) =>
            prevValue.map((c) => ({ ...c, used: false }))
        );

        const _boxes: Array<ColorBox> = Array.from(
            { length: colorBoxesCtx.boxAmount },
            () => {
                const colorAndName = getUnusedColorAndName();
                return {
                    color: colorAndName.hex,
                    id: Math.random().toString(),
                    text: colorAndName.name,
                };
            }
        );
        setBoxes(_boxes);
    }, [colorBoxesCtx.boxAmount, colorBoxesCtx.boxAlternationDelay]);

    // Interval for boxes changing color
    useEffect(() => {
        if (colorChangeInterval) {
            clearInterval(colorChangeInterval);
            setColorChangeInterval(undefined);
        }
        // Boxes.length might be 0 if the component isn't yet mounted, in which case
        // this process will try to access index 0 of an array with length 0
        if (boxes.length > 0) {
            const _interval = setInterval(() => {
                const changedIndeces: Array<number> = [];
                const actualAmountOfBoxesChanging = Math.floor(
                    (colorBoxesCtx.ratioOfBoxesAlternating / 100) *
                        colorBoxesCtx.boxAmount
                );
                for (let i = 0; i < actualAmountOfBoxesChanging; i++) {
                    let possibleIdx = Math.floor(Math.random() * boxes.length);
                    while (changedIndeces.includes(possibleIdx)) {
                        possibleIdx = Math.floor(Math.random() * boxes.length);
                    }
                    changedIndeces.push(possibleIdx);
                    setNewBoxColorAtIndex(possibleIdx);
                }
            }, colorBoxesCtx.boxAlternationDelay);
            setColorChangeInterval(_interval);
        }
        return () =>
            colorChangeInterval
                ? clearInterval(colorChangeInterval)
                : undefined;
    }, [boxes, colorBoxesCtx.ratioOfBoxesAlternating]);

    // For some reason, the grid will only have 1 column unless manually set
    // So we calculate the amount of boxes that will fit
    // Note: user can no manually set box width because it was causing all sorts of issues
    useEffect(() => {
        if (gridRef.current) {
            const { width } = gridRef.current.getBoundingClientRect();
            setGridColumns(Math.floor(width / BOX_WIDTH));
        }
    }, [gridRef]);

    return (
        <aside
            className={classes.container}
            style={{
                rowGap: `${colorBoxesCtx.gridRowGap}px`,
                gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
            }}
            ref={gridRef}
        >
            {boxes.map((box) => (
                <ColorBox
                    key={box.id}
                    height={colorBoxesCtx.boxHeight}
                    width={BOX_WIDTH}
                    color={box.color}
                    text={colorBoxesCtx.showColorNames ? box.text : box.color}
                />
            ))}
        </aside>
    );
};

export default ColorBoxesGrid;
