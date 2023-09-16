const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const userModel = require("../Shema/userSheam");


router.get("/:username", async (req, res) => {
    try {
        const username = req.params.username;
        const data = await userModel.findOne({ username: username });
        res.render("Home.ejs", data);
    } catch (error) {
        res.send(`there is no || GET`);
    }
});


router.get("/api/singup", async (req, res) => {
    try {
        res.render("Singup.ejs");
    } catch (error) {
        res.send(`there is one ${error} || GET SINGUP`);
    }
});



router.post("/api/post/insta", async (req, res) => {
    try {
        const data = await userModel({
            username: req.body.username,
            follower: req.body.follower,
            following: req.body.following,
            post: req.body.post,
        });
        const newdata = await data.save();
        console.log(`data submit | `.bgMagenta.white)
        res.send('data submit 🐱‍🏍');
    } catch (error) {
        res.send(`there is one ${error} || POST`);
    }
});

module.exports = router;