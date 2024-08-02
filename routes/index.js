var express = require('express');
var router = express.Router();
const UserModel = require('./users'); 

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/create", async function(req, res) {

    const createdUser = await UserModel.create({
      username: "Student",
      name: "AbdulSattar",
      age: 20
    });
    res.json(createdUser); 
 
});

module.exports = router;
