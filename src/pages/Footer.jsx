import React from 'react'
import { Container } from 'react-bootstrap'

import '../styles/footer.css'

const Footer = () => {
   return (
     <div className="Footer">
       <Container className="Container d-flex justify-content-between">
         <div className="wknd2020">
           wknd@<a className="text-style-1">2020</a>
         </div>
         <div className="Rectengle align-middle text-center">
           <div className="alpha-version-01">alpha version 0.1</div>
         </div>
       </Container>
     </div>
   );
}

export default Footer
