import { RGB_RANGE } from "@Data/constants/general";
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

export const changeHexToDigit = (color: CSSHex | string): RGBNumber => {
    const _color = typeof color === 'string'
        ? separateRGB(color)
        : color;
    return {
        r: parseInt(_color.r, 16),
        g: parseInt(_color.g, 16),
        b: parseInt(_color.b, 16)
    }
};

export const changeDigitToHex = (color: RGBNumber): CSSHex => {
    let r = color.r.toString(16);
    let g = color.g.toString(16);
    let b = color.b.toString(16);

    if (r.length === 1) r = r.repeat(2);
    if (g.length === 1) g = g.repeat(2);
    if (b.length === 1) b = b.repeat(2);

    return { r, g, b };
};

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

export const normalizeRGB = (color: RGBNumber): RGBNumber => {
    return {
        r: color.r / 255,
        g: color.g / 255,
        b: color.b / 255
    }
}

export const cssHexToHsl = (color: CSSHex | string): HSLNumber => {
    const _color = changeHexToDigit(color);
    const { r, g, b } = normalizeRGB(_color);

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    if (max === 0 && delta === 0) {
        // Color is black
        return { h: 0, s: 0, l: 0 };
    }

    /*
     * For HSL the color wheel is divided into 6 sections: 2 red, 2 green, 2 blue
     * Red is the first 3rd of the wheel - 0 + offset within that quadrant
     * Green is the second 3rd of the wheel - 2 (== next section) + offset within that quadrant
     * Blue is the third 3rd of the wheel - 4 (== next section) + offset within that quadrant
    */

    const luminance = (max + min) / 2;
    const saturation = delta / max;
    let hue: number;
    if (r === max) {
        hue = Math.abs(g - b) / delta;
    } else if (g === max) {
        hue = 2 + Math.abs(r - b) / delta;
    } else {
        hue = 4 + Math.abs(r - g) / delta;
    }

    // Now we change it to 360 degrees
    hue *= 60;
    // A negative value means 360 - hue, so we give its value in the positive direction
    if (hue < 0) hue += 360;
    return { h: hue, s: saturation, l: luminance };
}

export const hslToCssHex = ({ h, s, l }: HSLNumber): CSSHex => {
    // If it's grey
    if (s === 0) {
        return { r: l.toString(16), g: l.toString(16), b: l.toString(16) };
    }

    // What quadrant are we in?
    const i = Math.floor(h / 60);

    const f = h / 60 - i;
    const p = l * (1 - s);
    const q = l * (1 - s * f);
    const t = l * (1 - s * (1 - f));

    // Convert to hexes now
    const lFinal = Math.floor(l * 255).toString(16);
    const pFinal = Math.floor(p * 255).toString(16);
    const qFinal = Math.floor(q * 255).toString(16);
    const tFinal = Math.floor(t * 255).toString(16);

    switch (i) {
        case 0:
            return { r: lFinal, g: tFinal, b: pFinal };
        case 1:
            return { r: qFinal, g: lFinal, b: pFinal };
        case 2:
            return { r: pFinal, g: lFinal, b: tFinal };
        case 3:
            return { r: pFinal, g: qFinal, b: lFinal };
        case 4:
            return { r: tFinal, g: pFinal, b: lFinal };
        default:
            return { r: lFinal, g: pFinal, b: qFinal };
    }
}

export const getContrast = (l1: number, l2: number): number =>
    l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);

export const getOppositeColor = (color: string): string => {
    const { r, g, b } = changeHexToDigit(color);
    const contrastingCssHex = changeDigitToHex({ r: 255 - r, g: 255 - g, b: 255 - b });

    // We need to calculate contrast - higher luminance divided by lower
    const originalLuminance = getLuminance(separateRGB(color)) + 0.05;
    const contrastingLuminance = getLuminance(contrastingCssHex) + 0.05;
    let contrast = getContrast(originalLuminance, contrastingLuminance);
    // If there isn't enough contrast, use the color with the inverse luminance
    if (contrast < 3) {
        const { h, s } = cssHexToHsl(contrastingCssHex);
        const newContrastingHex = hslToCssHex({ h, s, l: Math.abs(1 - originalLuminance) });

        // If there still isn't enough contrast we'll just return black/white
        // which always contrasts well
        const newContrastingLuminance = Math.abs(1 - originalLuminance) + 0.05;
        contrast = getContrast(originalLuminance, newContrastingLuminance);
        if (contrast < 3) {
            return originalLuminance < 0.5 ? "#ffffff" : "#000000";
        }
        return uniteRGB(newContrastingHex);
    }

    return uniteRGB(contrastingCssHex);
}