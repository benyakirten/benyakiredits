type RangeHook = (defaultValue: number, rangeConstant: RangeValues) => [number, (newValue: number) => void];
type ColorHook = (defaultColor: string) => [string, (newColor: string) => void];
type ToggleHook = (defaultValue: boolean) => [boolean, () => void];