import React, { useEffect, useState,useContext } from 'react';
import Recipe_card from '../MOLECULE/recipe_card';
import Input from '../ATOMS/input_field';
import Filter from '../MOLECULE/Filter';
import { description_context } from '../wrapper/Cart_page_details_context';
import { useNavigate } from 'react-router-dom';
import { context_of_product } from '../wrapper/prouct_context';

export default function Recipe_list() {
  const [data1, setData1] = useState([]);
  const { data }= useContext(context_of_product)
  const navigate = useNavigate();
  const { setDesc } = useContext(description_context);
  const [modification_handler, setModification_handler] = useState("");
  const [modification_handler_company, setModification_handler_company] = useState("");
  const [modification_handler_colors, setModification_handler_colors] = useState("");

  const search = {
    boxShadow: '0 5px 10px rgba(6, 113, 236, 0.534)',
    border: "none",
    outline: "none",
    height: "60px"
  };

  useEffect(() => {
    const fetchData = () => {
      try {
         setData1(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [data]);

  const handler_search = (e) => {
    setModification_handler(e.target.value);
  };

  const handler_for_recipe = (item) => {
    setDesc(item);
    navigate("/cart");
  };

  const arr = ["All", ...new Set(data1.map((d) => (d.category)))];
  const arr_of_company = ["All", ...new Set(data1.map((d) => (d.company)))];
  const arr1 = data1.map((d) => (d.colors));
  const arr_of_colors = ["All", ...new Set(arr1.flat())];
  const prices = data1.map(d => d.price);

  return (
    <div className="container">
      <br /><br />
      <div className="row">
        <Input
          inputType={"search"}
          onChange={handler_search}
          placeholder={"search..."}
          search={search}
        />
        <div className='col-12 d-flex flex-column text-capitalize'>
          <Filter array_of_category={arr} handler={setModification_handler} />
        </div>
        <div className='list_frame row d-flex justify-content-evenly'>
          {data1.filter((d) => (
            (modification_handler === "" || modification_handler === "All" || d.category === modification_handler || d.name.toLowerCase().includes(modification_handler.toLowerCase()))
          )).sort((a, b) => a.price - b.price)
            .map((item, index) => (
              <div className="list col-4 d-flex justify-content-center mt-5" key={index}>
                <Recipe_card
                  uniqueKey={index}
                  src={item.image}
                  alt={item.name}
                  name={item.name}
                  price={item.price}
                  onclick_for_recipe={() => handler_for_recipe(item)}  // Pass the item to the handler
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
