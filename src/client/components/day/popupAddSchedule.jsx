import React, { Component } from "react";
import Axios from "axios";

export default class Popup extends Component {
    constructor() {
        super();
        this.state = {
            plan: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        console.log(event);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            {this.props.hour} 時からの予定:
                            <input
                                type="text"
                                value={this.state.plan}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>時まで</label>
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
