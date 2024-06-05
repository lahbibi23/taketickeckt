const express = require('express');
const {authMiddleware}= require('../middlewares/authMiddleware')
const { register, allUsers, login,createTicket, getTicket, deleteUser} = require('../controlls/user');

const userRoutes = express.Router();


userRoutes.post('/register',register);
userRoutes.post('/login',login)
userRoutes.post('/tickets/:id' , authMiddleware,createTicket)
userRoutes.get('/myTickets', authMiddleware, getTicket)

userRoutes.delete('/deleteUser/:id', authMiddleware, deleteUser)




//admins

userRoutes.get('/allUser',authMiddleware,allUsers)

module.exports = userRoutes