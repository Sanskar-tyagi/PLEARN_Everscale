const mongoose = require("mongoose");

//Table for saving house details;
const houseDetailSchema = new mongoose.Schema({
    houseID: {type: Number, unique: true},
    houseName: {type: String},
    cost: {type: Number},
    insurancePrice: {type: Number},
    taxPrice: {type: Number},
    energyGain: {type: Number},
});

houseDetailSchema.statics.upsert = async function (record) {
    await this.findOneAndUpdate({ houseID: record.houseID }, record, {
        upsert: true,
        new: true,
    });
};

const houseDetail = new mongoose.model("house_detail_table", houseDetailSchema, "house_detail_table");

module.exports = houseDetail;