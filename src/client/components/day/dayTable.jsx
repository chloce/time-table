import React, { Component } from "react";

import DayBox from "./dayBox.jsx";

export default class DayTable extends Component {
    render() {
        const today = new Date();
        const day = ("0" + today.getDate()).slice(-2);
        const month = ("0" + (today.getMonth() + 1)).slice(-2);
        const year = today.getFullYear();
        const date = year + month + day;

        return (
            <div>
                <div id="dayPageMainContainer">
                    <div id="dayMainContainer">
                        <DayBox dateInfo={date} />
                    </div>
                </div>
            </div>
        );
    }
}
