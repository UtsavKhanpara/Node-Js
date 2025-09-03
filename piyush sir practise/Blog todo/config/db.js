const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog-system");
const db=mongoose.connection;
db.once("open",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Mongodb connected");
})
module.exports=db;