import styles from './Image.module.scss';

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

export default Image;