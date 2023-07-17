require('dotenv').config()
require('express-async-errors')
const cors = require('cors')
const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/routes')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const port = 5000

app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(express.json()) // This is use when the front end throws a json data
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandler)
// app.get('/',(req,res)=>{
//     console.log('Access')
//     res.status(200).json({success:true})
// })

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log('Server is listening.....')
        })
    }catch(error){
        console.log(error)
    }
}

start()

//App -> Routes -> Controller -> Model ->
// Step 3-1 should be setup first then proceed to model

