const express=require("express")
const routes=express.Router();

const blogctl=require("../controllers/blogctl");

routes.get("/blogpage",blogctl.blogAdd)
routes.use("/comment",require("./comment.routes"))


module.exports=routes;