import React from "react";

export default function SortSelector({ setSort }) {
  return (
    <div>
      <label>Sort By: </label>
      <select onChange={(e) => setSort(e.target.value)}>
        <option>Name A-Z</option>
        <option>Name Z-A</option>
        <option>Nutrition Grade</option>
      </select>
    </div>
  );
}
