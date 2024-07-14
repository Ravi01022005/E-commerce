import React from 'react'
import './Header.css'
export default function About() {
  return (
    <div className='container'>
        <div className='f d-flex flex-column justify-content-center align-items-center'>
        <div className='comfy d-flex justify-content-center'>    
            <div style={{marginTop:"200px",fontSize:"78px",fontWeight:"bold"}}> We love <div className='comfy_i p-5 bg-primary rounded-5 text-light d-inline'>comfy</div></div>
        </div>
<p  style={{marginTop:"100px",textAlign:"start",fontSize:"26px",marginBottom:"100px"}}  className='about_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odio voluptatum! Recusandae vero similique animi, sit illo at error quidem temporibus laudantium alias enim placeat accusamus eius praesentium, qui consequatur!</p>
    </div>
        </div>
       
 
  )
}
