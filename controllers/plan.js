const express = require("express");
const router = express.Router();
const Plans = require("../models/plan.js");

router.post("/", (req, res) => {
  Plans.create(req.body, (err, createdPlan) => {
    res.json(createdPlan);
  });
});

module.exports = router;
