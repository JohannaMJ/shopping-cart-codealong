import React from 'react';
import { Product } from './Product';
import { useSelector } from 'react-redux';

export const Products = () => {
  const allProducts = useSelector((store) => store.products);

  return (
    <div className='products'>
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
