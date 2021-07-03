import React, { createRef, useContext, useState, useEffect } from "react";

import classes from "./ConcentricCirclesCanvas.module.scss";

import { NAMED_COLOR_TO_HEXES } from "@Constants/general";
import { getRandomValueFromObject } from "@Util/random";
import {
    getAbsoluteCorners,
    getRelativeCorners,
    getNearestRelativeCorner,
    clearCanvas,
    drawCircle,
} from "@Util/canvas";
import { hexForIteration } from "@Util/colors";

import ConcentricCirclesContext from "@ConcentricCirclesContext";

const ConcentricCirclesCanvas: React.FC = () => {
    const canvasRef = createRef<HTMLCanvasElement>();
    const [boundingRect, setBoundingRect] = useState<DOMRect>();
    const [absoluteCanvasCorners, setAbsoluteCanvasCorners] =
        useState<Corners>();
    const [relativeCanvasCorners, setRelativeCanvasCorners] =
        useState<Corners>();
    const concentricCirclesCtx = useContext(ConcentricCirclesContext);
    useEffect(() => {
        // The canvas rect can only be set when the component has mounted
        // Also to note: this will recalibrate the boundingRect (that decides the corners)
        // every time the window is resized
        setBoundingRect(canvasRef.current?.getBoundingClientRect());
    }, [window.innerWidth, window.innerHeight]);
    useEffect(() => {
        if (!boundingRect) {
            return;
        }
        const { left, top, width, height } = boundingRect;
        setAbsoluteCanvasCorners(getAbsoluteCorners(left, top, width, height));
        setRelativeCanvasCorners(getRelativeCorners(width, height));
    }, [boundingRect]);

    const randomizeStartAndEndColors = () => {
        concentricCirclesCtx.setStartingColor(
            getRandomValueFromObject(NAMED_COLOR_TO_HEXES)
        );
        let _color = getRandomValueFromObject(NAMED_COLOR_TO_HEXES);
        // Make sure the start and end colors aren't the same
        while (_color === concentricCirclesCtx.endingColor) {
            _color = getRandomValueFromObject(NAMED_COLOR_TO_HEXES);
        }
        concentricCirclesCtx.setEndingColor(_color);
    };

    const activateAnimations: React.MouseEventHandler<HTMLCanvasElement> = (
        e
    ) => {
        setBoundingRect(canvasRef.current!.getBoundingClientRect());
        if (
            !absoluteCanvasCorners ||
            !relativeCanvasCorners ||
            !canvasRef.current ||
            !canvasRef.current.getContext
        ) {
            return;
        }
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;
        let point = getNearestRelativeCorner(
            absoluteCanvasCorners,
            relativeCanvasCorners,
            { x: e.clientX, y: e.clientY }
        );
        // Check if we have color randomization
        if (concentricCirclesCtx.colorRandomization) {
            randomizeStartAndEndColors();
        }
        requestAnimationFrame(() =>
            drawCanvasCircles(
                ctx,
                point,
                concentricCirclesCtx.startRadius,
                hexForIteration(
                    concentricCirclesCtx.numberOfCircles,
                    concentricCirclesCtx.startingColor,
                    concentricCirclesCtx.endingColor
                )
            )
        );
    };
    const drawCanvasCircles = (
        ctx: CanvasRenderingContext2D,
        point: Coords,
        radius: number,
        hexGenerator: Generator<string, string, unknown>
    ) => {
        const { width, height } = boundingRect!;
        if (radius < Math.sqrt(width ** 2 + height ** 2)) {
            clearCanvas(ctx, width, height);
            for (let i = 0; i < concentricCirclesCtx.numberOfCircles; i++) {
                const color = hexGenerator.next().value;
                drawCircle(
                    ctx,
                    point,
                    radius + i,
                    color
                );
            }
            requestAnimationFrame(() =>
                drawCanvasCircles(
                    ctx,
                    point,
                    radius * concentricCirclesCtx.radiusDelta,
                    hexForIteration(
                        concentricCirclesCtx.numberOfCircles,
                        concentricCirclesCtx.startingColor,
                        concentricCirclesCtx.endingColor
                    )
                )
            );
        } else {
            clearCanvas(ctx, width, height);
        }
    };
    return (
        <canvas
            ref={canvasRef}
            className={classes.canvas}
            onMouseEnter={activateAnimations}
            style={{ backgroundColor: concentricCirclesCtx.backgroundColor }}
            // Canvas width and height are different from the CSS width and height
            // of the canvas element - I had no idea and wasted quite a few hours on it
            width={boundingRect ? boundingRect.width : 300}
            height={boundingRect ? boundingRect.height : 150}
        />
    );
};

export default ConcentricCirclesCanvas;
