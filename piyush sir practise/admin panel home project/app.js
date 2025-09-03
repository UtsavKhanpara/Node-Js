const express=require("express")

const port=9001;

const app=express();
const db=require("./config/db");
const path = require("path");

app.use(express.urlencoded())
app.set("view engine","ejs")

app.use("/",require("./routes/index"))
app.use(express.static(path.join(__dirname,'assets')))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
const adminmodel=require("./model/adminmodel")

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("server runnning on port",port);
})