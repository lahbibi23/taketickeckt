import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  axios from 'axios'

import  {setEvent}  from '../App/EventSlice';
import Navigation from '../components/Navigation';
import CardEvents from './CardEvents';
import SearchBar from '../components/SearchBar';

function Listevent() {
 
    const lit=useSelector(state=>state.event)
    console.log(lit)
    const dispatch = useDispatch();
    const listEvents= async()=>{
      await axios.get('http://localhost:4000/api/myevents')
      .then((res)=>{
        console.log(res.data.event)
        dispatch(setEvent((res.data.event)))
      })
    }
  useEffect(()=>{
    listEvents()
  },[])

   return (
     <>
     <Navigation/>
     <SearchBar/>
    <div > 
      {lit.map((el,index)=>{
        return(
          <CardEvents key={index} el={el} />
        )
      })}
    </div>
    </>
  )
}

export default Listevent
