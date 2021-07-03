import React, { useState } from "react";

import classes from "./DragDrop.module.scss";

const DragDropList: React.FC<DragDropProps> = ({
    name,
    leftList,
    leftTitle,
    rightList,
    rightTitle,
    handleChange,
}) => {
    // const [itemDraggedOver, setItemDraggedOver] = useState<string>();
    const [itemDraggedOrigin, setItemDraggedOrigin] = useState<string>();
    const [itemDraggedOver, setItemDraggedOver] = useState<string>();

    const dragStartHandler = (
        e: React.DragEvent<HTMLLIElement>,
        item: DragDropItem,
        side: string
    ) => {
        e.dataTransfer.setData("drag-item", item.value);
        setItemDraggedOrigin(`${name}-${side}`);
    };

    const dragOverHandler = (
        e: React.DragEvent<HTMLDivElement>,
        itemDraggedFrom: string
    ) => {
        e.preventDefault();
        // Sides are opposite so that it can only match one side from one drag and drop list
        if (itemDraggedOrigin === `${name}-${itemDraggedFrom}`)
            setItemDraggedOver(itemDraggedFrom === "left" ? "right" : "left");
    };

    const dragLeaveHandler = () => {
        setItemDraggedOver(undefined);
    };

    const dropHandler = (
        e: React.DragEvent<HTMLDivElement>,
        itemDraggedFrom: string
    ) => {
        setItemDraggedOver(undefined);
        if (itemDraggedOrigin === `${name}-${itemDraggedFrom}`) {
            handleChange(e.dataTransfer.getData("drag-item"));
        }
    };

    return (
        <div className={classes.container}>
            <div
                onDragOver={(e) => dragOverHandler(e, "right")}
                onDragLeave={dragLeaveHandler}
                onDrop={(e) => dropHandler(e, "right")}
                className={itemDraggedOver === "left" ? classes.hovered : ""}
            >
                <h3>{leftTitle}</h3>
                <ul>
                    {leftList.map((item) => (
                        <li
                            draggable
                            onDragStart={(e) =>
                                dragStartHandler(e, item, "left")
                            }
                            key={item.id}
                            onClick={() => handleChange(item.value)}
                        >
                            {item.value}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                onDragOver={(e) => dragOverHandler(e, "left")}
                onDragLeave={dragLeaveHandler}
                onDrop={(e) => dropHandler(e, "left")}
                className={itemDraggedOver === "right" ? classes.hovered : ""}
            >
                <h3>{rightTitle}</h3>
                <ul>
                    {rightList.map((item) => (
                        <li
                            key={item.id}
                            onDragStart={(e) =>
                                dragStartHandler(e, item, "right")
                            }
                            draggable
                            onClick={() => handleChange(item.value)}
                        >
                            {item.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DragDropList;
