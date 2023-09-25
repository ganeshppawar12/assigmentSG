import React from 'react'
import model from './images/modelimg.png'
import star from './images/Star 3.png'
import vectorimg from './images/Vector.png'
import star4 from './images/Star 4.png'
import seemore from './images/Primary Button.png'
export const Herosection = () => {
  return (
    <>
    <div className='Herosectiondiv'>
        <div className='leftHerosection'>

            <h1 className='fresh'>Fresh</h1>
            <h1 className='year'>2022</h1>
            <h1 className='look'>Look</h1>
            <img src={star4}></img>
        </div>
       

        <div className='rightHerosection'>
            <div className='orgsqr'>
            <ul>
            <li>
            OREGON JACKET
            </li>
            <li>$ 124</li>
            </ul>
           
            </div>
            <div className='modelimg'>
                <img src={model}></img>
               
            </div>
            <div className='star'>
                <img src={star}></img>

            </div>
        </div>
        
    </div>
     <div className='seemore'>
     {/* <p>See More</p> */}
     <img className='see' src={seemore}></img>
     {/* <img src={vectorimg}></img> */}
 </div>
 </>
  )
}
