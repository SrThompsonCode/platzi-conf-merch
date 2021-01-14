import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

const Products = () => {
  // const { state, addToCart } = useContext(AppContext);
  // const {products}  = state
  // OR
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((prod) => (
          <Product
            key={prod.id}
            product={prod}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
