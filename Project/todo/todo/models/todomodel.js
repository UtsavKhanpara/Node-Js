const mongoose = require('mongoose');

const todoschema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    tasktype:{
        type:String,
        required:true
    },
    personname:{
        type:Array,
        required:true
    }
})
const Todo = mongoose.model('Todo', todoschema);

module.exports = Todo;