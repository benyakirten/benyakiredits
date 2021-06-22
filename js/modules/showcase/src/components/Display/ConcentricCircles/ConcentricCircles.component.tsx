import React, { useContext } from "react";

import OptionsContext from "@Store/Options/Options.context";
import { ConcentricCirclesContextProvider } from "@Store/Showcase/ConcentricCircles/ConcentricCircles.context";

import ShowcaseItem from "@Comp/UI/ShowcaseItem/ShowcaseItem.component";
import ConcentricCirclesCanvas from "./ConcentricCirclesCanvas/ConcentricCirclesCanvas.component";
import ConcentricCirclesControls from "./ConcentricCirclesControls/ConcentricCirclesControls.component";
import Description from "@Comp/UI/Description/Description.component";

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
