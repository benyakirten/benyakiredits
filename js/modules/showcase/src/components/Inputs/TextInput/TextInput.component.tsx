import React from 'react';

import classes from './TextInput.module.scss';

const Search: React.FC<ITextInputProps> = ({ value, handleChange, name, labelText }) => {
    return (
        <div className={classes.controlGroup}>
            <label htmlFor={name}>{labelText}</label>
            <input type="text" value={value} onChange={handleChange} name={name} id={name} />
        </div>
    )
};

export default Search;