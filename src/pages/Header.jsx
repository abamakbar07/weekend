import React from 'react'
import { Container } from 'react-bootstrap'
import "../styles/header.css"
import Bitmap from '../assets/icon/bitmap.png'


const Header = () => {
   const user = "Akbar Afriansyah"
   return (
      <div className="Header d-flex">
         <Container>
            <div className="Content d-flex">
               <img src={Bitmap} alt="" className="Bitmap"/>
               <div className="Greeting">
                  <div className="Time">
                     Good Morning
                  </div>
                  <div className="User">
                     {user}
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}

export default Header
