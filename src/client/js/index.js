import React from "react";
import ReactDOM from "react-dom";
import {RootComp} from "./components/components";

ReactDOM.hydrate(<RootComp/>, document.getElementById("application"));