const express = require("express");

const router = express();
const {registerUser} = require("../controller/user");
const {getPlayer} = require("../controller/user");
const {saveDetails} = require("../controller/user");
const {getCharacterDetails} = require("../controller/user");

router.post("/", registerUser);

router.get('/playerdetail/:playerAccount', getPlayer)

router.post('/saveDetails', saveDetails);

router.get('/getCharacterDetails', getCharacterDetails);

module.exports = router;