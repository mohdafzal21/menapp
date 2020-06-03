const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    // GET The Token from the header
    const token = req.header('x-auth-token')
    if(!token){
        return res.status(401).json({msg : "Authorization Denied"})
    }

    // Verify token 
    try{
        const decoded = jwt.verify(token, 'SECRETKEY')
        console.log("decoded" , decoded)
        req.user = decoded.usr
        next()
    }catch(err){
        res.status(401).json({msg : "Token is not valid"})
    }
}