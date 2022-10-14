import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import Image from '../Image/Image';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    const additionalPrice = props.sizes.find(size => size.name === currentSize).additionalPrice;
    return props.basePrice + additionalPrice;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSize]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Summary
    ========
    Name: ${props.title}
    Price: ${getPrice}
    Size: ${currentSize}
    Color: ${currentColor}`)
  }

  return (
    <article className={styles.product}>
      <Image title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions
          handleSubmit={handleSubmit}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          sizes={props.sizes}
          colors={props.colors} />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.exact({ name: PropTypes.string, additionalPrice: PropTypes.number })).isRequired,
}

export default Product;