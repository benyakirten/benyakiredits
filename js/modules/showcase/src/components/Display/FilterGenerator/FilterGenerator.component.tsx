import React, { useContext } from "react";

import OptionsContext from "@Store/Options/Options.context";
import { FilterGeneratorContextProvider } from "@FilterGeneratorContext";

import FilteredImage from './FilteredImage/FilteredImage.component';
import FilterGeneratorControls from './FilterGeneratorControls/FilterGeneratorControls.component';

import ShowcaseItem from "@Comp/UI/ShowcaseItem/ShowcaseItem.component";
import Description from "@Comp/UI/Description/Description.component";

const FilterGenerator: React.FC = () => {
    const optionsCtx = useContext(OptionsContext);
    return (
        <FilterGeneratorContextProvider>
            <ShowcaseItem
                controls={<FilterGeneratorControls />}
                description={
                    <Description
                        description={optionsCtx.shownItem.description}
                        meta={optionsCtx.shownItem.meta}
                    />
                }
            >
                <FilteredImage />
            </ShowcaseItem>
        </FilterGeneratorContextProvider>
    );
};

export default FilterGenerator;
