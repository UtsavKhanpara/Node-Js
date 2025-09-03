
const mongoose=require("mongoose");

const multer=require("multer")
const path=require("path")
const adminpath="/uploads/adminimages"

const adminschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
         type:String,
        require:true
    },
    gender:{
         type:String,
        require:true
    },
    country:{
         type:String,
        require:true
    },
    profile:{
        type:String,
        require:true
    },
    message:{
         type:String,
        require:true
    },
    search:{
        type:String,
        require:true
    },
    skills:{
        type:Array,
        require:true
    },
    status:{
       type:Boolean,
        default:true,
        require:true
    },
    created_date:{
         type:String,
        require:true
    },
    updated_date:{
         type:String,
        require:true
    }
})

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"..",adminpath))
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + " -" +Date.now());
    }
})

adminschema.statics.uploadimage = multer ({storage:storage}).single("profile")
adminschema.statics.adminimage=adminpath;

const adminmodel=mongoose.model("homedata",adminschema)
module.exports=adminmodel;