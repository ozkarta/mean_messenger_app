let mongoose = require('mongoose');

let chatMessageSchema = new mongoose.Schema({
  sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  text: {type: String},
  attachments: []
}, {
  timestamps: true
});

let chatMessageModel = mongoose.model('ChatMessage', chatMessageSchema);
exports.schema = chatMessageSchema;
exports.model = chatMessageModel;