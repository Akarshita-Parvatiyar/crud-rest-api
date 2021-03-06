const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create geolocation schema
const GeoSchema = new Schema({
    type:{
        type: String,
        default:"point"
    },
    coordinate:{
        type:[Number],
        index:"2dsphere"
    }
})

//create ninja schema and model
const NinjaSchema = new Schema({
    name : {
        type: String,
        required:[true,"name field is required"]
    },
    rank : {
        type: String,
    },
    available : {
        type: Boolean,
        default:false
    },
    geometry:GeoSchema
})

const Ninja = mongoose.model('ninjas',NinjaSchema)

module.exports = Ninja