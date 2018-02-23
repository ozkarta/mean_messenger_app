let mongoose = require('mongoose');
let chatPlugin = require('../ws/ws-models/plugins/user-model.plugin');

let userSchema = new mongoose.Schema({
  firstName: {type: String, trim: true},
  lastName: {type: String, trim: true},
  email: {type: String, trim: true},
  address : {
    street: {type: String, trim: true},
    city: {type: String, trim: true},
    province: {type: String, trim: true},
    country: {type: String, trim: true},
    zip: {type: String, trim: true}
  },

  passwordHash: {type: String},
  role: {type: String, enum: ['regular']},
  searches: [{type: String, trim: true}]
}, {
  timestamps: true
});
userSchema.plugin(chatPlugin);
let userModel = mongoose.model('User', userSchema);

exports.model = userModel;
exports.schema = userSchema;