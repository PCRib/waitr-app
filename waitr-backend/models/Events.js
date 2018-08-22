/* In waitrs.js */
// Require mongoose in this file.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a schema.
const eventsSchema = new Schema({
  event_date: {
    type: String,
    required: true,
  },
  event_time: {
    type: String,
    required: true,
  },
  event_price: {
    type:Number,
    required: true,
  },
  event_location: {
    type:String,
    required: true,
  },
  event_address: {
    type:String,
    required: true,
},
  waitrs_scheduled: [{
    type: Schema.Types.ObjectId, ref:'waitr-collection'
  }],
  event_client: {
    type:String,
    required: true,
  },
  event_type: {
    type:String,
    required: true,
  },
  attire: {
    type:String,
    required: true,
  },
  hourly_rate: {
    type:Number,
    min:0
  },
  created_at: {
    type:Date,
    default:Date.now()
    }
});

// Create a model using schema.
const events = mongoose.model('events-collection', eventsSchema);

// Make this available to our Node applications.
module.exports = events;