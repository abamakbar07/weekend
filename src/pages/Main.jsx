import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "../styles/main.css"
import Lego from '../assets/lego/bitmap.png'

const Main = () => {
   return (
     <div className="Main text-center">
       <Container>
         <h1>WEEKEND FROM HOME</h1>
         <a>Stay active with a little workout.</a>
         <div className="LegoButton">
            <img src={Lego} />
            <div className="Button">Let's Go</div>
         </div>
       </Container>
     </div>
   );
}

export default Main
