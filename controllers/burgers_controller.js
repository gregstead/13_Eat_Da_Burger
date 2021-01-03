const router = require("express").Router();
const Burger = require("../models/burger");

//Create all our routes and set up logic in those routes where required
router.get("/", (req, res) => {
  Burger.all((data) => {
    const hbsObject = { burgers: data, layout: "index" };
    console.log("data :>> ", data);
    res.render("main", hbsObject);
  });
});

module.exports = router;
