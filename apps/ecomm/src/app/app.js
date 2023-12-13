import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart';
import { DataProvider } from './components/DataProvider';
import Details from './components/Details/Details';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Register from './components/Signup/Register';

function App() {
  const [search, setSearch] = useState('');

  return (
    <DataProvider>
      <Routes>
        <Route path="/error404" element={<Error />} />
        <Route
          path="*"
          element={
            <>
              <Header setSearch={setSearch} />
              <Routes>
                <Route index element={<Home />} />
                <Route
                  path="/products"
                  element={<Products search={search} />}
                />
                <Route path="/products/:id" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/error404" />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </DataProvider>
  );
}

export default App;
