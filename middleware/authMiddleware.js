const HttpError = require("../models/http-error");
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            throw new HttpError('Invalid token')
        }
        const decodedToken = jwt.verify(token, 'yourSecretKey');
        req.userData = {userId: decodedToken.userId};   
        next();
    }catch (err){
        console.log(err);
    }
}