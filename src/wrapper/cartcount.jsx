import {useState,createContext} from "react"
export const countCreate=createContext();

export function Provider({children}){
 const [count, setCount] = useState(0);
return(
    <countCreate.Provider value={{count,setCount}}>
        {children}
   </countCreate.Provider>
)
}



{/* <Provider>   
<App/>
</Provider> */}