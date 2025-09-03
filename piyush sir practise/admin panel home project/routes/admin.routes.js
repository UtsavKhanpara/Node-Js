const express = require("express");
const routes = express.Router();

const adminctl = require("../controllers/adminctl");
const adminmodel = require("../model/adminmodel");

routes.get("/", adminctl.godashboard);

routes.get("/adminpage", adminctl.godashboard);
routes.get("/addAdmin", adminctl.addnewadmin);
routes.get("/viewadmin", adminctl.viewnewadmin);
routes.post("/insertdata", adminmodel.uploadimage, adminctl.insertadmindata);

routes.get("/deleteadmin/:adminid", adminctl.deleteadmin);
routes.get("/editadmin/:adminid", adminctl.editadmin);
routes.post("/updateadmin/:adminid",adminmodel.uploadimage,adminctl.updateadmindata);
routes.post("/singleAdmin/:id", adminctl.singleAdmin);
module.exports = routes;
