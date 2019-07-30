const router = require("express").Router();
const { watchController } = require("./controllers");

router.get("/:id", watchController);

module.exports = router;
