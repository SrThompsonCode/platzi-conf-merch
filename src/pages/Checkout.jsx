import React, { useContext } from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import { handleSumTotal } from '../utils/index';
import AppContext from '../context/AppContext';
import { Helmet } from 'react-helmet';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  // const handleSumTotal = () => {
  //   const reducer = (accumulator, currentValue) =>
  //     accumulator + currentValue.price;

  //   const sum = cart.reduce(reducer, 0);
  //   return sum;
  // };

  return (
    <React.Fragment>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de Pedidos: </h3> : <h3>Sin Pedidos</h3>}

          {cart.map((item, i) => {
            return (
              <div className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>{item.price}</span>
                </div>
                <button type="button" onClick={handleRemove(item, i)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Checkout;
