import React from "react";

import classes from "./ClickList.module.scss";

const ClickList: React.FC<IClickListProps> = ({
    list,
    itemKey,
    handleClick,
}) => {
    return (
        <ul className={classes.list}>
            {list.map((item: any) => (
                <li key={item[itemKey]} onClick={() => handleClick(item)}>{item[itemKey]}</li>
            ))}
        </ul>
    );
};

export default ClickList;
