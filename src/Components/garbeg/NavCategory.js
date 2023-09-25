import { useState , useEffect } from 'react'
import React from 'react'
import { Navbariteam } from '../Navbariteam'

export const NavCategory = () => {

  
  return (
    <div className='navcategory'>
          <ul className='category'>
            <li>HOME</li>
            <li>About</li>
            <li>OUR PRODUCTS</li>
            <li>CONTACT US</li>
        </ul>
    </div>
  )
}
