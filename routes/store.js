const express = require("express");
const {
  getAllStore,
  getDetailStore,
  createStore,
  updateStore,
  deleteStore,
} = require("../controllers/store");

const router = express.Router();

router
  .route("/")
  .post(createStore)
  .get(getAllStore);
router
  .route("/:id")
  .get(getDetailStore)
  .put(updateStore)
  .delete(deleteStore);

module.exports = router;