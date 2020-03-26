const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: Number,
  todo: String,
  complete: {
    type: Boolean,
    default: false
  },
  edit: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('TODO', todoSchema);
