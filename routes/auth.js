const express = require("express");
let router = express.Router();
const bcrypt = require('bcrypt');
let { insertUsers, getUserByEmail } = require('../shared/constant/sqlContant');
const db = require('../config/database');
const { genToken } = require('../shared/util/genToken');

router
    .route("/login")
    .post(async (req, res) => {
        try {
            const data = await db.query(getUserByEmail(req.body.email));
            const user = data[0][0];
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                
                if (result){
                    let userToken = genToken(user.id);
                    res.status(200).json({token: userToken, display: user.display, email: user.email});
                }else {
                    res.status(401).send();
                }
            });
        } catch(e) {
            console.log(e);
            res.status(500).send({"error": e});
        }
    })

router
    .route("/register")
    .post( async(req, res) => {
        const {name, email, password} = req.body;
        console.log(req.body);

        try {
            const hashedPassword = await new Promise((resolve, reject) => {
                bcrypt.hash(password, 10, function(err, hash) {
                    if (err){
                        reject(err)
                    }else{
                        resolve(hash)
                    }
                });
            })

            let user = await db.query(insertUsers({name, email, hashedPassword}));
            console.log(user);

            res.sendStatus(200);

        } catch (e) {
            console.log(e);
        }

    })

module.exports = router;