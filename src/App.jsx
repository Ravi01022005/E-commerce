 // App.jsx
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Recipe_list from './ORGANISM/Recipe_list';
import Header from './ORGANISM/Header';
import Footer from './ORGANISM/Footer';
import Items_description from './ORGANISM/Items_description';
import Home from './ORGANISM/Home';
import { context_of_product } from './wrapper/prouct_context';
import About from './ORGANISM/About';
import { countCreate } from './wrapper/cartcount';
import { items_from_json } from './wrapper/context_from_json';
import Cart from './ORGANISM/Cart';
const App = () => {
  const { setData } = useContext(context_of_product);
  const {setCount}=useContext(countCreate)
   const {items,setItems,calculateTotalCount}=useContext(items_from_json)
  useEffect(() => {
    console.log('useEffect called');
    handler();
    handler_1()
   }, []);

  const handler = async () => {
    try {
      console.log('Fetching data...');  
      const response = await axios.get('https://www.course-api.com/react-store-products');
      if (response) {
        setData(response.data);
       } else {
        console.log('No response from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 

  const handler_1 = async () => {
    try {
       const response = await axios.get('http://localhost:3000/posts');
      if (response) {
         await setItems(response.data)
         const temp=await calculateTotalCount(response.data)
         setCount(temp)
         console.log("the value is :",temp)
        } else {
        console.log('No response from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/product' element={<Recipe_list />} />
        <Route path='/cart' element={<Items_description />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
         <Route path='/tocart' element={<Cart/>}/>
      </Routes>
      <br /><br />
      <Footer />
    </div>
  );
};

export default App;
