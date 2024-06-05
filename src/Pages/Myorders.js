import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { getCookie } from '../helpers/cookies';
import { setTicket } from '../App/TicketSlice';
import Navigation from '../components/Navigation';
import TicketCard from './TicketCard';

const MyOrders = () => {
    const myTickets = useSelector(state=>state.ticket);
    console.log(myTickets);
    const dispatch = useDispatch();
    const token = getCookie('token')
    const getTickets = async()=>{
        await axios.get('http://localhost:4000/api/MyTickets',{headers:{
            "Authorization":token
        }}).then((res)=>{
            console.log(res)
            dispatch(setTicket(res.data.ticket));
        }).catch((err)=>{
            console.log(err);
        })

    }

    useEffect(()=>{
      getTickets()
    },[])


  return (
    <>
    <Navigation/>
    <div>
        {myTickets.map((item,index)=>{
            return(
           <TicketCard ticket={item} key={index}/>
            )
        })}
        
    </div>
    </>
  )
}

export default MyOrders