import React, { useContext } from "react";

import OptionsContext from "@Options";
import { ColorBoxesContextProvider } from "@ColorBoxesContext";

import ColorBoxesGrid from './ColorBoxesGrid/ColorBoxesGrid.component';
import ColorBoxesControls from './ColorBoxesControls/ColorBoxesControls.component';

import ShowcaseItem from "@UI/ShowcaseItem/ShowcaseItem.component";
import Description from "@UI/Description/Description.component";

const ColorBoxes: React.FC = () => {
    const optionsCtx = useContext(OptionsContext);
    return (
        <ColorBoxesContextProvider>
            <ShowcaseItem
                controls={<ColorBoxesControls />}
                description={
                    <Description
                        description={optionsCtx.shownItem.description}
                        meta={optionsCtx.shownItem.meta}
                    />
                }
            >
                <ColorBoxesGrid />
            </ShowcaseItem>
        </ColorBoxesContextProvider>
    );
};

export default ColorBoxes;
