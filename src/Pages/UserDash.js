import React from 'react'
// import { useSelector } from 'react-redux'
import { getLocalStorage } from '../helpers/localStorage'
import Navigation from '../components/Navigation';
import { getCookie } from '../helpers/cookies';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const UserDash = () => {
  // const info = useSelector(state=>state.auth)
  // console.log(info)
  const userInfo = getLocalStorage('user');
  console.log(userInfo);
  const token = getCookie('token')
  console.log(token);
  return (
    <>
      <Navigation/>
    <div>Welcome back {userInfo.name}</div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  
  )
}

export default UserDash