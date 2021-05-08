import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../styles/helptips.css"
import arrowButton from '../assets/oval-icon.svg'
import image1 from '../assets/helpTips/start/image.png'
import image2 from '../assets/helpTips/quick/image.png'
import image3 from '../assets/helpTips/denounce/image.png'

const Helptips = () => {
   return (
     <div className="Helptips text-center">
       <Container>
         <Col>
            <Card className="bg-dark text-white">
               <Card.Img src={image1} alt="Card image" />
               <Card.ImgOverlay>
                  <Container className="tittle">
                     <Card.Title>Start quickly with simple steps</Card.Title>
                     <img className="ml-auto" src={arrowButton} />
                  </Container>
               </Card.ImgOverlay>
            </Card>
         </Col>
         <Col>
            <Card className="bg-dark text-white">
               <Card.Img src={image1} alt="Card image" />
               <Card.ImgOverlay>
                  <Container className="tittle">
                     <Card.Title>Start quickly with simple steps</Card.Title>
                     <img className="ml-auto" src={arrowButton} />
                  </Container>
               </Card.ImgOverlay>
            </Card>
         </Col>
         <Col>
            <Card className="bg-dark text-white">
               <Card.Img src={image1} alt="Card image" />
               <Card.ImgOverlay>
                  <Container className="tittle">
                     <Card.Title>Start quickly with simple steps</Card.Title>
                     <img className="ml-auto" src={arrowButton} />
                  </Container>
               </Card.ImgOverlay>
            </Card>
         </Col>
       </Container>
     </div>
   );
}

export default Helptips
