const moment = require("moment");
const adminmodel = require("../model/adminmodel");
const fs = require("fs");
const path = require("path");

module.exports.godashboard = async (req, res) => {
  try {
    return res.render("dashboard");
  } catch (err) {
    console.log(err);
    return res.redirect("/admin");
  }
};
module.exports.addnewadmin = async (req, res) => {
  try {
    return res.render("addAdmin");
  } catch (err) {
    console.log(err);
    return res.redirect("/admin");
  }
};
module.exports.viewnewadmin = async (req, res) => {
  try {
    var search = "";
    if (req.query.search) {
      search = req.query.search;
    }
    const alladmin = await adminmodel.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i" } },
      ],
    });
    return res.render("viewadmin", {
      alladmin,
    });
  } catch (err) {
    console.log(err);
    return res.redirect("/admin");
  }
};
module.exports.singleAdmin = async (req, res) => {
  try {
    console.log(req.params.id);
    let admindata = await adminmodel.findById(req.params.id);
    console.log(admindata);
    return res.status(200).json({
      status: "success",
      data: admindata,
    });
  } catch (err) {
    return res.redirect("/admin/addAdmin");
  }
};
module.exports.insertadmindata = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    if (req.file) {
      req.body.profile = adminmodel.adminimage + "/" + req.file.filename;
    }
    req.body.name = req.body.fname + " " + req.body.lname;
    const addadmin = await adminmodel.create(req.body);
    if (addadmin) {
      console.log("Data Added");
      return res.redirect("/admin/viewadmin");
    } else {
      console.log("Data not inserted");
      return res.redirect("/admin/addadmin");
    }
  } catch (err) {
    console.log("Error fetch data", err);
    return res.redirect("/admin/addadmin");
  }
};

module.exports.deleteadmin = async (req, res) => {
  try {
    console.log(req.params.adminid);
    let adminrecord = await adminmodel.findById(req.params.adminid);
    if (adminrecord) {
      try {
        let imagepath = path.join(__dirname, "..", adminrecord.profile);
        fs.unlinkSync(imagepath);
      } catch (err) {
        console.log("errr", err);
        return res.redirect("/admin/addAdmin");
      }
    }

    let deleteadmin = await adminmodel.findByIdAndDelete(req.params.adminid);
    if (deleteadmin) {
      console.log("Record Deleted");
      return res.redirect("/admin/viewAdmin");
    } else {
      console.log("Something Wrong Record Not Delete");
      return res.redirect("/admin/addAdmin");
    }
  } catch (err) {
    console.log(err);
    return res.redirect("/admin/addAdmin");
  }
};

module.exports.editadmin = async (req, res) => {
  try {
    let admindata = await adminmodel.findById(req.params.adminid);
    if (admindata) {
      return await res.render("updateadmin", {
        admindata,
      });
    } else {
      console.log("something Wrong");
      return res.redirect("/admin/addAdmin");
    }
  } catch (err) {
    console.log("Errr");
    return await res.redirect("/admin/addAdmin");
  }
};

module.exports.updateadmindata = async (req, res) => {
  try {
    let admindata = await adminmodel.findById(req.params.adminid);
    if (admindata) {
      if (req.file) {
        let imagepath = path.join(__dirname, "..", admindata.profile);
        fs.unlinkSync(imagepath);
        req.body.profile = adminmodel.adminimage + "/" + req.file.filename;
      }
    } else {
      console.log("something Wrong");
      return res.redirect("/admin/addAdmin");
    }
    req.body.name = req.body.fname + " " + req.body.lname;

    let updatedata = await adminmodel.findByIdAndUpdate(
      req.params.adminid,
      req.body
    );
    if (updatedata) {
      console.log("Record Edit Succsessfully");
      return res.redirect("/admin/viewAdmin");
    } else {
      console.log("Someething Wrong Record Not Edit");
      return res.redirect("/admin/addAdmin");
    }
  } catch (err) {
    console.log("error", err);
    return res.redirect("/admin/addAdmin");
  }
};
