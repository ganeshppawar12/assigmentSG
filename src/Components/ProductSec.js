import React, {useEffect } from 'react'
import { useState } from 'react';
// import {useEffect} from 'react'
import Arrow1 from './images/Arrow 1.png'
import Arrow2 from './images/Arrow 2.png'
import star2 from './images/Star 2.png'
import group1 from './images/Group 19.png'

const url = "https://fakestoreapi.com/products";

export const ProductSec = () => {
 
  const [productiteam, setproductiteam] = useState([])

  useEffect(()=>{
    const feachdata = async ()=>{
      const res = await fetch(url)
      res.json().then(json =>{
        setproductiteam(json);
      })
    }
    feachdata();
  },[]);
  // console.log(productiteam);
  return (
    <div className='productZone'>
        <div className='productlist'>
            <div className='namebar'>
            <h2>
            New products
            </h2>
            <div className='star2'>
            <img src={star2}></img>

            </div>
            <div className='productnavigation'>
            <img  src={Arrow2}></img>
          <img src={Arrow1}></img>
            </div>
          
          
            </div>
          
            <div className='productpage'>
                <div className='productOption'>
                <ul>
                    <li>Apparel</li>
                    <li> Accessories</li>
                    <li> Best sellers</li>
                    <li> 50% off</li>
                </ul>
                </div>
                <div className='storeiteam' >
                  {productiteam.map((iteam)=>(
                  //  key = iteam.id,
                  <div className='prodcard'>
                    <div className='shopcard'> 
                <div className='prodcardimg'>
                <img className='iteamimg' src={iteam.image}></img>
                <div className='linkimg'>
                <img  src={group1}></img>
                </div>

                </div>
               
                   <h1 className='prohead'>{iteam.title}</h1>
                   </div>
                   <p className='description'>{iteam.description}</p>
                   <p className='price'>${iteam.price}</p>
                   </div>
                  )
                  )}
                </div>
 
                <div className='navigation'>
            <img className='arrow2' src={Arrow2}></img>
          <img  className='arrow1' src={Arrow1}></img>
            </div>
            </div>
        </div>
    </div>
  )
}
