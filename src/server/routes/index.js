var express = require("express");
import Schedule from "../../../model/schema/schedule";
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index");
});

router.get("/schedules", function(req, res, next) {
    const date = req.query.date.toString();

    Schedule.find({ date }, function(err, plans) {
        if (err) {
            throw err;
        }
        res.json({ plans });
    });
});

router.post("/schedule", (req, res, next) => {
    try {
        //console.log(req.body);

        let schedule = new Schedule();
        schedule.plan = req.body.plan;
        schedule.duration = req.body.duration;
        schedule.date = req.body.date;
        schedule.startHour = req.body.startHour;
        schedule.completed = req.body.completed;
        schedule.save(e => {
            next(e);
        });
        console.log("here");

        res.json({ schedule: "schedule" });
    } catch (e) {
        next(e);
    }
});

module.exports = router;
