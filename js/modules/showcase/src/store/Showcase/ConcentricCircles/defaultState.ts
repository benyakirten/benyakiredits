const defaultState: ConcentricCirclesState = {
    numberOfCircles: 50,
    setNumberOfCircles: (_: number) => {},
    startRadius: 1,
    setStartRadius: (_: number) => {},
    radiusDelta: 1.15,
    setRadiusDelta: (_: number) => {},
    startingColor: '#ff00ff',
    setStartingColor: (_: string) => {},
    endingColor: '#00ff00',
    setEndingColor: (_: string) => {},
    colorRandomization: true,
    toggleColorRandomization: () => {},
    backgroundColor: '#484018',
    setBackgroundColor: (_: string) => {}
}

export default defaultState;