import React from 'react'
import { Link } from 'react-router-dom'
import { SiMeteor } from "react-icons/si";

export default function Footer() {
  return (
 <>
 <div className='d-flex justify-content-evenly flex-column bg-warning align-items-center'>
    <div><Link to="/" style={{color:"black"}}><SiMeteor size={80}/></Link></div>
    <div className='h5 mt-4'><p>Copyright 2024-3000 by Refsnes Data. All Rights Reserved. </p></div>
    <div><Link to="/contact us" className=' text-decoration-none'><span className='t text-black h1 text-decoration-none'>contact us</span></Link></div>
 </div>
 </>
   )
}
