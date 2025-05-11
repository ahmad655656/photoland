import React from 'react';
import { FiX } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
const CategoryNavMobile = ({setCatNavMobile}) => {
  const {data} = useFetch('/categores')
  console.log(data)
  return <div className='w-full h-full p-8 bg-primary'>
    {/* close icon */}
    <div
    onClick={() => setCatNavMobile(false)} className='flex justify-end mb-8 cursor-pointer'>
      <FiX className='text-3xl' />
    </div>
    <div className='flex flex-col gap-y-8'>
      {data?.map(category => {
        return <Link className='font-medium uppercase' key={category.id} to={`products/${category.id}`}>{category.title} Cameras </Link>
      })}
    </div>
  </div>;
};

export default CategoryNavMobile;
