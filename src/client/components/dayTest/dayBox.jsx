import React, { Component } from "react";

import EachHour from "./eachHour.jsx";

export default class TestDayBox extends Component {
    render() {
        return (
            <div className="day-wrapper">
                <div className="hourlist-wrapper">
                    <EachHour />
                </div>
                <div className="main-content" />
            </div>
        );
    }
}
