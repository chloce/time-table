const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    detail: String,
    time: Number,
    hour: Number,
    day: Number,
    month: Number,
    year: Number,
    completed: Boolean
});

let schedule = mongoose.model("schedule", scheduleSchema);

export default schedule;
