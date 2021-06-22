import React from "react";
import { render } from "react-dom";

import App from "./App";
import { OptionsContextProvider } from "@Store/Options/Options.context";

render(
    <OptionsContextProvider>
        <App />
    </OptionsContextProvider>,
    document.getElementById("showcase")
);