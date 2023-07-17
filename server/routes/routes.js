const express = require('express')
const router = express.Router()
const {getAllTasks,createTask,getTask,updateTask,deleteTask,deleteAll} = require('../controller/controller')


router.route('/').get(getAllTasks).post(createTask).delete(deleteAll)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router