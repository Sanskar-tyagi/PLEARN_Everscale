const mongoose = require("mongoose");

// Table for saving Character data
const characterDetailSchema = new mongoose.Schema({
    characterName: {type: String, unique: true},
    cost: {type: Number},
    unlockLevel: {type: Number},
});

characterDetailSchema.statics.upsert = async function (record) {
    await this.findOneAndUpdate({ characterName: record.characterName }, record, {
      upsert: true,
      new: true,
    });
};
const characterDetail = new mongoose.model("character_detail_table", characterDetailSchema, "character_detail_table");

module.exports = characterDetail;