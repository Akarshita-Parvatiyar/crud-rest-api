const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')

//setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb+srv://soul-sister:akarshita@cluster0.4d3dv.mongodb.net/ninja?retryWrites=true&w=majority')
mongoose.Promise = global.Promise

//for frontend
app.use(express.static('public'))

//middleware
app.use(bodyParser.json())

//initialize routes
app.use('/api',routes)

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
})

app.listen(process.env.port || 5000, () => {
    console.log('listening to requests.....')
})