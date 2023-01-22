const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
const {port,mongoURI} = require('./config/keys')

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

// if(process.env.NODE_ENV == 'production')
// {
//     const path = require('path');

//     app.get('/', (req,res) => {
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     })
// }

//Start the server
app.listen(port,() => {
    console.log("Backend Started on " + port);
});