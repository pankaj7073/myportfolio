const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('Database connected successfully')
})
.catch((error)=>{
    console.log('Database not connected');
    console.log(error);
});