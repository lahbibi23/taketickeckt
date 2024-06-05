import { Button } from '@mui/material';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';


function CardEvents(el) {
    const prop=el.el
    console.log(prop.eventImage)
  
    const navigate= useNavigate()
  return (
    <div >
        
        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1}).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src= {`http://localhost:4000/Public/${prop.eventImage}`}/>
            <Card.Body>
              <Card.Title>{prop.eventName}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Button size="small" color="primary" onClick={()=>navigate(`/booking/${prop._id}`)}>
          booking
        </Button>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    
  );
}

export default CardEvents;