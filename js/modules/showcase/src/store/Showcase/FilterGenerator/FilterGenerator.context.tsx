import React, { useState, createContext } from "react";

import defaultState from "./defaultState";

import useRange from "@Hooks/useRange";

import { FILTER_PROPERTIES } from "@Data/constants/showcase/filterGenerator";
import { getRandomItem } from "@Util/random";

const FilterGeneratorContext = createContext(defaultState);

export const FilterGeneratorContextProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [properties, setGeneratorProperties] = useState<
        Array<ActivatableFilter>
    >(defaultState.properties);
    const togglePropertyAvailability = (type: string) => {
        setGeneratorProperties((prevValue) =>
            prevValue.map((p) =>
                p.name === type ? { ...p, activated: !p.activated } : p
            )
        );
    };

    const [blur, setBlur] = useRange(defaultState.blur, FILTER_PROPERTIES[0]);
    const [brightness, setBrightness] = useRange(
        defaultState.brightness,
        FILTER_PROPERTIES[1]
    );
    const [contrast, setContrast] = useRange(
        defaultState.contrast,
        FILTER_PROPERTIES[2]
    );
    const [hueRotate, setHueRotate] = useRange(
        defaultState.hueRotate,
        FILTER_PROPERTIES[3]
    );
    const [invert, setInvert] = useRange(
        defaultState.invert,
        FILTER_PROPERTIES[4]
    );
    const [saturate, setSaturate] = useRange(
        defaultState.saturate,
        FILTER_PROPERTIES[5]
    );

    const getRandomValueForIndex = (ind: number) => {
        return (
            Math.floor(
                Math.random() * FILTER_PROPERTIES[ind].max -
                    FILTER_PROPERTIES[ind].min
            ) + FILTER_PROPERTIES[ind].min
        );
    };

    const performRandomization = (propsToRandomize: Array<FilterType>) => {
        propsToRandomize.forEach((prop) => {
            switch (prop) {
                case "blur":
                    setBlur(getRandomValueForIndex(0));
                    break;
                case "brightness":
                    setBrightness(getRandomValueForIndex(1));
                    break;
                case "contrast":
                    setContrast(getRandomValueForIndex(2));
                    break;
                case "hue-rotate":
                    setHueRotate(getRandomValueForIndex(3));
                    break;
                case "invert":
                    setInvert(getRandomValueForIndex(4));
                    break;
                case "saturate":
                    setSaturate(getRandomValueForIndex(5));
                    break;
                default:
                    break;
            }
        });
    };

    const deactivateAllProperties = () => {
        setGeneratorProperties((prevValue) =>
            prevValue.map((p) => ({ ...p, activated: false }))
        );
    };

    const randomize = () => {
        // Reset all properties status
        deactivateAllProperties();
        // At least 1 property should be included
        const numPropertiesToRandomize =
            Math.floor(Math.random() * (properties.length - 1)) + 1;
        const propertiesToRandomize: Array<FilterType> = [];
        for (let i = 0; i < numPropertiesToRandomize; i++) {
            let chosenProperty = getRandomItem(properties).name;
            while (propertiesToRandomize.includes(chosenProperty)) {
                chosenProperty = getRandomItem(properties).name;
            }
            propertiesToRandomize.push(chosenProperty);
            togglePropertyAvailability(chosenProperty);
        }
        performRandomization(propertiesToRandomize);
    };

    const randomizeCurrentProperties = () => {
        const propertiesToRandomize: Array<FilterType> = properties
            .filter((p) => p.activated)
            .map((p) => p.name);
        performRandomization(propertiesToRandomize);
    };

    const value: FilterGeneratorState = {
        properties,
        togglePropertyAvailability,
        blur,
        setBlur,
        brightness,
        setBrightness,
        contrast,
        setContrast,
        hueRotate,
        setHueRotate,
        invert,
        setInvert,
        saturate,
        setSaturate,
        randomize,
        randomizeCurrentProperties,
    };

    return (
        <FilterGeneratorContext.Provider value={value}>
            {children}
        </FilterGeneratorContext.Provider>
    );
};

export default FilterGeneratorContext;
