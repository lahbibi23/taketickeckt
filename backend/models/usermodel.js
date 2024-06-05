const mongooe = require("mongoose");

const userSchema= new mongooe.Schema({
    name :{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required: true,

    },
    role:{
        type:String,
        default:"user"
    }

})
 
module.exports=mongooe.model ("user",userSchema)