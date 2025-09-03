const express = require("express");
const port = 9093;
const path = require("path");
const multer = require("multer");
const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const db = require("./config/db");
const blog = require("./model/blogmodel");
app.set("view engine", "ejs");
app.use(express.urlencoded());
// Multer storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
         cb(null,file.fieldname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage });
// Show all blogs
app.get("/", async (req, res) => {
    const blogs = await blog.find();
    res.render("view", { blogs });
});
// Show add form
app.get("/add", async (req, res) => {
    res.render("add");
});
// Add blog
app.post("/adduser", upload.single("blogimage"), async (req, res) => {
    let blogtype = req.body.blogtype;

    if (blogtype && blogtype.join) {  
        blogtype = blogtype.join(", ");
    }
    await blog.create({
        blogtitle: req.body.blogtitle,
        blogdescription: req.body.blogdescription,
        blogtype: blogtype,
        blogimage: req.file.filename
    });

    res.redirect("/");
});
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server is running on port ${port}`);
});
