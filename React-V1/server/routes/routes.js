const express = require("express");

const router = express();
const {registerUser} = require("../controller/user");
const {getPlayer} = require("../controller/user");
const {saveDetails} = require("../controller/user");
const {getCharacterDetails} = require("../controller/user");
const {getHouseList} = require("../controller/user");
const {updateHouseDetails} = require("../controller/user")
const {getEnergyList} = require("../controller/user");
const {updateEnergyDetails} = require("../controller/user");

router.post("/", registerUser);

router.get('/playerdetail/:playerAccount', getPlayer)

router.post('/saveDetails', saveDetails);

router.get('/getCharacterDetails', getCharacterDetails);

router.get('/getHouseList', getHouseList);

router.post('/updateHouseDetails', updateHouseDetails);

router.get('/getEnergyList', getEnergyList);

router.post('/updateEnergyDetails', updateEnergyDetails);

module.exports = router;