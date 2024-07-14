 import React, { createContext, useState } from 'react';

export const items_from_json = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const calculateTotalCount = (d) => {
    return d.reduce((total, item) => total + item.count, 0);
};
const Total = (d) => {
  return d.reduce((total, item) => total + item.product_details.price, 0);
};
  return (
    <items_from_json.Provider value={{ items, setItems,calculateTotalCount,Total }}>
      {children}
    </items_from_json.Provider>
  );
};
