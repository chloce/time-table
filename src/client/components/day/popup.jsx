import React, { Component } from "react";
import { render } from "react-dom";
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
