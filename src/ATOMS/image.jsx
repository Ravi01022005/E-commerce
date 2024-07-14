import React, { Children } from 'react'

export default function Image({src,className,alt}) {
  return (
    <img src={src} className={className} alt={alt} style={{height:"100%",width:"100%"}}/>
   )
}
