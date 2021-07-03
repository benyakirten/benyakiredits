import React, { useContext } from "react";

import OptionsContext from "@Options";
import { ConcentricCirclesContextProvider } from "@ConcentricCirclesContext";

import ShowcaseItem from "@UI/ShowcaseItem/ShowcaseItem.component";
import Description from "@UI/Description/Description.component";
import ConcentricCirclesCanvas from "./ConcentricCirclesCanvas/ConcentricCirclesCanvas.component";
import ConcentricCirclesControls from "./ConcentricCirclesControls/ConcentricCirclesControls.component";

const ConcentricCircles: React.FC = () => {
    const optionsCtx = useContext(OptionsContext);
    return (
        <ConcentricCirclesContextProvider>
            <ShowcaseItem
                controls={<ConcentricCirclesControls />}
                description={
                    <Description
                        description={optionsCtx.shownItem.description}
                        meta={optionsCtx.shownItem.meta}
                    />
                }
            >
                <ConcentricCirclesCanvas />
            </ShowcaseItem>
        </ConcentricCirclesContextProvider>
    );
};

export default ConcentricCircles;
