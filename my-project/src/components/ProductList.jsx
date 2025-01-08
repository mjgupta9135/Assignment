import React from "react";
import Block from "./Card";

export default function ProductList({ items }) {
  return (
    <div className="products">
      {items.length === 0 ? (
        <div className="loading">
          <img
            src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif"
            alt="loading..."
          />
        </div>
      ) : (
        items.map((item, key) => <Block key={key} data={item} />)
      )}
    </div>
  );
}
