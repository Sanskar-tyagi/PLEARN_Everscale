const mongoose = require("mongoose");

// Table for Login through MetaMask
const userDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
})
const userDetail = new mongoose.model("metamask_login_table", userDetailSchema, "metamask_login_table");   // First & Third parameter is the 'Table/Collection' name.

module.exports = userDetail;