import React, { Component } from "react";
import * as Axios from "axios";

class Popup extends Component {
    constructor() {
        super();
        this.state = {
            detail: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        console.log(this.props);

        Axios.post("/schedule", {
            plan: this.state.plan,
            duration: 1,
            date: this.props.dayInfo,
            startHour: this.props.targetHour,
            completed: false
        })
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    handleChange(event) {
        this.setState({ plan: event.target.value });
    }

    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div>{this.props.targetHour} 時からの予定:</div>
                            <input
                                type="text"
                                onChange={this.handleChange}
                                placeholder="予定"
                            />
                        </label>

                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default class dayBox extends Component {
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
            ],
            showPopup: false,
            value: "",
            targetHour: Number,
            date: Number,
            todayPlans: [],
            targetHours: [],
            id: 1
        };
        this.togglePopup = this.togglePopup.bind(this);
    }
    togglePopup(event) {
        console.log(event.target.id.slice(8));
        this.setState({
            showPopup: !this.state.showPopup,
            targetHour: event.target.id.slice(8),
            date: event.target.id.slice(0, 8)
        });
    }
    componentWillMount() {
        Axios.get("schedules", {
            params: {
                date: this.props.dateInfo
            }
        })
            .then(res => {
                this.setState({
                    todayPlans: res.data.plans
                });
                res.data.plans.map(plan => {
                    this.setState({
                        targetHours: [...this.state.targetHours, plan.startHour]
                    });
                });
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    render() {
        const items = [];
        const today = this.props.dateInfo;
        const hours = this.state.hours.map(hour => {
            const id = today + hour;
            const target = this.state.targetHours.indexOf(hour);
            if (target >= 0) {
                const plan = this.state.todayPlans[target].plan;
                console.log(plan);

                return (
                    <li key={hour} className="hourList">
                        <div
                            className="hourBox"
                            onClick={this.togglePopup}
                            id={id}
                        >
                            {hour}
                            <div>{plan}</div>
                        </div>
                    </li>
                );
            }
            return (
                <li key={hour} className="hourList">
                    <div className="hourBox" onClick={this.togglePopup} id={id}>
                        {hour}
                    </div>
                </li>
            );
        });
        //console.log(hours);
        return (
            <div>
                <ul className="dayList">{hours}</ul>
                {this.state.showPopup ? (
                    <Popup
                        dayInfo={this.state.date}
                        targetHour={this.state.targetHour}
                        closePopup={this.togglePopup}
                    />
                ) : null}
            </div>
        );
    }
}
