const express = require("express");
const app = express();
require("./db/conn.js");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
const port = process.env.PORT || 3000;

app.use(require('./Routes/userRoutes'))
app.use(require('./Routes/hotels'))
app.use(require('./Routes/adminRoutes'))


app.listen(port,() =>{
    console.log(`Server is running on ${port}`);
})