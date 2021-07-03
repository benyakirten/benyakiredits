type FilterType = 'blur' | 'brightness' | 'contrast' | 'hue-rotate' | 'invert' | 'saturate';
type FilterUnits = 'px' | 'deg' | '%';
type FilterProperty = RangeValues & {
    unit: FilterUnits;
    name: FilterType;
}

type ActivatableFilter = {
    name: FilterType;
    activated: boolean;
    unit: FilterUnits;
}

type FilterGeneratorState = {
    properties: Array<ActivatableFilter>;
    togglePropertyAvailability: (toggledValue: string) => void;
    blur: number;
    setBlur: (newValue: number) => void;
    brightness: number;
    setBrightness: (newValue: number) => void;
    contrast: number;
    setContrast: (newValue: number) => void;
    hueRotate: number;
    setHueRotate: (newValue: number) => void;
    invert: number;
    setInvert: (newValue: number) => void;
    saturate: number;
    setSaturate: (newValue: number) => void;
    randomize: () => void;
    randomizeCurrentProperties: () => void;
}