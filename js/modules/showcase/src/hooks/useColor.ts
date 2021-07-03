import { useState } from 'react';

const useColor: ColorHook = (defaultColor: string) => {
    const [color, _setColor] = useState<string>(defaultColor);
    const setColor = (newColor: string) => {
        if (/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(newColor)) _setColor(newColor);
    }
    return [color, setColor];
}

export default useColor;