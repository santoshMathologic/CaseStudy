var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

require('mongoose-long')(mongoose);
mongoose.set('debug', true);
var positionSchema = new mongoose.Schema({
    positionName: {type:String,index: true},
});


module.exports = mongoose.model('position', positionSchema);