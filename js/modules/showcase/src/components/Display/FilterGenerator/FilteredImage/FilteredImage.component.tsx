import React, { useState, useEffect, useContext } from "react";

import classes from "./FilteredImage.module.scss";

import FilterGeneratorContext from "@FilterGeneratorContext";

import Loading from "@Gen/Loading/Loading.component";
import Button from "@UI/Button/Button.component";

const FilteredImage: React.FC = () => {
    const filterGeneratorCtx = useContext(FilterGeneratorContext);
    const [imageUrl, setImageUrl] = useState<string>();
    const [errorState, setErrorState] = useState<boolean>(false);
    const [filterString, setFilterString] = useState<string>();

    const fetchImage = () => {
        setErrorState(false);
        setImageUrl(undefined);
        fetch("https://api.github.com/users/benyakirten")
            .then((res) => {
                if (!res.ok) throw new Error("Unable to fetch");
                return res.json();
            })
            .then((data) => {
                setErrorState(false);
                setImageUrl(data.avatar_url);
            })
            .catch(() => setErrorState(true));
    };

    useEffect(() => {
        fetchImage();
    }, []);

    useEffect(() => {
        const _filterString = filterGeneratorCtx.properties
            .filter((p) => p.activated)
            .map(
                (p) =>
                    `${p.name}(${
                        filterGeneratorCtx[
                            p.name === "hue-rotate"
                                ? "hueRotate"
                                : (p.name as keyof FilterGeneratorState)
                        ]
                    }${p.unit})`
            )
            .join(" ");
        setFilterString(_filterString);
    }, [
        filterGeneratorCtx.properties,
        filterGeneratorCtx.blur,
        filterGeneratorCtx.brightness,
        filterGeneratorCtx.contrast,
        filterGeneratorCtx.hueRotate,
        filterGeneratorCtx.invert,
        filterGeneratorCtx.saturate,
    ]);

    return (
        <div className={classes.container}>
            {errorState && (
                <div className={classes.center}>
                    <span className={classes.errorText}>
                        Oops! It looks like something went wrong.
                    </span>
                    <Button onClick={fetchImage}>Try again</Button>
                </div>
            )}
            {!imageUrl && !errorState && (
                <div className={classes.center}>
                    <Loading />
                </div>
            )}
            {imageUrl && !errorState && (
                <div className={classes.loadedCorrectly}>
                    <img
                        src={imageUrl}
                        style={{
                            filter: filterString ? filterString : "",
                        }}
                    />
                    <div className={classes.filterString}>
                        filter: {filterString}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilteredImage;
