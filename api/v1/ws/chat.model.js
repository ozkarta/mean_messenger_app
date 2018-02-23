let mongoose = require('mongoose');

let chatSchema = new mongoose.Schema({

}, {
  timestamps: true
});
let chatModel = mongoose.model('Chat', chatSchema);

exports.model = chatModel;
exports.schema = chatSchema;