const router = require("express").Router();
const browseRouter = require("./browse");

router.use("/browse", browseRouter);
router.use("watch", browseRouter);
module.exports = router;
