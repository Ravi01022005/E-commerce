import { Password } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
export const login_context=useContext()
export default function login_wrapper({children}) {
    const[login_data,setLogin_data]=useState(
      //  user_id="",
      // Password=""

    )
   return (
<div>
  <login_context.provider value={{login_data,setLogin_data}}>
{children}
  </login_context.provider>
</div>
  )
}
