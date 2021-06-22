import React, { useContext } from "react";

import OptionsContext from "@Store/Options/Options.context";
import { ClickBoxContentProvider } from "@Store/Showcase/ClickBox/ClickBox.context";

import ShowcaseItem from "@UI/ShowcaseItem/ShowcaseItem.component";
import ClickBox from "./ClickBox/ClickBox.component";
import ClickBoxControls from "./ClickBoxControls/ClickBoxControls.component";
import Description from "@Comp/UI/Description/Description.component";

const ClickInBox: React.FC = () => {
    const optionsCtx = useContext(OptionsContext);
    return (
        <ClickBoxContentProvider>
            <ShowcaseItem
                controls={<ClickBoxControls />}
                description={
                    <Description
                        description={optionsCtx.shownItem.description}
                        meta={optionsCtx.shownItem.meta}
                    />
                }
            >
                <ClickBox />
            </ShowcaseItem>
        </ClickBoxContentProvider>
    );
};

export default ClickInBox;
