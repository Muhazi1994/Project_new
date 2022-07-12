const {store,store_account,store_area } = require("../models")

class Store {
    async getAllStore(req, res, next) {
      try {
        let data = await store.findAll({
          attributes: { exclude: ["account_id", "area_id"] },
          include: [
            {
              model: store_area,
            },
            {
              model: store_account,
            },
          ],
        });
  
        if (data.length === 0) {
          return res.status(404).json({ errors: ["Store not found"] });
        }
  
        res.status(200).json({ data });
      } catch (e) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async getDetailStore(req, res, next) {
      try {
        let data = await store.findOne({
          where: { id: req.params.id },
          attributes: { exclude: ["account_id", "area_id"] },
          include: [
            {
                model: store_area,
              },
              {
                model: store_account,
              },
          ],
        });
  
        if (!data) {
          return res.status(404).json({ errors: ["Store not found"] });
        }
  
        res.status(200).json({ data });
      } catch (e) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async createStore(req, res, next) {
      try {
        const newData = await store.create(req.body);
  
        const data = await store.findOne({
          where: {
            id: newData.id,
          },
          attributes: { exclude: ["account_id", "area_id"] },
          include: [
            {
                model: store_area,
              },
              {
                model: store_account,
              },
          ],
        });
  
        res.status(201).json({ data });
      } catch (error) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async updateStore(req, res, next) {
      try {
        const updatedData = await store.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
  
        if (updatedData[0] === 0) {
          return res.status(404).json({ errors: ["Store not found"] });
        }
  
        const data = await store.findOne({
          where: {
            id: req.params.id,
          },
          attributes: { exclude: ["account_id", "area_id"] },
          include: [
            {
                model: store_area,
              },
              {
                model: store_account,
              },
          ],
        });
  
        res.status(201).json({ data });
      } catch (e) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  
    async deleteStore(req, res, next) {
      try {
        let data = await store.destroy({ where: { id: req.params.id } });
  
        if (!data) {
          return res.status(404).json({ errors: ["Store not found"] });
        }
  
        res.status(200).json({ message: "Success delete Store" });
      } catch (e) {
        res.status(500).json({ errors: ["Internal Server Error"] });
      }
    }
  }
  
  module.exports = new Store();