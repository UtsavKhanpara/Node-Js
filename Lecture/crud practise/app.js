const express=require("express");
const db=require("./config/db")
const port=9091;
const app=express();

app.set("view engine","ejs");
app.use(express.urlencoded());



app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is running on port ${port}`);
})