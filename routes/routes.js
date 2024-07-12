const {getContacts,creatContact,getContact,updateContact,deleteContact} = require("../Controllers/controll")
const express = require("express")
const route = express.Router()
const validToken = require("../middleware/authorization")

route.get ("/",validToken,getContacts)
route.get ("/:id",validToken,getContact)
route.post("/",validToken,creatContact)
route.delete("/:id",validToken,deleteContact)
route.put("/:id",validToken, updateContact)
module.exports = route