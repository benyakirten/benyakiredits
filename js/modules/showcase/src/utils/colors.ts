import { RGB_RANGE } from "@Data/constants";
import { betweenMinAndMax } from "./range";

export const separateRGB = (color: string): CSSHex => {
    if (!(/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(color))) {
        throw new Error(`${color} unab;e to be parsed as CSS hex`)
    }
    return color.length === 4
        ? {
            r: color.slice(1, 2).repeat(2),
            g: color.slice(2, 3).repeat(2),
            b: color.slice(3, 4).repeat(2),
        }
        : {
            r: color.slice(1, 3),
            g: color.slice(3, 5),
            b: color.slice(5, 7),
        };
};

export const changeHexToDigit = (color: CSSHex): RGBNumber => ({
    r: parseInt(color.r, 16),
    g: parseInt(color.g, 16),
    b: parseInt(color.b, 16)
});

export const changeDigitToHex = (color: RGBNumber): CSSHex => ({
    r: color.r.toString(16),
    g: color.g.toString(16),
    b: color.b.toString(16)
});

export const uniteRGB = (color: CSSHex): string => `#${color.r}${color.g}${color.b}`;

export const getAverageOffsetFromHex = (iterations: number, startColor: CSSHex, endColor: CSSHex): RGBNumber => {
    const startDigits = changeHexToDigit(startColor);
    const endDigits = changeHexToDigit(endColor);

    const aveRed = Math.floor(endDigits.r - startDigits.r / iterations);
    const aveGreen = Math.floor(endDigits.g - startDigits.g / iterations);
    const aveBlue = Math.floor(endDigits.b - startDigits.b / iterations);

    return {
        r: aveRed,
        g: aveGreen,
        b: aveBlue
    };
}

export const getAverageOffsetFromDigits = (iterations: number, startColor: RGBNumber, endColor: RGBNumber): RGBNumber => {
    const aveRed = Math.floor((endColor.r - startColor.r) / iterations);
    const aveGreen = Math.floor((endColor.g - startColor.g) / iterations);
    const aveBlue = Math.floor((endColor.b - startColor.b) / iterations);

    return {
        r: aveRed,
        g: aveGreen,
        b: aveBlue
    };
}

export function* hexForIteration(iterations: number, startColor: string, endColor: string) {
    const startDigits = changeHexToDigit(separateRGB(startColor));
    const endDigits = changeHexToDigit(separateRGB(endColor));
    const offset = getAverageOffsetFromDigits(iterations, startDigits, endDigits);
    yield startColor;
    let { r, g, b } = startDigits;
    for (let i = 0; i < iterations - 1; i++) {
        r = betweenMinAndMax(RGB_RANGE, r + offset.r);
        g = betweenMinAndMax(RGB_RANGE, g + offset.g);
        b = betweenMinAndMax(RGB_RANGE, b + offset.b);
        const _color = changeDigitToHex({ r, g, b });
        yield uniteRGB(_color);
    }
    return endColor;
}

const getLuminance = (color: CSSHex): number => {
    const r = parseInt(color.r, 16) / 255;
    const g = parseInt(color.g, 16) / 255;
    const b = parseInt(color.b, 16) / 255;
    return (0.2126 * r + 0.7152 * g + 0.0722 * b);
}

export const isDark = (color: CSSHex | string): boolean => {
    const _color = typeof color === 'string'
        ? separateRGB(color)
        : color;
    return getLuminance(_color) < 0.5;
}