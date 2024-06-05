const mongoose = require('mongoose')

const connectDB= mongoose.connect('mongodb+srv://jihenelahbibipro:jiheneMGDB23@jihene.mydblmc.mongodb.net/profinal', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('database connected');
}).catch ((err)=>{
    console.log("database connection failed !!");
})

module.exports = connectDB;
