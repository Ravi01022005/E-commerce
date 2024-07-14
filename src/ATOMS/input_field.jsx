import React from "react";
import PropTypes from 'prop-types';

const Input=({inputType,onChange,placeholder,search,min,max,className})=>{
    return(
        <>
        <input 
        type={inputType}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        style={{...search,textAlign:"center"}}
        min={min}
        max={max}
        />
        <br />
        </>
    )
}

export default Input