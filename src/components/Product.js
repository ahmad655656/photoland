import React from "react";
//link
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group grad w-full h-[362px] rounded-[8px] overflow-hidden ">
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative ">
          {/* badge */}
          {product.isNew ? (
            <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10 ">
              new
            </div>
          ) : (
            ""
          )}

          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all "
            src={`http://localhost:1337${product.image[0].url}`}
            alt=""
          />
        </div>
        {/* text */}
        <div className="flex flex-col px-6 pb-8 ">
          {/* category title */}
          <div className="mb-2 text-sm capitalize text-accent">{product.categores[0].title}</div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-9 ">{product.title.substring(0, 35)}...</div>
          {/* price */}
          <div className="text-lg text-accent">${product.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
