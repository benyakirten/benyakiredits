type ColorBox = {
    color: string;
    id: string;
    text: NamedColor;
}

type UsableColorAndHex = ColorNameAndHex & {
    used: boolean;
}

type ColorNameToHex = {
    [key: NamedColor]: string;
}

type ColorNameAndHex = {
    name: NamedColor;
    hex: string;
}

type ColorBoxesState = {
    gridRowGap: number;
    setGridRowGap: (newValue: number) => void;
    boxHeight: number;
    setBoxHeight: (newValue: number) => void;
    boxAmount: number;
    setBoxAmount: (newValue: number) => void; 
    ratioOfBoxesAlternating: number;
    setRatioOfBoxesAlternating: (newValue: number) => void;
    boxAlternationDelay: number;
    setBoxAlternationDelay: (newValue: number) => void;
    showColorNames: boolean;
    toggleShowColorNames: () => void;
}