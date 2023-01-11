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

// Database Connection
mongoose.connect(mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }, () => {
        console.log("Your DB is connected.");
    }
)
// Table for Login through MetaMask
const userDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
})
const userDetail = new mongoose.model("metamask_login_table", userDetailSchema, "metamask_login_table");   // First & Third parameter is the 'Table/Collection' name.

// Table for saving Player game data
const playerDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
    playerName: {type: String, default: ''},
    coins: {type: Number, default: 0},
    tileNumber: {type: Number, default: 0},
    characterID: {type: Number, default: -1},
    level: {type: Number, default: 0}
})
const playerDetail = new mongoose.model("player_detail_table", playerDetailSchema, "player_detail_table");

//Routes

//For registering the user in 'metamask_login_table' and 'player_detail_table' through website.
app.post("/", (req,res) => {
    const {userAccount} = req.body;
    userDetail.findOne({userAccount: userAccount}, (err, user) => {
        if(user)
        {
            res.send({message: "User already registered" + " " + userAccount});
        }
        else
        {
            // Creating user in 'metamask_login_table' and 'player_detail_table'.
            const user = new userDetail({
                userAccount
            });
            const player = new playerDetail({
                userAccount
            })
            user.save(err => {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    res.send({message: "Successfully Registered!" + " " + userAccount});
                    player.save(); // Saving the user in 'player_detail_table' as well.
                }
            });
        }
    })
})

//For fetching details of player from 'player_detail_table'.
app.get('/playerdetail/:playerAccount', (req,res) => {
    const { playerAccount } = req.params;
    playerDetail.findOne({userAccount: playerAccount}, (err, player) => {
        if(player)
        {
            res.send(player);
        }
        else
        {
            res.send(err);
        }
    })
})

//For saving details of player in 'player_detail_player'.
app.post('/saveDetails', (req, res) => {
    const userAccount = req.body.userAccount;
    const playerName = req.body.playerName;
    const selectedCharacter = req.body.selectedCharacter;

    playerDetail.updateOne({userAccount: userAccount}, {$set: {playerName: playerName, characterID: selectedCharacter} }, (err) => {
        if(err)
        {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

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