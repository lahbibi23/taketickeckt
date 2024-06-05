
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ticketSchema= require('../models/ticketsmodels');
const userSchema = require('../models/usermodel');
const eventSchema= require('../models/eventmodels')


// register 

exports.register = async(req,res)=>{
try{
const {name,email,password} = req.body;
// test sur l'existance de l'email
const exist = await userSchema.findOne({email});
if(exist){
    return res.status(400).json({msg:"email adress already used "})
}

// creation du compte
 const newUser = await new userSchema(req.body);
 const saltRounds = 10;
 const salt = bcrypt.genSaltSync(saltRounds);
 const hash = bcrypt.hashSync(password,salt);
 newUser.password = hash;
 // creation du token 
 const payload = {id : newUser._id};
 var token = jwt.sign(payload,"first");
 newUser.save();
 res.status(200).json({msg:"user created with sucess",newUser});

}catch(err){
res.status(500).json({msg:"you can't create this account "})
}
}
//get user
exports.allUsers = async(req,res)=>{
    try{
    const users = await userSchema.find();
    res.status(200).json({msg:'list of users',users})
    }catch(err){
res.status(500).json({msg:"server error"})
    }
}

// login 

exports.login = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const found = await userSchema.findOne({email});
        if(!found){
            return res.status(400).json({msg:"no account with this email"})
        }
        // found true 
        const match = await bcrypt.compare(password,found.password);
        if(!match){
            return res.status(400).json({msg:"invalid credantials"})
        }
        const payload = {id: found._id};
        const token = jwt.sign(payload,"first");
       res.status(200).json({msg:"user logged in with sucess",token,found})
    }catch(err){
    res.status(500).json({msg:"server error"})
    }
}

//delete user
exports.deleteUser=async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    try {
        const Remove= await userSchema.findOneAndDelete(id);
        res.status(200).json({msg:"user deleted with succec"})
    }catch(err){
        res.status(500).json({msg:"server error"})
        }
}


//tickets
exports.createTicket= async(req,res)=>{

    const {_id} = req.user;
    const eventId = req.params;
    const {quantity,categorie} =req.body
    console.log(quantity,categorie);
    console.log(eventId)
    try{
        const event = await eventSchema.findById({_id:eventId.id}); // tala3et evenement
        const user = await userSchema.findById({_id}); // 3rafet el user
        for(let i=0; i<quantity ;i++){
          
            let newTicket = await ticketSchema.insertMany([{
                ticketNumber:event.tickets.length + 1+i,
                categorie,
                orderBy: user?._id,
                eventInfo:event?._id
              }])
              const updateEvent= await event.updateOne({$push:{tickets:newTicket}})
            //   console.log('updated event',updateEvent);       
               
        }
        
        if(categorie === "vip"){
            const vipQty = await event.updateOne({$inc:{"VipTickets.qty":-quantity}})
        }else if(categorie === "normal"){
            const normalQty = await event.updateOne({$inc:{"normalTickets.qty":-quantity}})

        }
       
        res.status(200).json({message:'ticket sold '}) 
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'cannot add this event'})
    }
}

exports.getTicket=async(req,res)=>{
    const {id}= req.user
    console.log(id)
    try{
        const ticket= await ticketSchema.find({orderBy:id}).populate('orderBy').populate('eventInfo')
        res.status(200).json({message:'my tickets',ticket})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'server error'})
    }
}
//EVENT
exports.getEvent = async(req,res)=>{
    try{
        const event= await eventSchema.find()
        res.status(200).json({msg:"my events",event})
    }
    catch (error){
        console.log(error);
        res.satuts(500).json({msg:"server error"})
    }
    }
    exports.getEventWithId=async(req,res)=>{
        const{id}=req.params;
        try{
           
            const event =  await eventSchema.findById({_id:id})
            res.status(200).json({msg:'the event',event})
        }
        catch(error){
            console.log(error);
            res.status(500).json({msg:"serves error"})

        }
    }
    //delete eevent 
    exports.deleteEvent=async(req,res)=>{
        const {id} = req.params;
        console.log(id)
        try {
            const Remove= await eventSchema.findByIdAndDelete(id);
            res.status(200).json({msg:"event deleted with succec"})
        }catch(err){
            res.status(500).json({msg:"server error"})
            }
    }