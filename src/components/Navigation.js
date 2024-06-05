import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { getCookie,deleteCookie } from '../helpers/cookies';
import { isAuthenticated } from '../helpers/auth';

function Navigation() {
  const navigate =useNavigate()
  
   const token = getCookie('token')

   const logout = ()=>{
    localStorage.removeItem('user');
    deleteCookie('token');
    navigate('/')
  
  
    }
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
      <Navbar.Brand onClick={()=>navigate('/')}>WELCOM</Navbar.Brand>
       
        <Navbar.Brand onClick={()=>{
          isAuthenticated() && isAuthenticated().role  === 'user' ?
          navigate('/user'):navigate('/admin')
        }}>Take ticket </Navbar.Brand>
        
        
        <img src='/media/logo2.png' style={{height:100,width:100}} alt='logo'/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
           
          </Nav>
          <Nav>
        
      
            <Nav.Link onClick={()=>navigate('/orders')}>My order</Nav.Link>
            <Nav.Link  onClick={()=>navigate('/event')}>More Events</Nav.Link>
            <NavDropdown title=" book your event " id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"  onClick={()=>navigate('/signup')}>create an account</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3" onClick={()=>navigate('/signin')}>sign in</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={()=>logout()}>
                log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;