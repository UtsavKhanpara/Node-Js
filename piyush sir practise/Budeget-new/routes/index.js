const express=require("express");
const routes=express.Router();

routes.use("/budget",require("./budget.routes"))

module.exports=routes;