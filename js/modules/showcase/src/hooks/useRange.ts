import { useState } from 'react';

import { rangeToCallback } from '@Util/range';

const useRange: RangeHook = (defaultValue, rangeConstant) => {
    const [value, _setValue] = useState<number>(defaultValue);
    const setValue = (newValue: number) => {
        rangeToCallback(newValue, rangeConstant, _setValue);
    }
    return [value, setValue];
}

export default useRange;