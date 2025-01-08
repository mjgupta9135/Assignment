import React from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

export default function ProductList({ items }) {
  return (
    <div
      className=" p-6 mt-10 flex flex-col justify-between
     items-center min-h-[300px]"
    >
      {items.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3  ">
          {items.map((item, key) => (
            <Card key={key} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}
