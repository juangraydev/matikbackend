const express = require("express");
let router = express.Router();
const bcrypt = require('bcrypt');
let { insertUsers } = require('../shared/constant/sqlContant');
const db = require('../config/database');

router
    .route("/login")
    .post(async (req, res) => {
        console.log(req.body);
        
        res.sendStatus(200);
        // try {
        //     const users = await usersController.findByEmail(req.body.email);
        //     bcrypt.compare(req.body.password, users.password, function(err, result) {
        //         // result == true
        //         console.log(result);
        //         if (result){
        //             let userToken = genToken(users.id);
        //             res.status(200).json({token: userToken, displayname: users.name, email: users.email});
        //         }else {
        //             res.status(401).send();
        //         }
        //     });
        // } catch(e) {
        //     console.log(e);
        // }
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