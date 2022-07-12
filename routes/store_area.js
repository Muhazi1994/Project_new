const express = require("express");
const {
  getAllStoreArea,
  getDetailStoreArea,
  createStoreArea,
  updateStoreArea,
  deleteStoreArea,
} = require("../controllers/store_area");

const router = express.Router();

router
  .route("/")
  .post(createStoreArea)
  .get(getAllStoreArea);
router
  .route("/:id")
  .get(getDetailStoreArea)
  .put(updateStoreArea)
  .delete(deleteStoreArea);

module.exports = router;