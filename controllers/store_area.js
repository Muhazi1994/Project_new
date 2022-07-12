const {store_area } = require("../models")

class StoreArea {
    async getAllStoreArea(req, res, next) {
      try {
        let data = await store_area.findAll();
        if (data.length === 0) {
          return res.status(404).json({ errors: ["Store Area not found"] });
        }
  
        res.status(200).json({ data });
      } catch (error) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async getDetailStoreArea(req, res, next) {
      try {
        let data = await store_area.findOne({
          where: { id: req.params.id },
        });
  
     
        if (!data) {
          return res.status(404).json({ errors: ["Store Area not found"] });
        }
  
        res.status(200).json({ data });
      } catch (error) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async createStoreArea(req, res, next) {
      try {
        const createData = await store_area.create(req.body);
  
        const data = await store_area.findOne({
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
    async updateStoreArea(req, res, next) {
      try {
        const updateData = await store_area.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        if (updateData[0] === 0) {
          return res.status(404).json({ errors: ["Store Area not found"] });
        }
  
        const data = await store_area.findOne({
          where: {
            id: req.params.id,
          },
        });
  
        res.status(201).json({ data });
      } catch (error) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async deleteStoreArea(req, res, next) {
      try {
        let data = await store_area.destroy({ where: { id: req.params.id } });
  
        if (!data) {
          return res.status(404).json({ errors: ["Store Area not found!"] });
        }
        res.status(200).json({ message: " Success delete Store Area" });
      } catch (error) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  }
  module.exports = new StoreArea();
  