const mongoose = require('mongoose')
const Task = require('../models/model')

const getAllTasks =async(req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json(tasks)
}

const createTask = async(req,res)=>{
    const task = await Task.create(req.body)
    res.status(200).json(task)
}
const getTask = async(req,res) =>{
    const taskID = req.params.id
    const find = await Task.find({_id:taskID})
    res.status(201).json(find)
}
const updateTask = async(req,res) =>{
    const {id} = req.params
    const update = await Task.findOneAndUpdate({_id:id},req.body,{
        new:true,
        runValidators:true
    })
    res.status(201).json(update)
}
const deleteTask = async(req,res)=>{
    const {id} = req.params
    const deleteTask = await Task.findOneAndDelete({_id:id})
    res.status(200).json(deleteTask)
}
const deleteAll = async(req,res)=>{
const deleteAll = await Task.deleteMany({name:/\w/})
    res.status(200).json(deleteAll)
}
module.exports=  {
    getAllTasks,createTask,getTask,updateTask,deleteTask,deleteAll
}