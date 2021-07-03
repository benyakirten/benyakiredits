type ConcentricCirclesState = {
    numberOfCircles: number;
    setNumberOfCircles: (newValue: number) => void;
    startRadius: number;
    setStartRadius: (newValue: number) => void;
    radiusDelta: number;
    setRadiusDelta: (newValue: number) => void;
    startingColor: string;
    setStartingColor: (color: string) => void;
    endingColor: string;
    setEndingColor: (color: string) => void;
    colorRandomization: boolean;
    toggleColorRandomization: () => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
}