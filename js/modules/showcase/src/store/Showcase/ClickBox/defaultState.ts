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
    parentOpacity: 0.8,
    setParentOpacity: (_: number) => {}
}

export default defaultState;