import { useState, useEffect } from "react";

export default function useFetchCategories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://world.openfoodfacts.org/categories.json"
        );
        const data = await res.json();
        setCategory(data.tags);
      } catch (err) {
        console.log({ "error while fetching category": err });
      }
    };
    fetchData();
  }, []);

  return category;
}
