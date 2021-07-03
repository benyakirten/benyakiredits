import React, { useContext } from "react";

import OptionsContext from "@Options";
import { ClickBoxContentProvider } from "@ClickBoxContext";

import ShowcaseItem from "@UI/ShowcaseItem/ShowcaseItem.component";
import Description from "@UI/Description/Description.component";
import ClickBox from "./ClickBox/ClickBox.component";
import ClickBoxControls from "./ClickBoxControls/ClickBoxControls.component";

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
