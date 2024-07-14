import React from 'react'

export default function Text({className,name,price}) {
  return (
    <div className={className} style={{textAlign:"center",fontSize:"20px"}}>{name} <span className='gap d-inline-block' style={{width:"100px"}}></span> <span>{price}</span></div>
  )
}
