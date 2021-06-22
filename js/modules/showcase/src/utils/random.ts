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