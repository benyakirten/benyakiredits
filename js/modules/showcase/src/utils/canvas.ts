export const getAbsoluteCorners = (left: number, top: number, width: number, height: number): Corners => {
    return {
        topLeft: { x: left, y: top },
        topRight: { x: left + width, y: top },
        bottomRight: { x: left + width, y: top + height },
        bottomLeft: { x: left, y: top + height }
    };
};

export const getRelativeCorners = (width: number, height: number): Corners => {
    return {
        // How is the bounding client rectangle different from the element's?
        // REACT!!!!!!
        topLeft: { x: 0, y: 0 },
        topRight: { x: width, y: 0 },
        bottomRight: { x: width, y: height },
        bottomLeft: { x: 0, y: height }
    };
}

export const getNearestRelativeCorner = (absCorners: Corners, relCorners: Corners, point: Coords): Coords => {
    let key: keyof Corners;
    let min: number = Infinity;
    let finalKey: keyof Corners = 'topLeft';
    for (key in absCorners) {
        const dist = Math.sqrt((absCorners[key].x - point.x) ** 2 + (absCorners[key].y - point.y) ** 2);
        if (dist < min) {
            finalKey = key;
            min = dist;
        }
    }
    return relCorners[finalKey];
}

export const clearCanvas = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
}

export const drawCircle = (ctx: CanvasRenderingContext2D, point: Coords, radius: number, color: string) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

