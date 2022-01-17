const express = require('express')
const Ninja = require('../models/ninja')
const router = express.Router()

//get a list of ninjas
router.get('/ninjas',(req,res,next) => {
    Ninja.find({})
    .then(function(ninjas){
        res.send(ninjas)
    })
    // res.send({type : 'GET'})
    // Ninja.aggregate().near({
    //     near: {
    //      'type': 'Point',
    //      'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    //     },
    //     maxDistance: 100000,
    //     spherical: true,
    //     distanceField: "dis"
    //    })
})

//add a new ninja
router.post('/ninjas',(req,res,next) => {
    Ninja.create(req.body)
    .then((ninjas) => {
        res.send(ninjas)
    })
    .catch(next);
})

//update ninja
router.put('/ninjas/:id',(req,res,next) => {
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(function(){
        Ninja.findOne({_id:req.params.id})
        .then(function(ninja){
            res.send(ninja)
        })
    })
    // res.send({type : 'PUT'})
})

//delete a ninja
router.delete('/ninjas/:id',(req,res,next) => {
    Ninja.findByIdAndRemove({_id:req.params.id})
    .then(function(ninja){
        res.send(ninja)
    })
    // res.send({type : 'DELETE'})
})

module.exports = router
