import React from 'react'
import Button from '../ATOMS/button'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Filter({array_of_category,handler,array_of_company,array_of_colors,handler_of_company,handler_of_color}) {
  return (
    <div className='filter d-flex justify-content-center mt-5 flex-nowrap '>
      {/* <div  className="dropdown mt-5 ms-5 text-light p-2">
      <Dropdown>
        <Dropdown.Toggle className="bg-warning" variant="success" id="dropdown-basic">
          Company
         </Dropdown.Toggle>
        <Dropdown.Menu>
          {array_of_company.map((d,i)=>(         
            <Dropdown.Item  onclick={()=>handler_of_company(d)}>{d}</Dropdown.Item>
))}
        </Dropdown.Menu>
        </Dropdown>
      </div> */}
  {array_of_category.map((d,i)=>(
        <Button content={d} className={" ms-5 btn btn bg-primary text-light p-2"} onclick={()=>handler(d)} key={i}/>
       ))}
  {/* <div  className="dropdown mt-5 ms-5 text-light p-2">
      <Dropdown>
        <Dropdown.Toggle className="bg-warning" variant="success" id="dropdown-basic">
           Colors
         </Dropdown.Toggle>
        <Dropdown.Menu>
          {array_of_colors.map((d,i)=>(         
            <Dropdown.Item  onclick={()=>handler_of_color(d)}>{d}</Dropdown.Item>
))}
        </Dropdown.Menu>
        </Dropdown>
      </div> */}
    </div>
   )
}




// try this thing{import Dropdown from 'react-bootstrap/Dropdown';

//   function BasicExample() {
//     return (
//       <Dropdown>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//           Dropdown Button
//         </Dropdown.Toggle>
  
//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     );
//   }
  
//   export default BasicExample;}