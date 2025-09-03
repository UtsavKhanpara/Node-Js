const express=require("express");
const routes=express.Router();

const cmtctl=require("../controllers/cmtctl");

routes.get("/commentpage",cmtctl.commentAdd)

module.exports=routes;