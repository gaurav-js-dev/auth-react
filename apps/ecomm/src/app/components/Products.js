import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from './DataProvider';

export default function Products(props) {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const data = `lorem ipsum <img src="" onerror="alert('message');" />`;

  return (
    <section>
      <div className="products">
        {products
          .filter((product) => {
            if (
              product.title.toLowerCase().includes(props.search.toLowerCase())
            ) {
              return product;
            } else {
              return false;
            }
          })
          .map((product) => (
            <div className="products-card" key={product.pid}>
              <Link to={`/products/${product.pid}`}>
                <img src={product.images[0]} alt="cover-pic" />
              </Link>
              <div className="products-content">
                <h3 title={product.title}>
                  <Link to={`/products/${product.pid}`}>{product.title}</Link>
                </h3>
                <p className="products-desc">{product.description}</p>
                <p
                  className="products-price"
                  dangerouslySetInnerHTML={{ __html: products.price }}
                />
                <p className="products-price">&#8377; {product.price}</p>
                <button onClick={() => addCart(product.pid)}>
                  Add to Cart
                </button>
                <div dangerouslySetInnerHTML={{ __html: data }} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
