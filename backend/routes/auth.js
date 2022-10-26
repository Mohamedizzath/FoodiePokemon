// Contains routes for user roles
const express = require('express');
const Users = require("../models/user");

const router = express.Router();

router.post('/login',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
        Users.count({ Username: username }, (error, count) => {
            if(count > 0){
                Users.findOne({ Username: username }, (error, user) => {
                    if(user.Password === password){
                        res.status(200).json(user);
                    } else {
                        res.status(401).json({ message: 'Username and password doesn\'t match'});
                    }
                });
            } else {
                res.status(401).json({ message: 'Given user doesn\'t exists'});
            }
        });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;