const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
const {mongoURI} = require('./config/dev')
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(cors());


const router = require("./routes/routes");
app.use("/", router);

// Database Connection
mongoose.connect(mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }, () => {
        console.log("Your DB is connected.");
    }
)

app.get('/test', (req,res) => {
    res.send("Hello User");
})

//Start the server
app.listen(process.env.PORT || 8080,() => {
    console.log("Backend Started!");
});