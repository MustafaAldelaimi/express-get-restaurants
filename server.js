const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");
const { response } = require("express");
app.use(express.json())
const port = 3000;

//TODO: Create your GET Request Route Below: 

app.get("/restaurants/:id", async (req, res) => {
    const data = await Restaurant.findByPk(req.params.id);
    res.json(data)
})

app.post("/restaurants", async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant)
})

app.put("/restaurants/:id", async (req, res) => {
    const restaurant = await Restaurant.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.json(restaurant)
})

app.delete("/restaurants/:id", async (req, res) => {
    const restaurant = await Restaurant.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(restaurant)
})

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})