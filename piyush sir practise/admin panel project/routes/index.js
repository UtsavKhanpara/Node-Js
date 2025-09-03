const express=require("express");
const { loginUser, loginPage } = require("../controllers/authctl");
const routes=express.Router();


routes.use("/admin",require("./admin.routes"))
routes.post('/login',loginUser)
routes.get('/',loginPage)
module.exports=routes;