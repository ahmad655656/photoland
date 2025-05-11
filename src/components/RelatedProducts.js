import React from "react";
// useFetch hook
import useFetch from "../hooks/useFetch";
//components
import ProductSlider from "./ProductSlider";
const RelatedProducts = ({ categoryTitle }) => {
  // get products by category title
  const { data } = useFetch(
    `/products?populate=*&filters[categores][title]=${categoryTitle}`
  );
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="mb-6 text-center h2 xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
