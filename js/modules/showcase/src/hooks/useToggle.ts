import { useState } from 'react';

const useToggle: ToggleHook = (defaultValue: boolean) => {
    const [value, _setValue] = useState<boolean>(defaultValue);
    const setValue = () => _setValue(!value);
    return [value, setValue];
};

export default useToggle;