import React, { useState } from 'react';
import axios from "axios";
import Navigation from '../Navigation';
import { useNavigate } from 'react-router-dom';




const Register = () => {
    const [values,setValues] = useState({name:"",email:"",password:""});
   const navigate= useNavigate()
    const handelSubmit =async(event)=>{
        
        await axios.post("http://localhost:4000/api/register",{...values}).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    
}
    return (
    <div style={{backgroundColor:""}}>
      <Navigation/>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBlock:"50px"}}>
      <div  style={{ height:"400px",width:"500px",display:"flex",flexDirection:"column",justifyContent:"center" ,textAlign:"initial"}}>
            <label for="name">Name  :</label>
            <input type="text" placeholder='name'  name="name" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
            <label for="email">Email  :</label>
            <input type="email" placeholder='email@agag.com' name="email" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
            <label for="password">Password  :</label>
            <input type="password" placeholder='password' name="password" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
            <div style={{marginBlock:"50px",display:"flex",justifyContent:"center"}}>
            <button onClick={()=>handelSubmit()}> create an account</button>
            </div>
            
     </div>
     </div>
    </div>
  )}
  export default Register