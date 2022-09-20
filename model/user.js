var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:{type:String},
    age:{type:String}

});

var usermodel = mongoose.model('users',userSchema);
module.exports = usermodel;