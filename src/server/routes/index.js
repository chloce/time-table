var express = require("express");
import Schedule from "../../../model/schema/schedule";
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.post("/schedule", (req, res, next) => {
    try {
        let schedule = new Schedule();
        schedule.plan = req.body.plan;
        schedule.date = req.body.date;
        schedule.hour = req.body.hour;
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
