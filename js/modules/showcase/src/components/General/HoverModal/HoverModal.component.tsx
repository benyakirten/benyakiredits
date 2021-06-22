import React, { useState } from "react";
import { Transition } from "react-transition-group";

import classes from "./HoverModal.module.scss";
import { fadeFoldTopLeft, fadeFoldTopRight } from '@Data/transitions';

const HoverModal: React.FC<HoverModalProps> = ({
    children,
    theme,
    direction,
}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const finalTransition = direction === 'left'
        ? fadeFoldTopLeft
        : fadeFoldTopRight;
    const modalPosition = direction === 'left'
        ? { right: '2rem '}
        : { left: '2rem' };
    return (
        <div
            className={classes.hoverable}
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
        >
            <span
                className={classes.infoBubble}
                style={{
                    border:
                        theme === "light"
                            ? "2px solid #f7f1e3"
                            : "2px solid #484018",
                    color: theme === "light" ? "#f7f1e3" : "#484018",
                }}
            >
                i
            </span>
            <Transition in={showModal} timeout={400} mountOnEnter>
                {(state) => (
                    <dialog
                        open={showModal}
                        style={{
                            ...finalTransition.default,
                            ...modalPosition,
                            ...finalTransition[state]
                        }}
                    >
                        <article>{children}</article>
                    </dialog>
                )}
            </Transition>
        </div>
    );
};

export default HoverModal;
