const mongoose = require("mongoose");

//Table for saving energy details;
const energyDetailSchema = new mongoose.Schema({
    energyID: {type: Number, unique: true},
    cost: {type: Number},
    energyGain: {type: Number},
});

energyDetailSchema.statics.upsert = async function (record) {
    await this.findOneAndUpdate({ energyID: record.energyID }, record, {
        upsert: true,
        new: true,
    });
};

const energyDetail = new mongoose.model("energy_detail_table", energyDetailSchema, "energy_detail_table");

module.exports = energyDetail;