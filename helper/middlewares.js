const jwt = require("jsonwebtoken");

exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const data = jwt.decode(token);
        const now = new Date(); 
        if (data.exp > now.getTime()/1000){
            req.jwtInfo = data
            next();
        }else {
            res.sendStatus(401)
        }
    } else {
        res.sendStatus(401);
    }
};