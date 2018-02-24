import React, { Component } from "react";
import Day from "../day/dayTable.jsx";

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
}
