import { useState } from 'react';
import shortid from 'shortid';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map(product => <Product {...product} key={shortid()} />)}
    </section>
  );
};

export default Products;