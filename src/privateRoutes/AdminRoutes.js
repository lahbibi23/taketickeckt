import React from 'react'
import {Navigate,useLocation,Outlet} from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';


const  AdminRoutes= () => {
    const location = useLocation();
    return (
    
        isAuthenticated() && isAuthenticated().role  === 'admin' ?(
           <Outlet/>
       
      ) : (< Navigate to='/user' state={{from : location}} replace/>)
    
  )

}

export default AdminRoutes;
