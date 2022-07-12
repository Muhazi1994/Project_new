const {report_product,store,product } = require("../models")

class ReportProduct {
    async getAllReport(req, res, next) {
      try {
        let data = await report_product.findAll({
          attributes: { exclude: ["store_id", "product_id"] },
          include: [
            {
              model: product,
            },
            {
              model: store,
            },
          ],
        });
  
        if (data.length === 0) {
          return res.status(404).json({ errors: ["Report Product not found"] });
        }
  
        res.status(200).json({ data });
      } catch (e) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async getDetailReport(req, res, next) {
      try {
        let data = await report_product.findOne({
          where: { id: req.params.id },
          attributes: { exclude: ["store_id", "product_id"] },
          include: [
            {
              model: product,
            },
            {
              model: store,
            },
          ],
        });
  
        if (!data) {
          return res.status(404).json({ errors: ["Report Product not found"] });
        }
  
        res.status(200).json({ data });
      } catch (e) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async createReport(req, res, next) {
      try {
        const newData = await report_product.create(req.body);
  
        const data = await report_product.findOne({
          where: {
            id: newData.id,
          },
          attributes: { exclude: ["store_id", "product_id"] },
          include: [
            {
              model: product,
            },
            {
              model: store,
            },
          ],
        });
  
        res.status(201).json({ data });
      } catch (error) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async updateReport(req, res, next) {
      try {
        const updatedData = await report_product.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
  
        if (updatedData[0] === 0) {
          return res.status(404).json({ errors: ["Report Product not found"] });
        }
  
        const data = await report_product.findOne({
          where: {
            id: req.params.id,
          },
          attributes: { exclude: ["store_id", "product_id"] },
          include: [
            {
              model: product,
            },
            {
              model: store,
            },
          ],
        });
  
        res.status(201).json({ data });
      } catch (e) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async deleteReport(req, res, next) {
      try {
        let data = await report_product.destroy({ where: { id: req.params.id } });
  
        if (!data) {
          return res.status(404).json({ errors: ["Report Product not found"] });
        }
  
        res.status(200).json({ message: "Success delete Report Product" });
      } catch (e) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  }
  
  module.exports = new ReportProduct();