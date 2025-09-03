const express=require("express")
const port=9000;
const app=express();
app.use(express.urlencoded())
app.set("view engine","ejs")
app.use("/",require("./routes/index"))
app.listen(port,(err)=>{
    err?console.log(err):console.log(`Server running on port`+port);
})