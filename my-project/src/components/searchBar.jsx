import React from "react";
import { Link } from "react-router-dom";

export default function SearchBar({
  searchType,
  setSearchType,
  name,
  setName,
}) {
  return (
    <div className="searchby">
      <label>Search by: </label>
      <select onChange={(e) => setSearchType(e.target.value)}>
        <option>Name</option>
        <option>BarCode</option>
      </select>
      <input
        placeholder="Type name/Barcode"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={`./input/${name}/${searchType}`}>
        <button>Submit</button>
      </Link>
    </div>
  );
}
