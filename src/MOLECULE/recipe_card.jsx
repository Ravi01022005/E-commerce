import React from 'react';
import Image from '../ATOMS/image';
import Text from '../ATOMS/text';
import Button from '../ATOMS/button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipe_list.css";
import { useNavigate } from 'react-router';

export default function Recipe_card({ uniqueKey, src, alt, name, onclick_for_recipe, price }) {
  const card_img_style = "";
  const card_text = "card-text text-uppercase";
  const button = "btn btn-outline-primary mt-2";
  const content = "View more";

  return (
    <div key={uniqueKey}>
      <div className="card" style={{ borderRadius: "10px", width: "400px", height: "400px", border: "none", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <div className="card-img-container" style={{ height: "100%", width: "100%", overflow: 'hidden' }}>
          <Image src={src} className={"featured-images img_home card-img-top rounded"} alt={alt} onClick={onclick_for_recipe} />
        </div>
        <div className="card-body d-flex flex-column">
          <Text className={card_text} name={name} price={price} />
          <Button className={button} content={content} onclick={onclick_for_recipe} />
        </div>
      </div>
    </div>
  );
}
