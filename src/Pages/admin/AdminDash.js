import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from '../../components/Navigation';
import { useNavigate } from 'react-router-dom';



const AdminDash = () => {
 const navigate=useNavigate()



  return (
    <>
    <Navigation/>
    <div ></div>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1}).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>USERS</Card.Title>
              <Card.Text>
               
              </Card.Text>
              <button onClick={()=>navigate('/gestionuser')}>See More</button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>EVENTS</Card.Title>
              <Card.Text>
               
              </Card.Text>
              <button onClick={()=>navigate('/gestionevent')}>See More</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );



}

export default AdminDash