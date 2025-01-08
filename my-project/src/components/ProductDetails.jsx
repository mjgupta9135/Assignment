import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetails({ data }) {
  return (
    <div className="main flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center w-full h-full   mb-6">
        <img
          className=" h-72 object-cover rounded-lg "
          src={data.product.image_front_url}
          alt={data.product.product_name}
        />
      </div>
      <div className="details bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center">
          {data.product.product_name}
        </h1>
        <h3 className="text-xl font-semibold">Ingredients:</h3>
        <p className="text-gray-700 mb-4">
          {data.product.ingredients_text || "N/A"}
        </p>
        <h3 className="text-xl font-semibold">Nutrition value:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-gray-700">
            Energy: {data.product.nutriments.energy} kcal
          </li>
          <li className="text-gray-700">
            Fat: {data.product.nutriments.fat} g
          </li>
          <li className="text-gray-700">
            Carbohydrates: {data.product.nutriments.carbohydrates} g
          </li>
          <li className="text-gray-700">
            Proteins: {data.product.nutriments.proteins} g
          </li>
        </ul>
        <div className="lable flex items-center space-x-4 mb-6">
          <h3 className="text-xl font-semibold">Labels:</h3>
          {data.product.ingredients[0]?.vegan === "yes" && (
            <img
              className="w-14 h-14"
              src="https://seeklogo.com/images/V/vegan-logo-ACE43D0D9E-seeklogo.com.png"
              alt="Vegan"
            />
          )}
          {data.product.ingredients[0]?.vegetarian === "yes" ? (
            <img
              className="w-14 h-14"
              src="https://www.clipartmax.com/png/middle/206-2065891_soups-and-salads-veg-logo-png.png"
              alt="Vegetarian"
            />
          ) : (
            <img
              className="w-14 h-14"
              src="https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
              alt="Non-Vegetarian"
            />
          )}
        </div>
        <div className="nutrisce text-center mb-6">
          <h3 className="text-xl font-semibold">Nutri Score:</h3>
          <div className="mt-2">
            <img
              className="w-28"
              src={`https://static.openfoodfacts.org/images/misc/nutriscore-${data.product.ecoscore_grade}.png`}
              alt={data.product.ecoscore_grade}
            />
          </div>
        </div>
        <div className="but text-center">
          <Link to="/">
            <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Exit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
