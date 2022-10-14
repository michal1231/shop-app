import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = props => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
  );
};

Image.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
}

export default Image;