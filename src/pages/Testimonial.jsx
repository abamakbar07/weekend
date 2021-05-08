import React, { useState } from 'react'
import { Card, Col, Container } from 'react-bootstrap';
import "../styles/testimonial.css"
import arrowButton from '../assets/oval-icon.svg'

const Testimonial = (props) => {
   const testimonial = props.content
   const [scroll, setScroll] = useState({
      left: "Active",
      right: "Active",
   })

   const scrollEvent = (e) => {
      if (e.target.scrollLeft == 0) {
         setScroll({
           left: "Deactive",
           right: "Active",
         });
      } else if (e.target.scrollLeft >= 125 ) {
         setScroll({
           left: "Active",
           right: "Deactive",
         });
      } else {
         setScroll({
           left: "Active",
           right: "Active",
         });
      }
   }

   const scrollLeft = () => {
      document.getElementById("Container").scrollLeft -= 125;
   }

   const scrollRight = () => {
      document.getElementById("Container").scrollLeft += 125;
   }
   
   return (
     <div className="Testimonial text-center">
       <div className="Title">{props.title}</div>
       <div className="Content text-white">
         <Container fluid className="d-flex p-0">
           <Col className="Button ButtonLeft" onClick={scrollLeft}>
             <img className={scroll.left} src={arrowButton} />
           </Col>
           <Col
             md={6}
             id="Container"
             onScroll={scrollEvent}
             className="d-flex Container"
           >
             {testimonial.map((listTestimonial) => (
               <Card className="bg-white border-0 pb-5">
                 <Card.Body className="text-left pt-2">
                   <Card.Title className="ContentTitle">
                     {listTestimonial.title}
                   </Card.Title>
                   <Card.Text className="ContentContent">
                     {listTestimonial.content}
                   </Card.Text>
                 </Card.Body>
               </Card>
             ))}
           </Col>
           <Col className="Button ButtonRight" onClick={scrollRight}>
             <img className={scroll.right} src={arrowButton} />
           </Col>
         </Container>
       </div>
     </div>
   );
}

export default Testimonial
