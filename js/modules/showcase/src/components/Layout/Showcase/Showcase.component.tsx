import React, { useContext, lazy, Suspense } from "react";

import classes from "./Showcase.module.scss";
import OptionsContext from "@Options";
import Loading from "@Gen/Loading/Loading.component";

// Apparently this doesn't work with webpack - how I wish it did
// import showcaseList from '../../../data/showcaseList';
// const allComponents: LazyComponentContainer = {};
// for (const item of showcaseList) {
//     allComponents[item.id] = lazy(() => import(item.path));
// }

const ClickInBox = lazy(
    () => import("@Disp/ClickInBox/ClickInBox.component")
);
const ConcentricCircles = lazy(
    () => import("@Disp/ConcentricCircles/ConcentricCircles.component")
);

const ColorBoxes = lazy(() => import("@Disp/ColorBoxes/ColorBoxes.component"));

const FilterGenerator = lazy(() => import ("@Disp/FilterGenerator/FilterGenerator.component"));

const Showcase: React.FC = () => {
    const optionsCtx = useContext<OptionsState>(OptionsContext);
    const shownItem = optionsCtx.shownItem;
    let OtherComponent: LazyComponent = undefined;
    switch (shownItem.id) {
        case "sh1":
            OtherComponent = ClickInBox;
            break;
        case "sh2":
            OtherComponent = ConcentricCircles;
            break;
        case "sh3":
            OtherComponent = ColorBoxes;
            break;
        case "sh4":
            OtherComponent = FilterGenerator;
            break;
        default:
            break;
    }
    return (
        <section>
            {!(shownItem.id.length > 0) ? (
                <div className={classes.empty}>
                    Please select an item from the showcase to the right to see
                    it here
                </div>
            ) : OtherComponent ? (
                <Suspense
                    fallback={
                        <div className={classes.empty}>
                            Loading...
                            <Loading />
                        </div>
                    }
                >
                    <div className={classes.component}>
                        <OtherComponent />
                    </div>
                </Suspense>
            ) : (
                <div className={classes.empty}>
                    Rut roh! The component couldn't load. Please tell Ben what
                    you were trying to do, but if you don't want to, click on
                    another component. Hopefully it will work.
                </div>
            )}
        </section>
    );
};

export default Showcase;
