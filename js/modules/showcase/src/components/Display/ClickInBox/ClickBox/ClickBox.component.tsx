import React, { useContext, useState, createRef, useEffect } from "react";

import classes from "./ClickBox.module.scss";

import { isDark } from "@Util/colors";

import ClickBoxContext from "@ClickBoxContext";
import ClickAnimation from "./ClickAnimation/ClickAnimation.component";

const ClickBox: React.FC = () => {
    const clickBoxCtx = useContext(ClickBoxContext);
    const clickBoxRef = createRef<HTMLDivElement>();
    // To show instructional div only if the user hasn't clicked the element yet
    const [noClicksYet, setNoClicksYet] = useState<boolean>(true);
    const [coords, setCoords] = useState<Array<CoordsWithId>>([]);
    const activateAnimation: React.MouseEventHandler<HTMLDivElement> = (e) => {
        // We are getting the position of the click then finding out the offset
        // relative to the parent element in terms of pixels - so that the
        // animation can be placed there absolutely
        setNoClicksYet(false);
        const { clientX, clientY } = e;
        const { left, top } = clickBoxRef.current!.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const id = Math.random();
        if (clickBoxCtx.randomization) clickBoxCtx.randomizeAnimation();
        setCoords((prevValue) => [...prevValue, { x, y, id }]);
        setTimeout(() => {
            setCoords((prevValue) =>
                prevValue.filter((coord) => coord.id !== id)
            );
        }, clickBoxCtx.length);
    };

    // If the user reverses the direction, empty out the coordinates
    // Because the last click may play backwards, which is unpleasant UX
    useEffect(() => setCoords([]), [clickBoxCtx.expand]);
    return (
        <div
            className={classes.background}
            style={{
                backgroundColor: clickBoxCtx.backgroundColor,
                opacity: clickBoxCtx.parentOpacity / 100,
            }}
            onClick={activateAnimation}
            ref={clickBoxRef}
        >
            {coords.length > 0 ? (
                coords.map((coord) => (
                    <ClickAnimation key={coord.id} x={coord.x} y={coord.y} />
                ))
            ) : noClicksYet ? (
                <div
                    className={classes.noClick}
                    style={{
                        color: isDark(clickBoxCtx.backgroundColor)
                            ? "#fff"
                            : "#000",
                    }}
                >
                    Click to get started
                </div>
            ) : null}
        </div>
    );
};

export default ClickBox;
