import React from 'react'
import "../styles/definition.css"
import lego from '../assets/lego2/group-4.png'

const Definition = () => {
   return (
     <div className="Definition">
       <div className="text-right">
         <img src={lego} />
       </div>
       <div className="Content text-right">
          <div className="Main">
            <span>Deffinition;</span> a practice or exercise to test or improve
            one's fitness for athletic competition, ability, or performance to
            exhaust (something, such as a mine) by working to devise, arrange, or
            achieve by resolving difficulties. Merriam-Webster.com Dictionary.
          </div>
          <div className="Sign">
             -weekend team
          </div>
       </div>
     </div>
   );
}

export default Definition
