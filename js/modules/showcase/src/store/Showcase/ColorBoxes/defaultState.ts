const defaultState: ColorBoxesState = {
    gridRowGap: 0,
    setGridRowGap: (_: number) => {},
    boxHeight: 100,
    setBoxHeight: (_: number) => {},
    boxAmount: 24,
    setBoxAmount: (_: number) => {},
    ratioOfBoxesAlternating: 20,
    setRatioOfBoxesAlternating: (_: number) => {},
    boxAlternationDelay: 400,
    setBoxAlternationDelay: (_: number) => {},
    showColorNames: true,
    toggleShowColorNames: () => {}
};

export default defaultState;