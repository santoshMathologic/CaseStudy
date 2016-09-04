var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

require('mongoose-long')(mongoose);
mongoose.set('debug', true);
var shippingDocumentSchema = new mongoose.Schema({
    purchaseOrder: { type: SchemaTypes.Long, min: 0, default: 0 },
    PostDate: { type: Date, default: Date.now },
    arrivalDate: { type: Date, default: Date.now },
    sourceZip: { type: SchemaTypes.Long, min: 0, default: 0 },
    destinationZip: { type: SchemaTypes.Long, min: 0, default: 0 },
});


module.exports = mongoose.model('shipping', shippingDocumentSchema);