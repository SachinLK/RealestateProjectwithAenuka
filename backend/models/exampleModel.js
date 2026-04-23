const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt
});

module.exports = mongoose.model('Example', exampleSchema);
