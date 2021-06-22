import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";

import classes from "./ClickList.module.scss";
import { slideLeftToRight } from "@Data/transitions";

const ClickList: React.FC<IClickListProps> = ({
    list,
    itemKey,
    handleClick,
}) => {
    return (
        <TransitionGroup className={classes.list} component="ul">
            {list.map((item: any) => (
                <Transition key={item.id} timeout={400} in={true} appear={true} unmountOnExit>
                    {(state) => (
                        <li
                            onClick={() => handleClick(item)}
                            style={{
                                ...slideLeftToRight[state],
                                ...slideLeftToRight.default,
                            }}
                        >
                            {item[itemKey]}
                        </li>
                    )}
                </Transition>
            ))}
        </TransitionGroup>
    );
};

export default ClickList;
