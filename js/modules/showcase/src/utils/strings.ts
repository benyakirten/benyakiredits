export const capitalize = (str: string): string => str[0].toUpperCase() + str.slice(1);

export const capitalizeEveryWord = (sentence: string | Array<string>) => {
    const strArr = typeof sentence === 'string' ? sentence.split(' ') : sentence;
    const capitalizedArr = strArr.map(str => capitalize(str));
    return capitalizedArr.join(' ');
}