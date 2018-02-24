import React, { Component } from "react";

import HourBox from "./anDayBox.jsx";

export default class Daily extends Component {
    render() {
        const day = new Date();
        return (
            <div>
                <div id="dayPageMainContainer">
                    <div id="dayMainContainer">
                        <HourBox />
                    </div>
                </div>
            </div>
        );
    }
}
