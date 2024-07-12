const{login,register,current} = require("../Controllers/user")
const validToken = require("../middleware/authorization")
const express = require("express")

const router= express.Router()
router.get("/current",validToken,current)
router.post("/login",login)
router.post("/register",register)
module.exports=router