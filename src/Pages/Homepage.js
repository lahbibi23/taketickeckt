import Carousel from 'react-bootstrap/Carousel';
import Navigation from '../components/Navigation';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Cardevent from './Cardevent';

function Homepage() {
  return (
   <>
   <Navigation/>
   <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/media/crowd.jpg" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Take ticket</h3>
          <p>Nous sommes ravis de vous présenter notre plateforme qui vous permet de réserver et d'acheter des billets pour une variété d'événements passionnants. Que vous soyez un amateur de concerts, de spectacles, de festivals, de matchs sportifs ou de théâtre, notre site de billetterie est votre guichet unique pour accéder aux meilleures expériences en direct.

.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/media/img3.jpg"
          alt="Notre objectif"
        />

        <Carousel.Caption>
          <h3>Notre objectif</h3>
          <p>Notre objectif est de rendre le processus de réservation de billets simple, pratique et sans tracas. Grâce à notre interface conviviale, vous pouvez facilement naviguer à travers notre vaste sélection d'événements, trouver celui qui vous intéresse et réserver vos billets en quelques clics. Que vous soyez à la recherche d'une sortie en solo, d'une expérience en famille ou d'une soirée entre amis, nous avons des options pour satisfaire tous les goûts et tous les budgets.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/media/im2.jpg"
          alt="Notre objectif"
        />
        
        <Carousel.Caption>
          <h3>MERCI !!</h3>
          <p>
          Merci de choisir notre site de billetterie pour satisfaire vos besoins en matière de divertissement en direct. Nous sommes impatients de vous aider à assister à vos événements préférés et de vous offrir une expérience mémorable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div  style={{height:100 , display:"flex",justifyContent:"center" }}> {<h1 style={{textDecorationColor:"fuchsia"}}>Top events</h1>}</div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src= "/media/foot.jpg" height={200} width={100}/>
        <Card.Body>
          <Card.Title>Match de finale de championnat </Card.Title>
          <Card.Text>
          le match décisif de cette saisson 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/media/carthage.jpg" height={200} width={100}/>
        <Card.Body>
          <Card.Title>Les soirèes de festivale carthage </Card.Title>
          <Card.Text>
           
Les soirées du Festival International de Carthage sont un événement culturel annuel qui se déroule à Carthage, en Tunisie. Le festival propose une programmation variée comprenant des spectacles de musique, de danse, de théâtre et d'autres formes d'arts de la scène
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/media/comping.jpg" height={200} width={100}/>
        <Card.Body>
          <Card.Title>Let's go to comping</Card.Title>
          <Card.Text>
          La "Retraite en pleine nature" est un événement de camping conçu pour offrir une expérience immersive dans la nature et favoriser la détente, le divertissement et la connexion avec l'environnement. Cet événement se déroule sur trois jours dans un magnifique site de camping situé au bord d'un lac entouré de forêts luxuriantes.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
   
   
   
   </>
)}

export default Homepage;