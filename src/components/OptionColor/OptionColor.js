import styles from './OptionColor.module.scss';
import clsx from 'clsx';

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

export default OptionColor;