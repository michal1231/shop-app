import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductOptions = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize headerClass={styles.optionLabel} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} sizes={props.sizes} />
      <OptionColor headerClass={styles.optionLabel} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} colors={props.colors} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductOptions.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.exact({ name: PropTypes.string, additionalPrice: PropTypes.number })).isRequired,
}

export default ProductOptions;