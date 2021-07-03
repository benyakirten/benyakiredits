import React, { useContext, useState, useEffect } from "react";

import classes from "./Sidebar.module.scss";
import showcaseList from "@Data/showcaseList";
import OptionsContext from "@Options";

import Checkbox from "@Inputs/Checkbox/Checkbox.component";
import TextInput from "@Inputs/TextInput/TextInput.component";
import ClickList from "@Inputs/ClickList/ClickList.component";
import Subtitle from '@Type/Subtitle/Subtitle.component';

const Sidebar: React.FC<SidebarProps> = ({ onExit }) => {
    const SEARCH_TIMEOUT_TIME = 500; // milliseconds - waits half a second to apply filter
    const optionsCtx = useContext<OptionsState>(OptionsContext);
    const [searchInput, setSearchInput] = useState<string>("");
    const [filterTimeout, setFilterTimeout] = useState<NodeJS.Timeout>();
    const [filteredShowcase, setFilteredShowcase] =
        useState<Array<ShowcaseItem>>(showcaseList);
    const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
        setSearchInput(e.currentTarget.value);
    useEffect(() => {
        if (filterTimeout) {
            clearInterval(filterTimeout);
            setFilterTimeout(undefined);
        }
        const timeout = setTimeout(() => {
            if (!searchInput) setFilteredShowcase(showcaseList);
            else {
                setFilteredShowcase(
                    showcaseList.filter((item) =>
                        item.meta.includes(searchInput.toLowerCase())
                    )
                );
            }
        }, SEARCH_TIMEOUT_TIME);
        setFilterTimeout(timeout);
    }, [searchInput]);

    const handleListClick = (e: ShowcaseItem) => {
        optionsCtx.setShowcaseItem(e);
        onExit();
    };
    return (
        <aside className={classes.sidebar}>
            <button className={classes.return} onClick={onExit}>
                &rarr;
            </button>
            <div className={classes.content}>
                <div className={classes.column}>
                    <Subtitle theme="dark">Choose an item for the showcase</Subtitle>
                    <ClickList
                        list={filteredShowcase}
                        itemKey="name"
                        handleClick={handleListClick}
                    />
                </div>
                <div className={classes.column}>
                    <Subtitle theme="dark">General Controls:</Subtitle>
                    <Checkbox
                        value={optionsCtx.showDescription}
                        name="description"
                        handleToggle={optionsCtx.toggleDescription}
                        labelText="Show Description"
                    />
                    <Checkbox
                        value={optionsCtx.showControls}
                        name="controls"
                        handleToggle={optionsCtx.toggleControls}
                        labelText="Show Controls"
                    />
                </div>
                <div className={classes.column}>
                    <Subtitle theme="dark">Search</Subtitle>
                    <TextInput
                        value={searchInput}
                        handleChange={handleChange}
                        name="search"
                        labelText="Filter by keyword"
                    />
                    <p>Please only use one search term</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
