import React from 'react';

import classes from './Select.module.scss';
import Label from '../Label/Label.component';

const Select: React.FC<ISelectProps> = ({ value, name, options, labelText, handleChange }) => {
    const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
        handleChange(e.target.value)
    }
    return (
        <div className={classes.controlGroup}>
            <Label htmlFor={name}>{labelText}</Label>
            <select onChange={onSelectChange}>
                {
                    options.map(opt => (
                        <option
                            key={opt.value}
                            value={opt.value}
                            defaultValue={value}
                        >
                            {opt.display}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

export default Select;