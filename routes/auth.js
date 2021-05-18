const express = require("express");
let router = express.Router();
const bcrypt = require('bcrypt');
let { insertUsers } = require('../shared/constant/sqlContant');
const db = require('../config/database');

router
    .route("/login")
    .post(async (req, res) => {
        console.log(req.params);
        res.sendStatus(200);
    })

router
    .route("/register")
    .post( async(req, res) => {
        const {name, email, password} = req.body;

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

            console.log(hashedPassword);

            let user = await db.query(insertUsers({name, email, hashedPassword}));
            console.log(user);

            res.sendStatus(200);

        } catch (e) {
            console.log(e);
        }

    })

module.exports = router;