import React from 'react';
import cn from 'classnames';
import {observer, inject} from 'mobx-react';

import styles from './sort-block.module.scss';


const SortBlock = inject('sortStore')(observer(({sortStore}) => {

  return (
        <div className={styles.sortBlock}>
        <button 
          className={
            cn(
              styles.sortBlock__btn,
              styles.sortBlock__btn_left,
              {[styles.sortBlock__btn_active]: sortStore.sortActive === `cheap`}
              )}
          type="button"
          onClick={() => sortStore.changeSortBtn(`cheap`)}
        >
            Самый дешёвый
          </button>
        <button
          className={
            cn(
              styles.sortBlock__btn,
              styles.sortBlock__btn_right,
              {[styles.sortBlock__btn_active]: sortStore.sortActive === `fast`}
              )}
          type="button"
          onClick={() => sortStore.changeSortBtn(`fast`)}
        >
          Самый быстрый
        </button>
      </div>
  );
}));

export default SortBlock;
