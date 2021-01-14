import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <header className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>

      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
