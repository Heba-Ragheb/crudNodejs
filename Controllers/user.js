const User =require("../controllSec/userScema")
const bycrpt = require("bcrypt")
const jwt = require("jsonwebtoken")
const login = async (req,res)=>{
   //res.json({message:"login"})
   const {email,password}= req.body
   if(!email || !password){
    res.status(400)
    throw new Error ("filed is empty")
  }
  const user = await User.findOne({email})
  if(user  && (await bycrpt.compare(password,user.password))){
    const token= jwt.sign({_id:user._id, name:user.name,email:user.email},'shhhhh',{expiresIn:"20m"})
    return res.status(200).json({message:"user logged in ", user :{name: user.name , email : user.email , token}})
   
  }
  

}
const register = async (req,res)=>{

  const {name,email,password} = req.body
  if(!name || !email || !password){
    res.status(400)
    throw new Error ("filed is empty")
  }
  const avalableContact= await User.findOne({email})
  if (avalableContact){
    res.status(400)
    throw new Error ("this user is allready exit")
  
  } 
  const hashedPassword = await bycrpt.hash(password,10)
  //const user = 
  const user = await User.create({
    name,
    email,
    password : hashedPassword,
  })
  if(user){
    res.json({message:"registered",User:user})
  }
 
  // res.status(200).json({message:"registered",data:})
 }
 const current = async (req,res)=>{
    res.json(req.user)
 }
 module.exports={login,register,current}