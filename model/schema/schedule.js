const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    plan: String,
    date: Date,
    hour: Number,
    completed: Boolean
});

let schedule = mongoose.model("schedule", scheduleSchema);

export default schedule;
