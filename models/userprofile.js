var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);
var userSchema = new mongoose.Schema({
    userName: {type:String,index: true},
    firstName:String,
    lastName : String,
    password: {type:String,index: true},
    email: String,
    city: String,
    address:String,
    mobileNo:Number,
  
    
});


module.exports = mongoose.model('user', userSchema);