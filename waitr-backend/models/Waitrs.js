/* In waitrs.js */
// Require mongoose in this file.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a schema.
const waitrSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    max: 5,
    min: 0,
    required: true,
  },
  waitr_type: {
    type:String,
    required: true,
  },
  biography: {
    type:String,
    required: true,
  },
  skills: {
    type:String,
},
  events: [{
    type: Schema.Types.ObjectId, ref:'events-collection'
  }],
  events_worked: {
    type:Number,
    min:0
  },
  five_star_ratings: {
    type:Number,
    min:0
  },
  great_service: {
    type:Number,
    min:0
  },
  greats: {
    type:Number,
    min:0
  },
  created_at: {
    type:Date,
    default:Date.now()
    }
});

// Create a model using schema.
const waitrs = mongoose.model('waitr-collection', waitrSchema);

// Make this available to our Node applications.
module.exports = waitrs;