import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";

import Day from "./components/day/dayTable.jsx";
import Week from "./components/week/weekTable.jsx";

render(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/day">day</Link>
                </li>
                <li>
                    <Link to="/week">week</Link>
                </li>
            </ul>
            <hr />
            <Route path="/day" component={Day} />
            <Route path="/week" component={Week} />
        </div>
    </Router>,
    document.getElementById("root")
);
