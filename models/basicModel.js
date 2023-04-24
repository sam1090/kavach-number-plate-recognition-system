const mongoose = require('mongoose');

const BasicSchema = new mongoose.Schema({

  image:{
    type:String,
  },

  regNumber:{
    type:String,
    required: true,
  },
  
   location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }

})

module.exports = mongoose.model('vehicle_data',BasicSchema);

 


