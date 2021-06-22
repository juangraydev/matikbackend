const jwt = require('jsonwebtoken')

module.exports = () => {
    return (req, res, next)=>{
        // console.log('Authorization Middleware');
        
        // Find JWT in Headers
        const token = req.headers['authorization'];
        // console.log(req.headers);
        // console.log(`token ${token}`);
        // console.log(token);
        if(!token){
            res.status(401).send("Unauthorize")
        }else{
            const tokenBody = token.slice(7);
            // console.log("here");
            jwt.verify(tokenBody, 'matiksecret', (err, decoded) => {
                // console.log(`decoded ${decoded.iat}`);
                if(err) {
                    // console.log(`JWT Error: ${err}`);
                    return res.status(401).send("Error: Access Denied")
                }
                req.user = decoded;
                // No Error, JWT is good!
                next();
            })
        }
    }
}