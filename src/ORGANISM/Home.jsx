import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Recipe_card from "../MOLECULE/recipe_card";
import { description_context } from "../wrapper/Cart_page_details_context";
import { context_of_product } from "../wrapper/prouct_context";
import "../stylesheets/Home.css"

export default function Home() {
  const [data1, setData1] = useState([]);
  const {data}=useContext(context_of_product)
  const navigate = useNavigate();
const {setDesc}=useContext(description_context)
  const naver = (d) => {
    setDesc(d); 
    navigate("/cart");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData1(data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [data]);

  return (
    <div className="container">
      <div className="section_1 d-flex justify-content-evenly w-100 mt-5">
        <div className="info_of_home w-50 mt-5">
          <div
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              color: "rgb(10, 12, 32)",
              lineHeight: "70px",
            }}
          >
            We are changing the way people shop
          </div>
          <div className="mt-5" style={{ fontSize: "20px", wordSpacing: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            laudantium mollitia blanditiis esse tenetur, earum maxime consectetur
            labore inventore similique, sequi non? Iure maxime esse eveniet,
            corporis dignissimos facilis sequi?
          </div>
          <br />
          <Link to="/Product" className="naver_to_Products text-decoration-none text-light">
            <span className="p-3 bg-warning rounded h5 d-inline-block mt-5">
              Our Products
            </span>
          </Link>
        </div>




        <div  className="gallery w-50 d-flex justify-content-center">
          <div
            className="d d-flex"
            style={{
              backgroundColor: "rgb(5, 8, 44)",
              borderRadius: "30px",
              marginLeft: "50px",
              overflowX: "hidden",
            }}
          >
            {data1.slice(0, 2).map((d, i) => (
              <img
                key={i}
                src={d.image}
                alt={d.title+" sorry for inconvenience !"}
                className="rounded-5"
                style={{
                  height: "90%",
                  width: "65%",
                  marginTop: "4%",
                  marginLeft: "20px",
                  color:"white"
                }}
              />
            ))}
          </div>
        </div>


      </div>

      <div className="section-2 h1" style={{ marginTop: "150px" }}>

        <div className="s2-title">Featured Products</div>
        <div className="row mt-5 d-flex">
          {data1.slice(7, 10).map((d, i) => (
            <div className="featured-images col-4" key={i}>
              <Recipe_card
                uniqueKey={i}
                src={d.image}
                alt={d.name}
                name={d.name}
                onclick_for_recipe={() => naver(d)}
                price={d.price}o
              />
            </div>
          ))}
        </div>
       </div>
    </div>
  );
}
