import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
// import clsx from 'clsx';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize headerClass={styles.optionLabel} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} sizes={props.sizes} />
      {/* <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}
            </ul>
          </div> */}
      <OptionColor headerClass={styles.optionLabel} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} colors={props.colors} />
      {/* <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map(color => <li key={color}><button type="button" onClick={() => setCurrentColor(color)} className={clsx(styles[currentColorClassName(color)], color === currentColor && styles.active)} /></li>)}
        </ul>
      </div> */}
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductOptions;