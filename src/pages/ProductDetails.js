import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";
const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext)
  //get product data based on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  console.log(data);
  if (!data) {
    return <div className="container mx-auto">Loading...</div>;
  }
  //category title
  const categoryTitle = data[0].categores[0].title
  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0 ">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]  ">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center ">
            <img
              className="w-full max-w-[65%]"
              src={`http://localhost:1337${data[0]?.image[0]?.url}`}
              alt=""
            />
          </div>
        <div className="flex flex-col justify-center flex-1 p-12 rounded-lg bg-primary xl:p-20">
          {/* category title */}
          <div className="mb-2 text-lg font-medium uppercase text-accent ">{data[0].categores[0].title} cameras</div>
        {/* title */}
        <h2 className="mb-4 h2">{data[0].title}</h2>
        {/* description */}
        <p className="mb-12">{data[0].description}</p>
        {/* price 7 btn */}
        <div className="flex items-center gap-x-8 ">
          {/* price */}
          <div className="text-3xl font-semibold text-accent">${data[0].price}</div>
        <button onClick={() => addToCart(data, id)} className="btn btn-accent">Add to cart</button>
        </div>
        </div>
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
