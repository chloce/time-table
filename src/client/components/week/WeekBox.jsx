import React, { Component } from "react";
import Day from "../day/anDayBox.jsx";

export default class Days extends Component {
    constructor() {
        super();
    }

    Week() {
        return (
            <div>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
        );
    }

    render() {
        return (
            <div id="week-container">
                <div className="week-day-block">
                    今日
                    <Day />
                </div>
                <div className="week-day-block">
                    明日
                    <Day />
                </div>
                <div className="week-day-block">
                    <Day />
                </div>
                <div className="week-day-block">
                    <Day />
                </div>
                <div className="week-day-block">
                    <Day />
                </div>
                <div className="week-day-block">
                    <Day />
                </div>
                <div className="week-day-block">
                    <Day />
                </div>
            </div>
        );
    }
}
