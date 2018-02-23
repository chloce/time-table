import React, { Component } from "react";
import { render } from "react-dom";

class Popup extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const EndTime = this.props.hour + 1;
        return (
            <div className="popup">
                <div className="popup-inner">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            {this.props.hour} 時からの予定:
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>{EndTime} 時まで</label>
                        <input
                            type="submit"
                            value="submit"
                            onClick={this.props.closePopup}
                        />
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
        if (this.state.showPopup === false) {
            this.setState({
                showPopup: !this.state.showPopup,
                targetHour: event.target.id
            });
        }
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        const items = [];
        const hours = this.state.hours.map(hour => (
            <li key={hour}>
                <div className="hourBox" onClick={this.togglePopup} id={hour}>
                    {hour} : 時
                </div>
            </li>
        ));
        //console.log(hours);
        return (
            <div>
                <ul>{hours}</ul>
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
