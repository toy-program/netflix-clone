const router = require("express").Router();

router.get("", (req, res, next) =>
  res.status(200).json("Great Server is stick on react")
);

module.exports = router;
