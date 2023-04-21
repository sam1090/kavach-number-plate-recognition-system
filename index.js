const express = require('express');
const app= express();
const dbConnect = require('./config/dbConnect');
const PORT = process.env.PORT || 8000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cloudinaryRouter =require('./routes/cloudinaryRoutes') ;
const mainRouter =require('./routes/mainRoutes') ;

dbConnect();
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// app.use('/api/cloudinary/v1',cloudinaryRouter);
app.use('/api/main/v1',mainRouter);

app.listen(PORT,()=>{
  console.log(`server is running on PORT ${PORT} `);
})
