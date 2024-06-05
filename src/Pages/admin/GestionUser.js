
  import { useState,useEffect  } from 'react';
  import axios from 'axios'
  import {getCookie} from '../../helpers/cookies'
  import { useNavigate, useParams } from 'react-router-dom';
  import Navigation from '../../components/Navigation';
  import { useDispatch, useSelector } from 'react-redux';
  import { setEvent } from '../../App/EventSlice';
  import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';



 
  const GestionUser = () => {
    // const dispatch=useDispatch()
    // const lit=useSelector(state=>state.event)
    const navigate=useNavigate()
   
    const [values,setValues] = useState({name:"",image:""})
  
    const token=getCookie("token")
    console.log(token);

   
    const [users,setUsers]=useState([])
    console.log("tab" ,users)
   const allUsers = async()=>{
    await axios.get('http://localhost:4000/api/allUser', {headers:{
        "Authorization":token}})
        .then((res)=>{
            console.log("all",res.data.users)
            setUsers(res.data.users)
        }).catch((err)=>{
            console.log(err)
           
        })
   }
   useEffect(()=>{
       allUsers()
     },[])




    const id =useParams()
    const deleteUser= async ()=>{
        await axios.delete(`http://localhost:4000/api/deleteUser/${id}`, {headers:{
            "Authorization":token}})
            .then((res)=>{
              setUsers(users.filter((el)=>el._id !== id))
              
        
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Remove</th>
        </tr>
      </thead>
      
      {users.map((el,index)=>{
         return(
            <tbody>
         <tr>
          
          <td>{el.name}</td>
          <td>{el.email}</td>
          <td><button onClick={()=>deleteUser()}>delete</button></td>
        </tr>
         </tbody>)
         })}
    </Table>
                
            
           
    </div>
      </>
    );
  };
  export default GestionUser;