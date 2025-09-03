const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/budget")
const db=mongoose.connection;
db.once("open",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Database Connnected")
})
module.exports = db;