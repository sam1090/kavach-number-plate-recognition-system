const asyncHandler = require('express-async-handler');
const BasicSchema = require('../models/basicModel');


exports.create= asyncHandler(async(req,res)=>{
 try {
  const data = req.body;

  const info = await BasicSchema.create(data);

  res.json({
    info
  })
 } catch (error) {
  throw new Error(error);
 } 

});

exports.getInfo = asyncHandler(async(req,res)=>{
  try {
    const info = await BasicSchema.find();

    res.status(200).json({
      size:info.length,
      info
    });
    
  } catch (error) {
    throw new Error(error);
  }
})

