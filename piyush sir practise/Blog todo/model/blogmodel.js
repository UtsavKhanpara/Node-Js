const mongoose = require("mongoose");
const multer = require("multer");

const blogschema = mongoose.Schema({
    blogtitle: {
        type: String,
        required: true
    },
    blogdescription: {
        type: String,
        required: true
    },
    blogtype: {
        type: String,
        required: true
    },
    blogimage: {
        type: String,
        required: true
    }
});

const blog = mongoose.model("blog", blogschema);
module.exports = blog;
