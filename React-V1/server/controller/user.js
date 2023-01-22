const express = require("express");
const mongoose = require("mongoose");

const userDetail = require("../model/user");
const playerDetail = require("../model/player");

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

module.exports = {registerUser, getPlayer, saveDetails};