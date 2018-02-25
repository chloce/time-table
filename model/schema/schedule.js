const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    plan: String,
    duration: Number,
    date: String,
    startHour: Number,
    startMinute: Number,
    completed: Boolean,
    createDate: Date
});

let schedule = mongoose.model("schedule", scheduleSchema);

export default schedule;
