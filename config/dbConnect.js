// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

// // const url = process.env.MONGO_URI;
// const collectionName = 'vehicle_data';
// const url = process.env.MONGO_URI + '/' +'vehicle_data' + '?retryWrites=true&w=majority';
// const dbConnect = () =>{
//   try{
//   mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
//   console.log('database is connected');
//   }catch(error){
//     console.log(error);
//   }
// }


// module.exports = dbConnect; 

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// const dbName = process.env.MONGO_DB_NAME;
// const collectionName = 'vehicle_data';
const url = process.env.MONGO_URI

const dbConnect = () => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('database is connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConnect;
