import React, { Fragment, useState } from "react";
import { Transition } from "react-transition-group";

import {
    fadeStretchOut,
    slideFromRightThenBack,
} from "@Data/transitions";

import Arrow from "./Arrow/Arrow.component";
import Sidebar from "./Sidebar/Sidebar.component";

const Handler: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    return (
        <Fragment>
            <Transition in={!showSidebar} timeout={400}>
                {(state) => (
                    <div
                        style={{
                            ...fadeStretchOut.default,
                            ...fadeStretchOut[state],
                            // Because the transition acts as a div over the item
                            // we have to set the sidebar's z-index here
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <Arrow onClick={() => setShowSidebar(true)} />
                    </div>
                )}
            </Transition>
            <Transition in={showSidebar} timeout={400} mountOnEnter>
                {(state) => (
                    <div style={{
                        ...slideFromRightThenBack.default,
                        ...slideFromRightThenBack[state],
                        // Because the transition acts as a div over the item
                        // we have to set the sidebar's z-index here
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <Sidebar onExit={() => setShowSidebar(false)} />
                    </div>
                )}
            </Transition>
        </Fragment>
    );
};

export default Handler;
