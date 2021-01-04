const router = require("express").Router();
const burger = require("../models/burger");

//Create all our routes and set up logic in those routes where required
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = { burgers: data, layout: "index" };
    res.render("main", hbsObject);
  });
});

router.route("/api/burgers/:id").put((req, res) => {
  const condition = ` id = ${req.params.id}`;

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, there was a problem
        res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
