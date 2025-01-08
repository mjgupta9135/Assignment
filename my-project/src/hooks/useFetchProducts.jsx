import { useState, useEffect } from "react";

export default function useFetchProduct(id) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (id !== 0) {
        try {
          let res = await fetch(
            `https://world.openfoodfacts.org/api/v0/product/${id}.json`
          );

          let datam = await res.json();

          setData(datam);
        } catch (error) {
          console.error("Error while fetching product data", error);
        }
      }
    };
    fetchData();
  }, [id]);

  return data;
}
