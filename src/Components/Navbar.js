import React, {useEffect } from 'react'
import { useState } from 'react';
import star1 from './images/Star 1.png'
import hambburger1 from './images/hamburger menu.png'
import cross from './images/cross.png'
// import { Naviteams } from './Naviteams';
// import { Navbariteam } from './Navbariteam';



const url = "https://fakestoreapi.com/products/categories";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

   const handleToggle = ()=>{
      setToggle(!toggle);
   }
   
    const Navbariteam = [
    { name: 'Home', id: 'home'},
{ name: 'About', id: 'about' },
{ name: 'Our Products', id: 'product', child: [
{ name: 'Product 1', id: 'p1'},
{ name: 'Product 2', id: 'p2' },
{ name: 'Product 3', id: 'p3'},
{ name: 'Product 4', id: 'p4' },
] },
{ name: 'Contact Us', id: 'contact'},
 ];
 const [subcat, setsubcat] = useState([])


 
   useEffect(()=>{
     const feachdata = async ()=>{
       const res = await fetch(url)
       res.json().then(json =>{
        setsubcat(json);
       })
     }
     feachdata();
   },[]);
// console.log(subcat);
  //  const datacomp  = Navbariteam.map((data)=>{
  //   return(
  //     // <ul>
  //     //   <li>
  //     // <Naviteams
      
  //     // key ={data.id}
  //     // name ={data.name}
  //     // />
  //     // </li>
  //     // </ul>
  //     <ul>
  //       <li>{data.name}</li>
  //     </ul>
  //   )
  //   console.log(data);

  //  })
  return (
    <>
  {/* <Naviteams title="hello"></Naviteams> */}
    <div className='navbar'>
        <h1>ShopKart</h1>
        <div className='cart'>
        <p  >Wishlist (0)</p>
        <p>Bag (0)</p>
        </div>
        <img className='star1' src={star1}></img>

      
    </div>
    <div className={toggle?'hambu' :'options'}>
         {/* <ul > 
     
     {/* onClick={handleToggle} *}
      <li   href='#'>HOME</li>
      <li  href='#'>about</li>
      <li  href='#'>our products</li>
      <li  href='#'>contact us</li>
      
     </ul> */}
  {/* <ul> */}
  
    {/* {datacomp} */}

    
  {/* </ul> */}
  {/* <ul>
  <li>  */}
  {Navbariteam.map((value,index)=>{
  //  console.log("v")

    return(
      

         <div className='li' >
         
            {/* {value}:{Navbariteam[value]} */}
            {value.name}
            {index.id}
            {/* <div/> */}
            
            <div className='subcat'>
            {value.child && value.child.map(data =>(
              <div>
                 {/* {subcat.map((iteam,index)=>(
                  //  key = iteam.id,
           
                    <p>{iteam}</p>
                  )
                  // {iteam}
                  )} */}
                  
                {value.name}
              </div>
            )
            
              )}
       
              </div>


       </div>
       
  
    )
   
  })}
  {/* </li> 
  </ul> */}
     </div>
    <div className="hamburger"onClick={handleToggle} >
         {toggle ?<img src={cross}></img>:<img src={hambburger1}></img>}
        


      </div>
    </>
  )
}
