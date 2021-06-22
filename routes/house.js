const express = require("express");
let router = express.Router();
const bcrypt = require('bcrypt');
let { getHouseByUser } = require('../shared/constant/sqlContant');
const db = require('../config/database');
const { genToken } = require('../shared/util/genToken');

router
    .route("/")
    .get(async (req, res) => {
        try {
            console.log(req.user.id);
            const data = await db.query(getHouseByUser(req.user.id))
            console.log(data[0]);
            // res.sendStatus(200);
            res.status(200).json(data[0])
        } catch (e) {

        }
    })
    // .post(async (req, res) => {
    //     try {
    //         const data = await db.query(getUserByEmail(req.body.email));
    //         const user = data[0][0];
    //         bcrypt.compare(req.body.password, user.password, function(err, result) {             
    //             if (result){
    //                 let userToken = genToken(user.id);
    //                 res.status(200).json({token: userToken, display: user.display, email: user.email});
    //             }else {
    //                 res.status(401).send();
    //             }
    //         });
    //     } catch(e) {
    //         console.log(e);
    //         res.status(500).send({"error": e});
    //     }
    // })


module.exports = router;