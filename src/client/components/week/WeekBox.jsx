import React, { Component } from "react";
import DayBox from "../day/dayBox.jsx";

export default class Days extends Component {
    constructor() {
        super();
        this.state = {
            week: [0, 1, 1, 1, 1, 1, 1],
            daysInfo: []
        };
        this.WeekDays = this.WeekDays.bind();
    }
    WeekDays() {
        const today = new Date();
        const days = this.state.week.map(day => {
            today.setDate(today.getDate() + day);
            const date = today.getDate();
            const month = today.getMonth();
            const year = today.getFullYear();
            const dateInfo = { year: year, month: month + 1, day: date };
            const arr = this.state.daysInfo;
            this.setState({ daysInfo: [...arr, dateInfo] });
        });
    }

    render() {
        const today = new Date();
        let arr = [];
        const days = this.state.week.map(day => {
            today.setDate(today.getDate() + day);
            const date = today.getDate();
            const month = today.getMonth();
            const year = today.getFullYear();
            const dateInfo = { year: year, month: month + 1, day: date };
            arr = [...arr, dateInfo];
        });
        console.log(arr);
        const sevenDays = arr.map(day => {
            return (
                <div key={day.day}>
                    <DayBox dateInfo={day} />
                </div>
            );
        });
        return <div id="week-container">{sevenDays}</div>;
    }
}
