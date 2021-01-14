import React, { useState } from 'react';
import initialState from '../initialState';
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload, index) => {
    setState({
      ...state,
      cart: state.cart.filter((items, i) => i !== index),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payLoad) => {
    setState({
      ...state,
      orders: [...state.orders, payLoad],
    });
  };
  return { addToCart, removeFromCart, addToBuyer, addNewOrder, state };
};

export default useInitialState;
