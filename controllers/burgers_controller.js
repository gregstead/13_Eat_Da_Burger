const router = require("express").Router();
const burger = require("../models/burger");

// All routes and logic where required
router.get("/", (req, res) => {
  burger.all((data) => {
    // Object for handlebars
    const hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

router.route("/api/burgers/:id").put((req, res) => {
  const id = req.body.iq;
  burger.update(id, (result) => {
    if (result) {
      res.sendStatus(200).end();
    } else {
      console.log(`PUT Error`);
      res.sendStatus(400).end();
    }
  });
});

module.exports = router;
