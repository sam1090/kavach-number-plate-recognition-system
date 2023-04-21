const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "dbcaadhuv",
  api_key: "821898199538332",
  api_secret: "4Ijb2BUmdR_HrhCs0ZliLoxfAbE"
});


// Generate 
exports.getImage = (req,res)=>{
  const {publicId} = req.params
  const imageUrl = cloudinary.url(publicId, {
    // width: 400,
    // height: 450,
    Crop: 'fill'
  });
  // The output url
  console.log(imageUrl);
  req.image =imageUrl;
  res.send(`<img src="${imageUrl}" alt="Image">`);
  console.log(req.image);
  // https://resi.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
  
}
