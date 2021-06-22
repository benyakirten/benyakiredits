import React, { createContext, useState } from "react";
import defaultState from "./DefaultState";

const OptionsContext = createContext(defaultState);

export const OptionsContextProvider: React.FC = ({ children }) => {
    // showControls, showDescription and shownItem are retrieved from local storage
    // if they have been set before. Otherwise defaults will be used
    // Possible idea: "Remember me" option to be toggled - info about how
    // data is stored - located on Sidebar component
    const _showControlsLS = localStorage.getItem("BBlSh_SC");
    const _showControls: boolean = !!_showControlsLS
        ? JSON.parse(_showControlsLS)
        : true;
    const [showControls, setShowControls] = useState<boolean>(_showControls);
    const toggleControls = () => {
        setShowControls((prevState) => {
            localStorage.setItem("BBlSh_SC", JSON.stringify(!prevState));
            return !prevState;
        });
    };

    const _showDescriptionLS = localStorage.getItem("BBlSh_SD");
    const _showDescription: boolean = !!_showDescriptionLS
        ? JSON.parse(_showDescriptionLS)
        : true;
    const [showDescription, setShowDescription] =
        useState<boolean>(_showDescription);
    const toggleDescription = () => {
        setShowDescription((prevState) => {
            localStorage.setItem("BBlSh_SD", JSON.stringify(!prevState));
            return !prevState;
        });
    };

    const _shownItemLS = localStorage.getItem("BBlSh_SI");
    const _shownItem: ShowcaseItem = _shownItemLS
        ? JSON.parse(_shownItemLS)
        : defaultState.shownItem;
    const [shownItem, setShownItem] = useState<ShowcaseItem>(_shownItem);
    const setShowcaseItem = (item: ShowcaseItem) => {
        localStorage.setItem("BBlSh_SI", JSON.stringify(item));
        setShownItem(item);
    };

    const context: OptionsState = {
        showControls,
        toggleControls,
        showDescription,
        toggleDescription,
        shownItem,
        setShowcaseItem,
    };
    return (
        <OptionsContext.Provider value={context}>
            {children}
        </OptionsContext.Provider>
    );
};

export default OptionsContext;
