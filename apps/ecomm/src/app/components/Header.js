import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from './DataProvider';

export default function Header(props) {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styles = {
    largeIcon: {
      width: 28,
      height: 28,
    },

    styleMenu: {
      top: menu ? 0 : '-100%',
      backgroundColor: '#2b6777',
    },
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">WallKart</Link>
        </h1>
      </div>

      <input
        type="text"
        id="input-search"
        name="search"
        placeholder="Search..."
      />

      <ul style={styles.styleMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/register">Login/Register</Link>
        </li>
        <li onClick={toggleMenu}>
          <img
            src="../../assets/images/cross.png"
            alt="close-menu"
            width="30"
            className="menu"
          />
        </li>
      </ul>

      <div className="cart-icon">
        <span>{cart.length}</span>
        <Link to="/cart">
          <ShoppingCartIcon
            style={styles.largeIcon}
            className="menu"
          ></ShoppingCartIcon>
        </Link>
      </div>

      <div className="menu" onClick={toggleMenu}>
        <img src="../../assets/images/menu.svg" alt="menu" width="30" />
      </div>
    </header>
  );
}
