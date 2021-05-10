import React, { useCallback, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import "../styles/submain.css"

const Submain = (props) => {
   const [windowWidth, setWindowWidth] = useState("67px")

   const handleWindowResize = useCallback((event) => {
      window.innerWidth > 599 ? setWindowWidth("67px") : setWindowWidth("0px")
   }, []); 

   useEffect(() => {
      window.addEventListener("resize", handleWindowResize);

      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   }, [handleWindowResize]);

   return (
      <div className="Submain" style={{paddingBottom: windowWidth}}>
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
