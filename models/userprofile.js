var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

require('mongoose-long')(mongoose);
mongoose.set('debug', true);
var userSchema = new mongoose.Schema({
    userName: {type:String,index: true},
    firstName:String,
    lastName : String,
    password: {type:String},
    email: String,
    city: String,
    address:String,
    mobileNo : {type: SchemaTypes.Long, min: 0, default: 0}
  
    
});


module.exports = mongoose.model('user', userSchema);