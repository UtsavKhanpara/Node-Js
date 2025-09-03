const express=require("express");
const routes=express.Router();

const budgetnewctl=require("../controllers/budgetctl")

routes.get("/addbudget",budgetnewctl.addbudget)

module.exports=routes;