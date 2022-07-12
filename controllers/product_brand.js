const {product_brand } = require("../models")

class ProductBrand {
  async getAllProductBrand(req, res, next) {
    try {
      let data = await product_brand.findAll();
      if (data.length === 0) {
        return res.status(404).json({ errors: ["product brand not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // Get detail customer
  async getDetailProductBrand(req, res, next) {
    try {
      let data = await product_brand.findOne({
        where: { id: req.params.id },
      });
      if (!data) {
        return res.status(404).json({ errors: ["Product Brand not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async createProductBrand(req, res, next) {
    try {
      const createData = await product_brand.create(req.body);

      const data = await product_brand.findOne({
        where: {
          id: createData.id,
        },
      });

      res.status(201).json({ data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async updateProductBrand(req, res, next) {
    try {
      const updateData = await product_brand.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updateData[0] === 0) {
        return res.status(404).json({ errors: ["product brand not found"] });
      }
    
      const data = await product_brand.findOne({
        where: {
          id: req.params.id,
        },
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async deleteProductBrand(req, res, next) {
    try {
      let data = await product_brand.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["Product Brand not found!"] });
      }
      res.status(200).json({ message: " Success delete Product Brand" });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}
module.exports = new ProductBrand();
