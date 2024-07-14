import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { description_context } from '../wrapper/Cart_page_details_context';
import { countCreate } from '../wrapper/cartcount';
import axios from 'axios';
import '../stylesheets/Home.css'
import { items_from_json } from '../wrapper/context_from_json';

export default function Items_description() {
  const { desc } = useContext(description_context);
  const { count, setCount } = useContext(countCreate);
  const { items, setItems, calculateTotalCount } = useContext(items_from_json);
  const [tempro, setTempro] = useState(desc || {});
  const [amount, setAmount] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    if (!desc) {
      nav('/');
    }
  }, [desc, nav]);
  useEffect(() => {
    if (desc) {
      setTempro(desc);
    }
  }, [desc]);

  const onChanger = (e) => {
    if(e.target.value>20){
      alert("only 20 item available")
      e.target.value=0
     }
    setAmount(Number(e.target.value));
  };
 

  const Carter = async () => {
    if (!tempro || amount <= 0) {
      return;
    }

    try {
      const existingItem = items.find((d) => d.product_details.id === tempro.id);

      if (existingItem) {
        if(existingItem.count<=20){
        const updatedItem = { ...existingItem, count: existingItem.count + amount };
        await axios.put(`http://localhost:3000/posts/${existingItem.id}`, updatedItem);

        const updatedItems = items.map((item) =>
          item.product_details.id === tempro.id ? updatedItem : item
        );
        setItems(updatedItems);

        
        setCount( await calculateTotalCount(items));}
        else{
          alert("only 20 items are available")
        }

 
      } else {
        const sender = {
          product_details: tempro,
          count: amount
        };
        const response = await axios.post('http://localhost:3000/posts', sender);

        setItems([...items, response.data]);
      }

      setCount(calculateTotalCount([...items, { product_details: tempro, count: amount }]));
 
      setAmount(0);
    } catch (error) {
      console.error('Error updating count:', error);
    }
  };

  return (
    <>
      <div className="mt-5 ms-3" style={{ marginTop: "150px" }}>
        <Link to="/" className="text-decoration-none">
          <span className="b h3" style={{ color: "gray", textDecoration: "none" }}>Home /</span>
        </Link>
        <Link to="/Product" className="text-decoration-none">
          <span className="b h3" style={{ color: "black", textDecoration: "none" }}>Product</span>
        </Link>
      </div>

      <div className="container-fluid d-flex flex-row mt-5 justify-content-evenly">
        <div style={{ width: "40%" }}>
          <div>
            <img src={tempro.image} alt={tempro.name} style={{ width: "100%" }} />
          </div>
        </div>

        <div className="d-flex flex-column" style={{ width: "40%" }}>
          <div className="h1" style={{ color: "rgb(46, 35, 35)" }}>{tempro.name}</div>
          <div className="h2 text-secondary">{tempro.company}</div>
          <div style={{ fontWeight: "light", fontSize: "26px" }}>$ {tempro.price}</div>
          <div className="mt-4" style={{ fontSize: '20px', fontWeight: "normal", lineHeight: "40px" }}>{tempro.description}</div>
          <div className="mt-4">
            <span className="h4">Colors</span>
            <div>
              {tempro.colors && tempro.colors.map((color, i) => (
                <div key={i} style={{ display: "inline-block", backgroundColor: color, width: "30px", height: "30px", margin: "0 10px", borderRadius: "50%" }} className="mt-4"></div>
              ))}
            </div>
            <div className="mt-3 h4">Amount
              <div>
                <input
                  type="number"
                  className="m rounded mt-3 w-25"
                  min={1}
                  max={20}
                  value={amount}
                  onChange={onChanger}
                />
              </div>
            </div>
          </div>
          <div className="btn btn-warning mt-4 p-2 text-light" style={{ width: "150px", fontWeight: "bold" }} onClick={Carter}>Add to cart</div>
        </div>
      </div>
    </>
  );
}























// const updateCount = async (id, newCount) => {
//   try {
//     const updatedItems = items.map(item =>
//       item.id === id ? { ...item, count: newCount } : item
//     );
//     setItems(updatedItems);
//     await axios.put(`http://localhost:3000/posts/${id}`, { count: newCount });

//     // Recalculate total count and set the count state
//     calculateTotalCount(updatedItems);
//     setCount(updatedItems.length);
//   } catch (error) {
//     console.error("Failed to update count:", error);
//   }
// };


// <label htmlFor={`count-${d.id}`}>Quantity: </label>
// <select
//   id={`count-${d.id}`}
//   value={d.count}
//   onChange={(e) => updateCount(d.id, parseInt(e.target.value))}
// >
//   {[...Array(20).keys()].map(n => (
//     <option key={n + 1} value={n + 1}>{n + 1}</option>
//   ))}
// </select>