import React from 'react'
import Naviteams from '../Naviteams';

const Dropdwon =({submens, dropdown, level}) =>{
    level = level+1;
    const dropdownclass = level>1 ? "dropdown-submenu":"";

    export const Dropdwon = () => {
  return (
    <div>
          <ul className = {`dropdown ${dropdownclass} ${dropdown ? "show" : ""}`}>
        {
            submens.map((submens,index)=>(
                <Naviteams items={submens} key={index} level={level}/>
            ))
        }
        </ul>
   
    </div>
  )
}





    return{
      
    }
}
export default Dropdwon;