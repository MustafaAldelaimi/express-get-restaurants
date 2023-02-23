const express = require('express')
const router = express.Router()
const {sequelize} = require("../db");
const {Restaurant} = require("../models/index")
router.use(express.json())

router.get("/:id", async (req, res) => {
          const data = await Restaurant.findByPk(req.params.id);
          res.json(data)
})

router.get("/", async (req, res) => {
          const data = await Restaurant.findAll();
          res.json(data)
})

router.post("/", async (req, res) => {
          const restaurant = await Restaurant.create(req.body);
          res.json(restaurant)
})

router.put("/:id", async (req, res) => {
          const restaurant = await Restaurant.update(req.body, {
                    where: {
                    id: req.params.id
                    }
          })
          res.json(restaurant)
})

router.delete("/:id", async (req, res) => {
          const restaurant = await Restaurant.destroy({
                    where: {
                    id: req.params.id
                    }
          })
          res.json(restaurant)
})


module.exports = router