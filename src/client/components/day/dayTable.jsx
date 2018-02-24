import React, { Component } from "react";

import HourBox from "./hourBox.jsx";

export default class Daily extends Component {
    render() {
        return (
            <div id="dayPageMainContainer">
                <HourBox />
            </div>
        );
    }
}
