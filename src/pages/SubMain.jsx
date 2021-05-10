import React from 'react'
import { Col } from 'react-bootstrap'
import "../styles/submain.css"

const Submain = (props) => {
   return (
      <div className="Submain">
         <Col md={12}>
            <div className="Title">
               {props.title}
            </div>
            <div className="Content">
               {props.content}
            </div>
         </Col>
         <img className="Legoimage" src={props.image} width={183} />
      </div>
   ) 
}

export default Submain
