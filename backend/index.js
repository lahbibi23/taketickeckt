const express =require("express");
const app= express();
const cors= require("cors");
const connectDB = require("./config/connectDB");
const userRoutes = require('./routes/userroute');
const eventRouter = require("./routes/eventRoute");
const port = 4000;

connectDB;

app.use('/Public',express.static('Public'));
app.use(express.json({extended: false}));
app.use(cors({origin:"http://localhost:3000"}));
app.use('/api',userRoutes);
app.use('/api',eventRouter)

app.listen(port,(err)=>{
    (err)?console.log(err):console.log(`the server running at ${port}`)
})
