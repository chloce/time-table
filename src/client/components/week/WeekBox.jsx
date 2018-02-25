import React, { Component } from "react";
import DayBox from "../day/dayBox.jsx";

export default class Days extends Component {
    constructor() {
        super();
        this.state = {
            week: [0, 1, 1, 1, 1, 1, 1],
            daysInfo: []
        };
    }

    render() {
        const today = new Date();
        let arr = [];
        const days = this.state.week.map(day => {
            today.setDate(today.getDate() + day);
            const date = ("0" + today.getDate()).slice(-2);
            const month = ("0" + (today.getMonth() + 1)).slice(-2);
            const year = today.getFullYear();
            const dateInfo = year + month + date;
            arr = [...arr, dateInfo];
        });
        console.log(arr);
        const sevenDays = arr.map(day => {
            return (
                <div key={day}>
                    <DayBox dateInfo={day} />
                </div>
            );
        });
        return <div id="week-container">{sevenDays}</div>;
    }
}
