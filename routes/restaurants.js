const express = require('express')
const router = express.Router()
const {sequelize} = require("../db");
const {Restaurant} = require("../models/index")
const {check, validationResult} = require('express-validator')
router.use(express.json())

router.get("/:id", async (req, res) => {
          const data = await Restaurant.findByPk(req.params.id);
          res.json(data)
})

router.get("/", async (req, res) => {
          const data = await Restaurant.findAll();
          res.json(data)
})

router.post("/", [check("name").not().isEmpty().trim(), check("location").not().isEmpty().trim(), check("cuisine").not().isEmpty().trim()], async (req, res) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
                    return res.json({errors: errors.array()})
          }
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