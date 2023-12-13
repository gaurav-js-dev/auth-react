import React, { createContext, useEffect, useState } from 'react';

import { initialProducts } from './initialProducts';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState(initialProducts);

  const storedCart = JSON.parse(localStorage.getItem('storageCart')) || [];
  const [cart, setCart] = useState(storedCart);

  const addCart = (id) => {
    const check = cart.every((item) => item.pid !== id);

    if (check) {
      const data = products.filter((product) => product.pid === id);
      setCart([...cart, ...data]);
    } else {
      alert('Product has been added to the cart.');
    }
  };

  useEffect(() => {
    localStorage.setItem('storageCart', JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
