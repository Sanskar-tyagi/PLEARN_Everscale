const express = require("express");
const mongoose = require("mongoose");

const userDetail = require("../model/user");
const playerDetail = require("../model/player");
const characterDetail = require("../model/character");

const app = express();

//For registering the user in 'metamask_login_table' and 'player_detail_table' through website.
const registerUser = (req,res) => {
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
};

//For fetching details of player from 'player_detail_table'.
const getPlayer = (req,res) => {
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
};

//For saving details of player in 'player_detail_player'.
const saveDetails = (req,res) => {
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
};

const characters = [
    // { characterName: "Character1", cost: 10, level: 1 },
    // { characterName: "Character2", cost: 10, level: 1 },
    { characterName: "Character3", cost: 100, unlockLevel: 1 },
    { characterName: "Character4", cost: 100, unlockLevel: 1 },
    { characterName: "Character5", cost: 100, unlockLevel: 1 },
    { characterName: "Character6", cost: 100, unlockLevel: 1 },
    { characterName: "Character7", cost: 100, unlockLevel: 1 },
    { characterName: "Character8", cost: 100, unlockLevel: 1 },
    { characterName: "Character9", cost: 100, unlockLevel: 1 },
    { characterName: "Character10", cost: 100, unlockLevel: 1 },
    { characterName: "Character11", cost: 100, unlockLevel: 1 },
    { characterName: "Character12", cost: 100, unlockLevel: 1 },
    { characterName: "Character13", cost: 100, unlockLevel: 1 },
    { characterName: "Character14", cost: 100, unlockLevel: 1 },
  ];
async function insertCharacters() {
    try {
        // Use insertMany() to insert multiple documents
        const result = await characterDetail.insertMany(characters, { ordered: false });
        console.log(`Inserted ${result.length} documents`);
    } catch (error) {
        // Handle duplicate key errors
        if (error instanceof mongoose.Error && error.code === 11000) {
            // console.error(`Duplicate key error: ${error.message}`);
        } else {
            // console.error(error);
        }
    }
}
insertCharacters();

const getCharacterDetails = (req, res) => {
    characterDetail.find({}, (err, characters) => {
        if(err) 
        {
          console.error(err);
        }
        else
        {
          res.send(characters);
          console.log(characters);
        }
    });
}


module.exports = {registerUser, getPlayer, saveDetails, getCharacterDetails};