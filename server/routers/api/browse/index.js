const router = require("express").Router();
const {
  myListController,
  mainController,
  genreController
} = require("./controllers");

router.get("", mainController);
router.get("/my-list", myListController);
router.get("/genre/:id", genreController);

module.exports = router;
