const jwt = require('jsonwebtoken');

function token(id){

    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        id: id
    }, 'matiksecret');
}

exports.genToken = token;