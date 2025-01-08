import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetails({ data }) {
  return (
    <div className="main">
      <div className="imge">
        <img
          src={data.product.image_front_url}
          alt={data.product.product_name}
        />
      </div>
      <div className="details">
        <h1>{data.product.product_name}</h1>
        <h3>Ingredients: </h3>
        <p>{data.product.ingredients_text || "N/A"}</p>
        <h3>Nutrition value: </h3>
        <ul>
          <li>Energy: {data.product.nutriments.energy} kcal</li>
          <li>Fat: {data.product.nutriments.fat} g</li>
          <li>Carbohydrates: {data.product.nutriments.carbohydrates} g</li>
          <li>Proteins: {data.product.nutriments.proteins} g</li>
        </ul>
        <div className="lable">
          <h3>Labels: </h3>
          {data.product.ingredients[0]?.vegan === "yes" && (
            <img
              src="https://seeklogo.com/images/V/vegan-logo-ACE43D0D9E-seeklogo.com.png"
              width="60px"
              alt="Vegan"
            />
          )}
          {data.product.ingredients[0]?.vegetarian === "yes" ? (
            <img
              src="https://www.clipartmax.com/png/middle/206-2065891_soups-and-salads-veg-logo-png.png"
              width="60px"
              alt="Vegetarian"
            />
          ) : (
            <img
              src="https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
              width="60px"
              alt="Non-Vegetarian"
            />
          )}
        </div>
        <div className="nutrisce">
          <h3>Nutri Score: </h3>
          <div>
            <img
              src={`https://static.openfoodfacts.org/images/misc/nutriscore-${data.product.ecoscore_grade}.png`}
              alt={data.product.ecoscore_grade}
            />
          </div>
        </div>
        <div className="but">
          <Link to="/">
            <button>Exit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
