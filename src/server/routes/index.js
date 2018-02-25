var express = require("express");
import Schedule from "../../../model/schema/schedule";
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { TITLE: "title" });
});

router.post("/schedule", (req, res, next) => {
    try {
        let schedule = new Schedule();
        schedule.detail = req.body.detail;
        schedule.time = req.body.time;
        schedule.hour = req.body.hour;
        schedule.day = req.body.day;
        schedule.month = req.body.month;
        schedule.year = req.body.year;
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
