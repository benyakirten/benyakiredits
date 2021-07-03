type Coords = {
    x: number;
    y: number;
}

type CoordsWithId = Coords & {
    id: number;
}

type Corners = {
    topLeft: Coords;
    topRight: Coords;
    bottomRight: Coords;
    bottomLeft: Coords;
}

type AnimationShape = keyof IShape;

interface IShape {
    'square'    : string;
    'star'      : string;
    'cross'     : string;
    'rhombus'   : string;
    'frame'     : string;
    'arrow'     : string;
    'trapezoid' : string;
    'circle'    : string;
    'random'    : string;
}

type ClickBoxState = {
    shape: AnimationShape;
    setShape: (shape: AnimationShape) => void;
    animationColor: string;
    setAnimationColor: (color: string) => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
    length: number;
    setLength: (newValue: number) => void;
    expand: boolean;
    toggleExpand: () => void;
    size: number;
    setSize: (newValue: number) => void;
    parentOpacity: number;
    setParentOpacity: (newValue: number) => void;
    randomization: boolean;
    toggleRandomization: () => void;
    randomizeAnimation: () => void;
}