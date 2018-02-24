import React, { Component } from "react";
import { render } from "react-dom";
import * as Axios from "axios";

class Popup extends Component {
    constructor() {
        super();
        this.state = {
            plan: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        Axios.post("/schedule", {
            plan: this.state.plan,
            date: new Date(),
            hour: 1,
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
                            <div>{this.props.hour} 時からの予定:</div>
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

export default class HourBox extends Component {
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
            whoPopup: false,
            value: "",
            targetHour: 0
        };
        this.togglePopup = this.togglePopup.bind(this);
    }
    togglePopup(event) {
        this.setState({
            showPopup: !this.state.showPopup,
            targetHour: event.target.id
        });
    }
    render() {
        const items = [];
        const hours = this.state.hours.map(hour => (
            <li key={hour} className="hourList">
                <div className="hourBox" onClick={this.togglePopup} id={hour}>
                    {hour}
                </div>
            </li>
        ));
        //console.log(hours);
        return (
            <div>
                <ul className="dayList">{hours}</ul>
                {this.state.showPopup ? (
                    <Popup
                        hour={this.state.targetHour}
                        closePopup={this.togglePopup}
                    />
                ) : null}
            </div>
        );
    }
}
