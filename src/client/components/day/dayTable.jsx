import React, { Component } from "react";

import DayBox from "./dayBox.jsx";

export default class Daily extends Component {
    render() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const dateInfo = {
            year: year,
            month: month + 1,
            day: day
        };

        return (
            <div>
                <div id="dayPageMainContainer">
                    <div id="dayMainContainer">
                        <DayBox dateInfo={dateInfo} />
                    </div>
                </div>
            </div>
        );
    }
}
