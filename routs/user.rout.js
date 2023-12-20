const {Router }= require("express")
const jwt = require("jsonwebtoken");

const {signup , login} = require("../controller/user.logic");
const auth = require("../middleware/auth");

const router = Router()

router.post("/signup",signup)
router.post("/login",login )
router.get("/token",auth)
module.exports =router