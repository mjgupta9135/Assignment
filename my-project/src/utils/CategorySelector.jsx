import React from "react";

export default function CategorySelector({ category, setCurrCategory }) {
  return (
    <div className="w-40%">
      <label className="text-lg font-semibold text-gray-800">Category:</label>
      <select
        className="bg-white border border-gray-300 rounded-lg shadow-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out w-full"
        onChange={(e) => setCurrCategory(e.target.value)}
      >
        {category.map((item, key) => (
          <option key={key} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
