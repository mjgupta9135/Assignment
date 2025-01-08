import React from "react";

export default function CategorySelector({ category, setCurrCategory }) {
  return (
    <div>
      <label>Category: </label>
      <select onChange={(e) => setCurrCategory(e.target.value)}>
        {category.map((item, key) => (
          <option key={key} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
