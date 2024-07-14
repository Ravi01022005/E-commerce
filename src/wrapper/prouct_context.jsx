 // wrapper/prouct_context.jsx
import React, { createContext, useState } from 'react';

export const context_of_product = createContext();

const Product_context = ({ children }) => {
    const [data, setData] = useState([]);
  
 
    return (
        <context_of_product.Provider value={{ data, setData  }}>
            {children}
        </context_of_product.Provider>
    );
};

export default Product_context;
