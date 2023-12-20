const userschema = require("../modal/user.schema")
const jwt = require("jsonwebtoken")


const signup = async (req, res) => {
    
    let { email } = req.body
    let userdata = await userschema.findOne({ email: email })
    if (userdata) {
        res.send("user already exists")
    }
    else {
        let data = await userschema.create(req.body)
        res.send(data)
    }
}

const login = async (req, res) => {
    
    let { email, password } = req.body
    let user = await userschema.find({ email: email, password: password })
    console.log(user)
    if(user){
        let token = jwt.sign({name : user.email},"Gaurav")
        res.cookie("token", token).send("login successful")
        console.log(token)
        // console.log(req.cookies)
    }
    // if (!email == user) {
    //     res.send("user not found")
    // }
    // else if (!password == user.password) {
    //     res.send("password incorrect")

    // }
    // else {
    //     let token = jwt.sign({name : user.email},"Gaurav")
    //     res.send("login successful").cookie("token", token)
    //     console.log(token)
    //     // console.log(req.cookies)
    // }
}
module.exports ={ signup , login }

