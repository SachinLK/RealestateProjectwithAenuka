const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title can not be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  type: {
    type: String,
    enum: ['House', 'Apartment', 'Condo', 'Land'],
    required: [true, 'Please add a property type']
  },
  bedrooms: {
    type: Number
  },
  bathrooms: {
    type: Number
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/400x300?text=No+Image'
  },
  lister: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Listing', listingSchema);
