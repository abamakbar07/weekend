import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import "../styles/testimonial.css"

const Testimonial = (props) => {
   const testimonial = props.content

   const scrollLeft = () => {
      document.getElementById("Container").scrollLeft += 300;
   }

   const scrollRight = () => {
      document.getElementById("Container").scrollLeft -= 300;
   }


   return (
     <div className="Testimonial text-center">
       <div className="Title">{props.title}</div>
       <div className="Content">
         <Container fluid className="d-flex p-0">
           <Col onClick={scrollLeft}>KIRI</Col>
           <Col md={6} id="Container" className="d-flex overflow-auto">
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
           <Col onClick={scrollRight}>KANAN</Col>
         </Container>
       </div>
     </div>
   );
}

export default Testimonial
