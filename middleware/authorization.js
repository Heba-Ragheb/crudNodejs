const jwt = require("jsonwebtoken")
module.exports= (req,res,next)=>{
   try {
    const fulltoken = req.headers.authorization||req.headers.Authorization
    const token = fulltoken.split(' ')[1]
    if (!token) return res.status(403).send("acess denied")
        const decodedToken = jwt.verify(token,'shhhhh')
    req.user =decodedToken
    next()
   } catch (error) {
    console.log("error" ,error)
    res.status(400).send("invalid token")

   }
   
   
}
