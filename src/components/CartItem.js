import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "../components/Qty";
import { CartContext } from "../context/CartContext";
const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext)
  return (
    <div className="flex gap-x-8">
      <Link to={`product/${item.id}`} className="w-[70px] h-[70px] ">
        <img src={`http://localhost:1337${item.image[0].url}`} alt="" />
      </Link>
      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex mb-3 gap-x-4">
          <Link to={`product/${item.id}`}>{item.title}</Link>
          <div onClick={() => removeFromCart(item.id)} className="cursor-pointer text-[24px] hover:text-accent transition-all  ">
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12 ">
          {/* quality */}
          <div className="flex mb-2 gap-x-4">
            <Qty item={item} />
          </div>
            <div className="text-xl text-accent">$ {item.price * item.amount}</div>
        </div>
        {/* price */}
        <div>
          <span className="text-accent">${item.price} per piece</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
