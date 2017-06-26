var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entitySchema = new Schema({
  value: { type: String, required: true }
});

module.exports = mongoose.model('Entity', entitySchema);
