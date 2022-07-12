const express = require("express");
const {
  getAllReport,
  getDetailReport,
  createReport,
  updateReport,
  deleteReport,
} = require("../controllers/report_product");

const router = express.Router();

router
  .route("/")
  .post(createReport)
  .get(getAllReport);
router
  .route("/:id")
  .get(getDetailReport)
  .put(updateReport)
  .delete(deleteReport);

module.exports = router;