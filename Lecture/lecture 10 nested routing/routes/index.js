const express=require("express");
const routes=express.Router();

routes.use("/blog",require("./blog.routes"))
routes.use("/comment",require("./comment.routes"))

module.exports=routes;