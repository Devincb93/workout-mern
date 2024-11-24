require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const workoutRoutes = require('./Routes/workouts')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts/', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
        console.log(`Connected to DB & listening on ${process.env.PORT}`)
})
    })
    .catch((error)=>{
        console.log(error)
    })



