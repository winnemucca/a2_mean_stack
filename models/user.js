const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let schema = new Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    password:{type: String, required: true},
    email:{type: String, required: true, unique:true}
    //messages: [{type: String, ref: 'Item'}]
})

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('SodiumUser', schema);