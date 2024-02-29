require('dotenv').config()
const jobRoutes = require('./routes/jobAppRoutes')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')





const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', jobRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen( process.env.PORT, ()=>{
        console.log('server is listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)  
})




