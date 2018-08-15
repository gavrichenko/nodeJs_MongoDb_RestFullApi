const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FlowerSchema = new Schema({
  name: {
    type: String,
    required: 'Pls enter the name of the flower'
  },
  description: {
    type: String,
    default: "no description"
  },
  comments: {
    type: [{
      type: String,
    }],
    default: ['no comments']
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  price: {
    type: Number,
    min: 0,
    default: 0
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Flowers', FlowerSchema);