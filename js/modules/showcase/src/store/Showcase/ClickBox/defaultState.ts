const defaultState: ClickBoxState = {
    shape: 'circle',
    setShape: (_: string) => {},
    animationColor: '#ded7b1',
    setAnimationColor: (_: string) => {},
    backgroundColor: '#484018',
    setBackgroundColor: (_: string) => {},
    length: 1000,
    setLength: (_: number) => {},
    expand: true,
    toggleExpand: () => {},
    size: 200,
    setSize: (_: number) => {},
    parentOpacity: 80,
    setParentOpacity: (_: number) => {},
    randomization: false,
    toggleRandomization: () => {},
    randomizeAnimation: () => {}
}

export default defaultState;