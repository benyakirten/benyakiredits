type TransitionStyle = {
    entering: { [key: string]: string | number };
    entered: { [key: string]: string | number };
    exiting: { [key: string]: string | number };
    exited: { [key: string]: string | number };
    unmounted: { [key: string]: string | number };
    default: { [key: string]: string | number };
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

type ShowcaseItem = {
    path: string;
    id: string;
    name: string;
    description: string;
    meta: Array<string>;
}

type RangeValues = {
    min: number;
    max: number;
    step: number;
}