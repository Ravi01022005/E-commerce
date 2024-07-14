import React, { createContext, useState } from "react";
export const description_context=createContext();
export const Description_provider=({children})=>{
const[desc,setDesc]=useState()
return(
<description_context.Provider value={{desc,setDesc}}>    
{children}
</description_context.Provider>    
)
}