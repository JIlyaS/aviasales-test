import React from 'react';
import cn from 'classnames';
import styles from './sort-block.module.scss';

const SortBlock: React.FC = () => {
  return (
    <div className={styles.sortBlock}>
      <button 
        className={cn(styles.sortBlock__btn, styles.sortBlock__btn_left, styles.sortBlock__btn_active)}
        type="button"
      >
          Самый дешёвый
        </button>
      <button
        className={cn(styles.sortBlock__btn, styles.sortBlock__btn_right)}
        type="button"
      >
        Самый быстрый
      </button>
    </div>
  );
}

export default SortBlock;
