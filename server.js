const express = require("express");
const app = express();
const {sequelize} = require("./db");
const { response } = require("express");
app.use(express.json())
const port = 3000;
const restaurantRouter = require("./routes/restaurants")
//TODO: Create your GET Request Route Below: 

app.use('/restaurants', restaurantRouter)

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})