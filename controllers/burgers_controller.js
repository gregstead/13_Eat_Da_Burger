const router = require("express").Router();
const Burger = require("../models/burger");

// import the model
const burger = require("../models/burger");

//Create all our routes and set up logic in those routes where required
router.get("/", (req, res) => {
  console.log("/GET");
});

module.exports = router;
