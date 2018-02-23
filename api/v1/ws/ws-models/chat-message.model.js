let mongoose = require('mongoose');

let chatMessageSchema = new mongoose.Schema({

}, {
  timestamps: true
});

let chatMessageModel = mongoose.model('ChatMessage', chatMessageSchema);
exports.schema = chatMessageSchema;
exports.model = chatMessageModel;