import React from 'react';
import ProductSlider from './ProductSlider';
import useFetch from '../hooks/useFetch';

const LatestProducts = () => {
  //get new products
   const {data} = useFetch('/products?populate=*&filters[isNew]=true ')
  
  return <div className='mb-16'>
  <div className='container mx-auto'>
    <h2 className='mb-6 text-center h2 xl:text-left'>
    Latest Products
    </h2>
  <ProductSlider data={ data } />
  </div>
</div>;
};

export default LatestProducts;
