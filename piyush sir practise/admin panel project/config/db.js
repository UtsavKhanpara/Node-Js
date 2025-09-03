const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/storedata")

const db=mongoose.connection;

db.once("open",(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("Databse Connected")
})
module.exports=db;