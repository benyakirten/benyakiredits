type OptionsState = {
    showControls: boolean;
    toggleControls: () => void;
    showDescription: boolean;
    toggleDescription: () => void;
    shownItem: ShowcaseItem;
    setShowcaseItem: (item: ShowcaseItem) => void;
}

type ClickBoxState = {
    shape: AnimationShape;
    setShape: (shape: AnimationShape) => void;
    animationColor: string;
    setAnimationColor: (color: string) => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
    length: number;
    setLength: (length: number) => void;
    expand: boolean;
    toggleExpand: () => void;
    size: number;
    setSize: (size: number) => void;
    parentOpacity: number;
    setParentOpacity: (ratio: number) => void;
}

type ConcentricCirclesState = {
    numberOfCircles: number;
    setNumberOfCircles: (num: number) => void;
    startRadius: number;
    setStartRadius: (radius: number) => void;
    radiusDelta: number;
    setRadiusDelta: (delta: number) => void;
    startingColor: string;
    setStartingColor: (color: string) => void;
    endingColor: string;
    setEndingColor: (color: string) => void;
    colorRandomization: boolean;
    toggleColorRandomization: () => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
}