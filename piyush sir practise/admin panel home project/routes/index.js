const express=require("express")
const routes=express.Router();

routes.use("/admin",require("./admin.routes"))
routes.use("/",require("./admin.routes"))

module.exports=routes;