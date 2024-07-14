// import React from "react";
// import PropTypes from 'prop-types';
//  const Button=({type,onclick,children})=>{// here we are just deconstructing the child okay buddy dont confuse
// <button type={type} onClick={onclick} className="p-4 btn-outline-primary h3">{children}</button>//and then we are just inserting that children data into the html element button , which here it is technically component.
// }// after passing the children data into the component and then we are assigning here correspondingly and so ...
//      Button.propTypes = {
//         type: PropTypes.string,           // The 'type' prop should be a string
//         onClick: PropTypes.func.isRequired, // The 'onClick' prop should be a function and is required
//         children: PropTypes.node.isRequired, // The 'children' prop should be a React node and is required
//  }
//  export default Button
import React from "react";
import PropTypes from "prop-types"
const Button=({content,className,onclick})=>{
   return(
      <button className={className} style={{margin:"5px",padding:"5px"}} onClick={onclick}>
         {content}
    </button>
   )
}
// button.PropTypes={
//    onclick:PropTypes.func.isRequired
// }
export default Button