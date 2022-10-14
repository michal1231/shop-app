import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
      <h3 className={props.headerClass}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => <li key={size.name}><button type="button" onClick={() => props.setCurrentSize(size.name)} className={clsx(size.name === props.currentSize && styles.active)}>{size.name}</button></li>)}
      </ul>
    </div>
  )
}

export default OptionSize;