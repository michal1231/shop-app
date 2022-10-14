import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {
  const currentColorClassName = color => {
    return `color${color[0].toUpperCase() + color.slice(1).toLowerCase()}`;
  }

  return (
    <div className={styles.colors}>
      <h3 className={props.headerClass}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color => <li key={color}><button type="button" onClick={() => props.setCurrentColor(color)} className={clsx(styles[currentColorClassName(color)], color === props.currentColor && styles.active)} /></li>)}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  headerClass: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
}

export default OptionColor;