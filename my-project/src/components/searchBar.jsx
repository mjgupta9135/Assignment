import React from "react";
import { Link } from "react-router-dom";

export default function SearchBar({
  searchType,
  setSearchType,
  name,
  setName,
}) {
  return (
    <div className="mr-24 w-50%">
      <label className="text-lg font-semibold text-gray-800">Search by:</label>
      <div className="flex  space-x-3">
        <select
          className="bg-white border border-gray-300 rounded-lg shadow-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out w-1/3"
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option>Name</option>
          <option>BarCode</option>
        </select>
        <input
          className="flex-grow bg-white border border-gray-300 rounded-lg shadow-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
          placeholder="Type name/Barcode"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Link to={`./input/${name}/${searchType}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
