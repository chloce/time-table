import React, { Component } from "react";
import { render } from "react-dom";

import Day from "./components/day/dayTable.jsx";
import Week from "./components/week/weekTable.jsx";

render(<Week />, document.getElementById("root"));
