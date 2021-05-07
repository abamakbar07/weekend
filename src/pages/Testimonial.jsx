import React from 'react'
import { Card, Container } from 'react-bootstrap';
import "../styles/testimonial.css"

const Testimonial = (props) => {
   const testimonial = props.content
   return (
     <div className="Testimonial text-center">
       <div className="Title">{props.title}</div>
       <div className="Content">
          <Container className="d-flex">
            {testimonial.map((listTestimonial) => (
               <Card className="bg-white border-0 pb-5">
                  <Card.Body className="text-left pt-2">
                     <Card.Title
                     className="ContentTitle"
                     style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        }}
                        >
                     {listTestimonial.title}
                     </Card.Title>
                     <Card.Text className="ContentContent">
                        {listTestimonial.content}
                     </Card.Text>
                  </Card.Body>
               </Card>
            ))}
         </Container>
       </div>
     </div>
   );
}

export default Testimonial
