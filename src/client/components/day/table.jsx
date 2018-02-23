import React, { Component } from "react";
import { render } from "react-dom";

import HourBox from "./hourBox.jsx";

export default class Table extends Component {
    render() {
        return (
            <div>
                <HourBox />
            </div>
        );
    }
}
