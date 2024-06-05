import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navigation from '../../components/Navigation';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { getCookie } from '../../helpers/cookies';
import { useParams } from 'react-router-dom';


const GestionEvent=()=> {
const token=getCookie("token")     
//     const [values,setValues]=useState({eventName: "",Eventimage: "",eventlcalisation: "",eventDate:"",ticket:"" ,viptickt:"",nrmltickt:"",desc:""})
//      console.log(values)
//  const addEvent =async()=>{
       
//          await axios.post('http://localhost:4000/api/addEvent',{headers:{
//             "Authorization":token
//     }})
//             .then((res)=>{
//                 console.log("add",res)
               
//               })
//          .catch((err)=>{
//          console.log(err);
//          })
//       }
//     const haandlChange =(e)=>{
//        setValues({...values,[e.target.name]:[e.target.value]})
         
//     }
   
//Getallevent
    const [event,setEvent]=useState([])
    console.log("tab",event);
     const allEvents = async ()=>{
    await axios.get('http://localhost:4000/api/myevents')
    .then((res)=>{
    console.log(res);
    setEvent(res.data.event)
    }).catch((err)=>{
    console.log(err)
    })
    } 
    useEffect(()=>{
        allEvents()
    },[])

    //delete
    const [eve,setEve]=useState([])
    const id =useParams()
    const deleteEvent= async ()=>{
        await axios.delete(`http://localhost:4000/api/deleteEvent/${id}`, {headers:{
            "Authorization":token}})
            .then((res)=>{
              setEve(eve.filter((el)=>el._id !== id))
              
        
            console.log(res);
        })
      }

   




  return (
    <> 
    <Navigation/>
    
    <div>
     
             <Table striped bordered hover size="sm">
<thead>
 <tr>
   <th>#</th>
   <th>EventName</th>
   <th> qty </th>
   <th>qty VIP</th>
 </tr>
</thead>

{event.map((el,index)=>{
  return(
     <tbody>
  <tr>
   
   <td>{el.eventName}</td>
   <td>{el.eventTickets}</td>
   <td>{el.VipTickets.qty}</td>
   <td>{el.normalTickets.qty}</td>
   <td><button onClick={()=>{deleteEvent()}}>delete</button></td> 
   
 </tr>
  </tbody>)
  })}
   <tr>
    <td></td>
    <td colSpan={4}> <button>Add Event</button>  </td>
    
   </tr>
</Table>    
  {/* <input   type="text"  placeholder='eventName'  name='name' onChange={(e)=>haandlChange(e)}/>
  <input   type="text"  placeholder='eventDate'  name='date'  onChange={(e)=>{haandlChange(e)}}/>
  <input   type="text"  placeholder='eventlcalisation'  name='locaal'  onChange={(e)=>{haandlChange(e)}}/>
  <input   type="number"  placeholder='ticket'  name='ticket'  onChange={(e)=>{haandlChange(e)}}/>
  <input   type="number"  placeholder='viptickt'  name='vipticket'  onChange={(e)=>{haandlChange(e)}}/>
  <input   type="number"  placeholder='nrmltickt'  name='nrmlticket'onChange={(e)=>{haandlChange(e)}}/>
  <input   type="file"  placeholder='imagee'  name='img'onChange={(e)=>{haandlChange(e)}}/>
  <input   type="text"  placeholder='desc'  name='descp'onChange={(e)=>{haandlChange(e)}}/> */}

</div>
</>
  )
}

export default GestionEvent