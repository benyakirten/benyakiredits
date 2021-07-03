type TransitionStyle = {
    entering: { [key: string]: string | number };
    entered: { [key: string]: string | number };
    exiting: { [key: string]: string | number };
    exited: { [key: string]: string | number };
    unmounted: { [key: string]: string | number };
    default: { [key: string]: string | number };
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