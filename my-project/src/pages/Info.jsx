import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import ProductDetails from "../components/ProductDetails";
import Loading from "../components/Loading";
import useFetchProduct from "../hooks/useFetchProducts";

export default function Info() {
  const [id, setId] = useState(0);
  const location = useLocation();
  const data = useFetchProduct(id);
  console.log(id);

  useEffect(() => {
    const temp = location.pathname;
    const parts = temp.split("/");
    const code = Number(parts[parts.length - 1]); // Get the last part of the path
    setId(code);
  }, [location.pathname]);

  return (
    <div className="container">
      {data.product ? <ProductDetails data={data} /> : <Loading />}
    </div>
  );
}
