const mongoose=require("mongoose");

mongoose.connect=(`mongodb://loaclhost:27017/mydata`);

const db=mongoose.connection;

db.once("connected",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("database successfully connected");
})
module.exports=db; 