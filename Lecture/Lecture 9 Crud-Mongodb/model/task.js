const mongoose = require("mongoose");

const multer=require("multer")
const imagepath="./uploads"
const path=require("path")

const taskSchema =  mongoose.Schema(
  {
    title: { type: String, 
            required: true },
    description: {
         type: String,
        required: true },
    category:
     { type: String,
     required: true },
     
    price: { type: Number,
         required: true }, 
    status: {
      type: String,
      enum: ["open", "in-progress", "review", "done"],
      default: "open",
      required: true,
    },
    profile:{
      type:String,
      required:true
    }
  },
);

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,path.join(__dirname,'..','uploads'));
  },
  filename:(req,file,cb)=>{ 
   cb(null,file.fieldname+ '-' + Date.now());
  }
})

taskSchema.statics.uploadimage=multer({storage:storage}).single("profile")

module.exports = mongoose.model("Task", taskSchema);
