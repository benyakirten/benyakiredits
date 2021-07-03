export function getRandomItem<T>(arr: Array<T>): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomKeyFromObject(obj: Object) {
    const _keys = Object.keys(obj);
    return getRandomItem(_keys);
}

export function getRandomValueFromObject(obj: Object) {
    const _values = Object.values(obj);
    return getRandomItem(_values);
}

export function getRandomEntryFromObject(obj: Object) {
    const _entries = Object.entries(obj);
    return getRandomItem(_entries);
}

export function getRandomFromRange(range: RangeValues): number {
    const _max = Math.floor(Math.random() * (range.max / range.step)) * range.step;
    return _max > range.min ? _max : range.min;
}