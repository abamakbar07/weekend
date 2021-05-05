import React from 'react'
import "../styles/submain.css"

const Submain = (props) => {
   return (
      <div className="Submain">
         <div className="Title">
            {props.title}
         </div>
         <div className="Content">
            {props.content}
         </div>
      </div>
   ) 
}

export default Submain
