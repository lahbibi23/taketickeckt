
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Log from './components/auth/Log';

import UserDash from './Pages/UserDash';
import Homepage from './Pages/Homepage';
import Listevent from './Pages/Listevent';
import Booking from './Pages/Booking';
import AdminRoutes from './privateRoutes/AdminRoutes'
import UserRoute from './privateRoutes/UserRoutes'
import MyOrders from './Pages/Myorders'
import GestionUser from './Pages/admin/GestionUser';
import GestionEvent from './Pages/admin/GestionEvent';
import AdminDash from './Pages/admin/AdminDash';

function App() {
  return (
    <div className="App">
    
    <Routes>
      
      <Route path="/" element={<Homepage/>}/>
      
       <Route path ="/event" element= {<Listevent/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/signin" element={<Log/>}/>
      <Route element= {<UserRoute/>}>
      <Route path="/booking/:title" element={<Booking/>}/> 
      <Route path="/user" element={<UserDash/>}/>
      <Route path="/orders" element={<MyOrders/>}/>
      </Route>
      <Route element= {<AdminRoutes/>}>
      <Route path="/admin" element={<AdminDash/>}/>
      <Route path="/gestionuser" element={<GestionUser/>}/>
      <Route path="/gestionevent" element={<GestionEvent/>}/>
      </Route>
     
    </Routes> 
    
    </div>
  )

}

export default App;
