import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategorySelector from "../utils/CategorySelector";
import SortSelector from "../utils/SortSelector";
import SearchBar from "./searchBar";
import ProductList from "./ProductList";
import Pagination from "../utils/Pagination";
import useFetchCategories from "../hooks/useFetchCategories";
import useFetchItems from "../hooks/useFetchItems";
import "./Body.css";

export default function Body() {
  const [page, setPage] = useState(1);
  const [currCategory, setCurrCategory] = useState("Snacks");
  const [sort, setSort] = useState("Name A-Z");
  const [searchType, setSearchType] = useState("Name");
  const [name, setName] = useState("");

  const category = useFetchCategories();
  const items = useFetchItems(currCategory, page, sort);

  return (
    <div className="list">
      <div className="search">
        <CategorySelector
          category={category}
          setCurrCategory={setCurrCategory}
        />
        <SortSelector setSort={setSort} />
      </div>
      <SearchBar
        searchType={searchType}
        setSearchType={setSearchType}
        name={name}
        setName={setName}
      />
      <ProductList items={items} />
      <Pagination page={page} setPage={setPage} items={items} />
    </div>
  );
}
