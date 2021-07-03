const defaultState: FilterGeneratorState = {
    properties: [
        { name: 'blur', activated: true, unit: 'px' },
        { name: 'brightness', activated: false, unit: '%' },
        { name: 'contrast', activated: false, unit: '%' },
        { name: 'hue-rotate', activated: true, unit: 'deg' },
        { name: 'invert', activated: false, unit: '%' },
        { name: 'saturate', activated: false, unit: '%' },
    ],
    togglePropertyAvailability: (_: string) => { },
    blur: 1,
    setBlur: (_: number) => { },
    brightness: 0,
    setBrightness: (_: number) => { },
    contrast: 0,
    setContrast: (_: number) => { },
    hueRotate: 40,
    setHueRotate: (_: number) => { },
    invert: 0,
    setInvert: (_: number) => { },
    saturate: 0,
    setSaturate: (_: number) => { },
    randomize: () => {},
    randomizeCurrentProperties: () => {}
}

export default defaultState;