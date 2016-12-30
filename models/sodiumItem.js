const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    content:{type: String, required: true},
    sodiumLevel:{type: Number, required: true},
    user: {type:String}
})

module.exports = mongoose.model('SodiumItem', schema);