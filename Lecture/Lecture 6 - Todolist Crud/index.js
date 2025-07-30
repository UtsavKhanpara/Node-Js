const express=require("express");
const port=9091;
const app=express();
let record=[];

app.set("view engine","ejs")
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    return res.render("view",{
        record
    });
})
app.get('/add',(req,res)=>{
    return res.render("add");
})

app.post('/adduser',(req,res)=>{
    let {name,email,password}=req.body;

    let obj={
        id:Math.floor(Math.random()*1000),
        name,
        email,
        password
    }
    record.push(obj);
    console.log("Record Added");
    return res.redirect('/');
})

app.get('/deleteuser',(req,res)=>{
    let id=req.query.deleteid;
    let deletedata=record.filter(val=>val.id != id)
    record=deletedata;
    console.log("Record Deleted");
    return res.redirect('/');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server running on port`+port);
})