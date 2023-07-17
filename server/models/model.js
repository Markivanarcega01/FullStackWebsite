const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, //validator
        maxlength:20, // validator
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',taskSchema)
// if multiple schemas and model do this
// const Task =  mongoose.model('Task',taskSchema)
// const DifferentTask =  mongoose.model('Task',taskSchema)
// module.exports = {
//     Task,DifferentTask
// }
// Then import it to the controller as this const {Task,DifferentTask} = require(Path)