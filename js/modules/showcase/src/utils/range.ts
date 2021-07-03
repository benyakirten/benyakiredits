export const rangeToCallback = (val: number, rangeValues: RangeValues, callback: Function) => {
    if (val >= rangeValues.max) callback(rangeValues.max);
    else if (val <= rangeValues.min) callback(rangeValues.min);
    // JS Modulo doesn't handle values < 1 very well
    else if (val % rangeValues.step < 0.001) callback(val);
}

export const betweenMinAndMax = (constants: RangeValues, val: number) => {
    if (val >= constants.max) return constants.max;
    else if (val <= constants.min) return constants.min;
    else return val;
}