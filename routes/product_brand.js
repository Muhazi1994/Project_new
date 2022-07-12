const express = require("express");
const {
  getAllProductBrand,
  getDetailProductBrand,
  createProductBrand,
  updateProductBrand,
  deleteProductBrand,
} = require("../controllers/product_brand");

const router = express.Router();

router
  .route("/")
  .post(createProductBrand)
  .get(getAllProductBrand);
router
  .route("/:id")
  .get(getDetailProductBrand)
  .put(updateProductBrand)
  .delete(deleteProductBrand);

module.exports = router;