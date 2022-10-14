import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Image from '../Image/Image';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = sizeName => {
    const additionalPrice = props.sizes.find(size => size.name === sizeName).additionalPrice;
    return props.basePrice + additionalPrice;
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Summary
    ========
    Name: ${props.title}
    Price: ${getPrice(currentSize)}
    Size: ${currentSize}
    Color: ${currentColor}`)
  }

  return (
    <article className={styles.product}>
      <Image title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(currentSize)}$</span>
        </header>
        <ProductOptions
          handleSubmit={handleSubmit}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          sizes={props.sizes}
          colors={props.colors} />
        {/* <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={color}><button type="button" onClick={() => setCurrentColor(color)} className={clsx(styles[currentColorClassName(color)], color === currentColor && styles.active)} /></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form> */}
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
  sizes: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, additionalPrice: PropTypes.number })).isRequired,
}

export default Product;