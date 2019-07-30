const router = require("express").Router();
const mainRouter = require("./mainRouter");

router.use("", mainRouter);

module.exports = router;
