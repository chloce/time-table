var express = require("express");
import Schedule from "../../../model/schema/schedule";
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    Schedule.
});

router.post("/schedule", (req, res, next) => {
    try {
        let schedule = new Schedule();
        schedule.detail = req.body.detail;
        schedule.time = req.body.time;
        schedule.hour = req.body.hour;
        schedule.day
        schedule.completed = req.body.completed;
        schedule.save(e => {
            next(e);
        });
        res.send(schedule);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
