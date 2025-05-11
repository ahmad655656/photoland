import React from "react";
//useFetch
import useFetch from "../hooks/useFetch";
//link
import { Link } from "react-router-dom";
const CategoryNav = () => {
  const { data } = useFetch("/categores");
  return (
    <aside className="hidden xl:flex">
      <div className="flex flex-col bg-primary w-[240px] h-[500px] rounded-[8px] overflow-hidden ">
        <div className="flex items-center justify-center py-4 font-semibold uppercase bg-accent text-primary">
          Browse Categories
        </div>
        <div className="flex flex-col p-6 gap-y-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className="uppercase cursor-pointer"
                key={category.id}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
