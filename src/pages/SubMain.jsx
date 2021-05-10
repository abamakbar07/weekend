import React, { useCallback, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import "../styles/submain.css"

const Submain = (props) => {
   const [imageProps, setImageProps] = useState("Submain")

   const handleWindowResize = useCallback((event) => {
      props.image
        ? window.innerWidth > 599
          ? setImageProps("Submain")
          : setImageProps("Submain imageProps")
        : setImageProps("Submain");
   }, []); 

   useEffect(() => {
      window.addEventListener("resize", handleWindowResize);

      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   }, [handleWindowResize]);

   return (
      <div className={imageProps}>
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
