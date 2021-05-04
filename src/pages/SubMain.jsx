import React from 'react'

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
