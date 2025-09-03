const express=require("express");
const port=9000;
const app = express();

const db=require('./config/db')

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`server running on port`+port);
})