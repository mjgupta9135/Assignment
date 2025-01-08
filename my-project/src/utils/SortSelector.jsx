import React from "react";

export default function SortSelector({ setSort }) {
  return (
    <div className="w-40%">
      <label className="text-lg font-semibold text-gray-800">Sort By:</label>
      <select
        className="bg-white border border-gray-300 rounded-lg shadow-sm p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out w-full"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="Name A-Z">Name A-Z</option>
        <option value="Name Z-A">Name Z-A</option>
        <option value="Nutrition Grade">Nutrition Grade</option>
      </select>
    </div>
  );
}
