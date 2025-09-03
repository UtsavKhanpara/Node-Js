const express = require('express');

const port = 8000;

const app = express();

const db = require("./config/db")

const path = require('path')

const Todomodel = require('./models/todomodel')

app.use(express.urlencoded())

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, "views"))


app.get("/", (req, res) => {
    return res.render('todo')
});
app.post("/addtask", async (req, res) => {
    console.log(req.body);
    await Todomodel.create(req.body);
    return res.redirect("/showtask")
})

app.get("/viewtask", async (req, res) => {
    let alltask = await Todomodel.find();
    return res.render('viewtodo', {
        'alltasks': alltask
    })
})
app.get("/deleteTodo", async (req, res) => {
    await Todomodel.findByIdAndDelete(req.query.todoId)
    return res.redirect("/viewtask")
})
app.get("/updateTodo/:tId", async (req, res) => {
    console.log(req.params.tId);
    let fetchobject = await Todomodel.findById(req.params.tId)
    return res.render('edittodo', {
       fetchobject
    })
});
app.post("/edittask/:id",async(req,res)=>{
    await Todomodel.findByIdAndUpdate(req.params.id,req.body)
   return res.redirect("/viewtask")
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port:${port}`);
})