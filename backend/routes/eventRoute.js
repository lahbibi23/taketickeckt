const express = require('express');
const multer  = require('multer');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { getEvent, getEventWithId, deleteEvent } = require('../controlls/user')


const eventSchema = require('../models/eventmodels')

const eventRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Public')
    },
    filename: function (req, file, cb) {
        
        cb(null, file.originalname + Date.now())
    }
  });
  

  const fileFilter=(req, file, cb)=>{
   if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
       cb(null,true);
   }else{
       cb(null, false);
   }

  }

 const upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 });

eventRouter.post('/addEvent', authMiddleware,upload.single('eventImage'),async(req,res)=>{


   
try{
    const img = req.file.filename
    console.log(img);
    const {eventName,eventTickets,eventLocation,VipTickets,normalTickets,
        comercialAvailble,eventDate, eventDescription,categorie}=req.body;
        
   
    const newEvent = await new eventSchema({
        eventName,
        eventTickets,
        eventLocation,
        VipTickets,
        normalTickets,
        comercialAvailble,
        eventDate,
        categorie,
        eventImage:img, 
        eventDescription

    })
     newEvent.save()
    console.log(newEvent);
    res.status(200).json({message:'event added to database',newEvent})
}
catch(error){
    console.log(error);
    res.status(500).json({message:'cannot add this event'})
}
})
eventRouter.get('/myevents',getEvent);
eventRouter.get('/thevent/:id',authMiddleware,getEventWithId)
eventRouter.delete('/deleteEvent/:id',authMiddleware,deleteEvent)
module.exports=eventRouter
