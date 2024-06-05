import React from 'react'
import { useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { getCookie } from '../helpers/cookies';
import {useState,useEffect}  from 'react'
import Navigation from '../components/Navigation';


function Booking() {
   const params=useParams();
   console.log(params)
   const [quantity,setQuantity] = useState()
   const [categorie,setCategorie] = useState('');
   const token = getCookie("token")
   console.log(token);
   const [event,setEvent]=useState([])
   console.log(event);
  const bookevent = async ()=>{
    await axios.get(`http://localhost:4000/api/thevent/${params.title}`,{headers:{
      "Authorization":token}})
    .then((res)=>{
      
      console.log(res.data.event);
       setEvent(res.data.event)
    }).catch((err)=>{
      console.log(err)
    })
  }

   const Alerte= ()=> {
    alert("Vous avez réservé votre billet, veuillez consulter votre panier")
   }

    const Booking = async()=>{
      await axios.post(`http://localhost:4000/api/tickets/${params.title}`,{quantity:quantity,categorie:categorie},{headers:{
          "Authorization":token
      }}).then((res)=>{
          console.log(res);
          Alerte()
      }).catch((err)=>{
          console.log(err);
      })
  }

    

  
  
   useEffect(()=>{
    bookevent()
   },[])


    return (
      <>
      <Navigation/>
      <div>
          
      <div >
                  <h1>{event.eventName}</h1>
                 {/* Vip Tickets: <h2>{event.VipTickets.qty}</h2>
                 Normal Tickets: <h2>{event.normalTickets.qty}</h2> */}
                  
          </div>
          <input type='number' onChange={(e)=>setQuantity(Number(e.target.value))}/>
          <div>
          <select onChange={(e)=>setCategorie(e.target.value)}>
              <option></option>
              <option>vip</option>
              <option>normal</option>
          </select>
          </div>
          <div>
     <button onClick={()=>Booking()}>Booking</button>
      </div>
      </div>
      </>
    )
  }

  


export default Booking
