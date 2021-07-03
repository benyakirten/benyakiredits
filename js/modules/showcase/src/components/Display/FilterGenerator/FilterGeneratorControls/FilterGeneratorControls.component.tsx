import React, { useContext } from "react";

import classes from "./FilterGeneratorControls.module.scss";

import FilterGeneratorContext from "@FilterGeneratorContext";
import { FILTER_PROPERTIES } from "@Data/constants/showcase/filterGenerator";
import { capitalizeEveryWord } from "@Util/strings";

import Subtitle from "@Type/Subtitle/Subtitle.component";
import Button from "@UI/Button/Button.component";
import Range from "@Inputs/Range/Range.component";
import DragDropList from "@Comp/Inputs/DragDrop/DragDrop.component";

const FilterGeneratorControls: React.FC = () => {
    const filterGeneratorCtx = useContext(FilterGeneratorContext);
    const getRangeChangeHandler = (
        name: FilterType
    ): IRangeProps["handleRangeChange"] => {
        const _name = capitalizeEveryWord(name.split("-")).replace(" ", "");
        const handlerName = `set${_name}` as keyof FilterGeneratorState;
        return filterGeneratorCtx[
            handlerName
        ] as IRangeProps["handleRangeChange"];
    };
    const activeFilters = filterGeneratorCtx.properties
        .filter((p) => p.activated)
        .map((p) => ({ id: p.name, value: p.name }));
    const inactiveFilters = filterGeneratorCtx.properties
        .filter((p) => !p.activated)
        .map((p) => ({ id: p.name, value: p.name }));

    return (
        <div>
            <Subtitle>Controls</Subtitle>
            <DragDropList
                name="filter-generator-filters"
                leftList={activeFilters}
                leftTitle="Active Filters"
                rightList={inactiveFilters}
                rightTitle="Inactive Filters"
                handleChange={filterGeneratorCtx.togglePropertyAvailability}
            />
            {filterGeneratorCtx.properties
                .filter((p) => p.activated)
                .map((p) => p.name)
                .map((p) => (
                    <Range
                        key={p}
                        rangeConsts={
                            FILTER_PROPERTIES.find((prop) => prop.name === p)!
                        }
                        value={
                            filterGeneratorCtx[
                                p === "hue-rotate" ? "hueRotate" : p
                            ]
                        }
                        labelText={capitalizeEveryWord(p.replace("-", " "))}
                        name={"filter-generator-" + p}
                        handleRangeChange={getRangeChangeHandler(p)}
                    />
                ))
            }
            <div className={classes.buttonGroup}>
                <Button onClick={filterGeneratorCtx.randomize}>
                    Randomize
                </Button>
                <Button onClick={filterGeneratorCtx.randomizeCurrentProperties}>
                    Randomize Active Properties
                </Button>
            </div>
        </div>
    );
};

export default FilterGeneratorControls;
