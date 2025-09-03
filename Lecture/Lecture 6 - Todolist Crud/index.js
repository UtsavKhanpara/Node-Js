const express=require("express");
const port=9000;
const app=express();
let  record=[];

app.set("view engine","ejs");
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    return res.render('view',{
        record
    })
});

app.get('/add',(req,res)=>{
    return res.render('add')
})

app.post('/adduser',(req,res)=>{
    const{name,email,password}=req.body;

    const obj={
        id:Math.floor(Math.random()*10000),
        name,
        email,  
        password
    }
    record.push(obj);
    console.log("Record Added");
    return res.redirect('/');
})

app.get('/edituser',(req,res)=>{
    let id=req.query.editid;
    let single=record.find(val=>val.id ==id);
    return res.render('/edit',{
        single
    })
})

app.get('/deleteuser',(req,res)=>{
    const id=req.query.deleteid;
    const deletedata=record.filter(val=>val.id !=id);
    record=deletedata;
    console.log("Record Deleted");
    return res.redirect('/');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is running on port ${port}`);
    
})