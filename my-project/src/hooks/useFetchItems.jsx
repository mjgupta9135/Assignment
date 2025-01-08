import { useState, useEffect } from "react";

export default function useFetchItems(
  currCategory,
  page,
  sort,
  setLoadShimmer
) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          `https://world.openfoodfacts.org/category/${currCategory}.json?page=${page}`
        );
        const datam = await res.json();
        const products = datam.products.map((item) => ({
          name: item.product_name_en || "No Name",
          id: item._id,
          image: item.image_front_url,
          category: item.compared_to_category,
          grade: item.nutriscore_grade,
        }));
        const sortedItems = products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setItems(sortedItems);
      } catch (err) {
        console.log({ "error while fetching category items": err });
      } finally {
        setLoadShimmer(false);
      }
    };
    fetchItems();
  }, [currCategory, page, sort]);

  return items;
}
