const express = require("express")
const bodyParser= require("body-parser")
const mongoose= require("mongoose")
const router = require("./routes/routes")
const route = require("./routes/userRoute")
const app = express()
const uri = "mongodb+srv://hebaragheb:hg672002@firstone.srtc7t6.mongodb.net/?retryWrites=true&w=majority&appName=firstOne";

const port = 505
app.use(bodyParser.json())
const conectDB = async ()=>{
    try {
        mongoose.set('strictQuery',false)
        mongoose.connect(uri)
        console.log("connected")
    } catch (error) {
        console.log(error)
        process.exit()
    }
}
conectDB()
app.use("/api/contacts",router)
app.use("/",route)

app.listen(port,()=>{
    console.log(`server runing on port ${port}`)
})
