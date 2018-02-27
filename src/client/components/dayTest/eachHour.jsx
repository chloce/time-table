import React, { Component } from "react";

export default class TestEachHour extends Component {
    constructor() {
        super();
        this.state = {
            hours: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23
            ]
        };
        this.addPlan = this.addPlan.bind();
    }

    addPlan(event) {
        event.target.style["background-color"] = "blue";
    }

    render() {
        const HourBox = this.state.hours.map(hour => {
            return (
                <div
                    className="individual-hour-wrapper"
                    key={hour}
                    id={hour}
                    onClick={this.addPlan}
                >
                    <div className="individual-hour">{hour} 時</div>
                </div>
            );
        });
        return <div>{HourBox}</div>;
    }
}
