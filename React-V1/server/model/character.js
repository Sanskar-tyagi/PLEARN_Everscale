const mongoose = require("mongoose");

// Table for saving Character data
const characterDetailSchema = new mongoose.Schema({
    characterName: {type: String, unique: true},
    cost: {type: Number},
    unlockLevel: {type: Number},
})
const characterDetail = new mongoose.model("character_detail_table", characterDetailSchema, "character_detail_table");

module.exports = characterDetail;