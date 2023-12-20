const jwt = require("jsonwebtoken");
// var cookie = require('cookie-parser')
const auth = (req, res, next) => {
    // const {token} = req.cookies
    // var decoded = jwt.verify(token, 'Gaurav');
    // console.log(decoded)
    const token = req.cookies
    if(token){
        var decoded = jwt.verify(token, "Gaurav");
        console.log(decoded)
        next()
    }
    else{
        res.send("Invalid token")
    }
    
}

module.exports =auth
