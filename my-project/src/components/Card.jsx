import React from "react";
import { Link } from "react-router-dom";

export default function ({ data }) {
  return (
    <div className=" flex w-96 h-76 flex-col items-center bg-white shadow-2xl border hover:scale-110 duration-300 ease-in-out border-gray-400 rounded-lg overflow-hidden">
      <div className="product-image w-40 h-40 flex justify-center items-center pt-4">
        <img
          className=" h-full object-cover"
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className="product-info p-4 text-center">
        <h2 className="product-name text-xl font-semibold">{data.name}</h2>
        <p className="product-category text-gray-600 mt-2">
          Category: <span className="font-medium">{data.category}</span>
        </p>
        <p className="product-grade text-gray-600 mt-1">
          Nutrition Grade:{" "}
          <span className="text-green-500 font-bold">
            {data.grade.toUpperCase()}
          </span>
        </p>
      </div>
      <div className="product-actions  p-4">
        <Link
          to={`/details/${data.id}`}
          className="details-link  block text-center bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
