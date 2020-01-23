import React from 'react';
import {observer, inject} from 'mobx-react';

import styles from './filter-list.module.scss';

const FilterList = inject('filterStore')(observer(({filterStore}) => {
  return (
    <aside className={styles.filterList}>
      <div className={styles.filterList__container}>
        <div className={styles.filterList__block}>
          <h3 className={styles.filterList__header}>
            Количество пересадок
          </h3>
          <div className={styles.filterList__group}>
            <label className={styles.filterList__label} onChange={filterStore.changeFilter}>
              <input className="visually-hidden" type="checkbox" name="transfer" value="all" />
              <span className={styles.filterList__label_text}>Все</span>
            </label>
          </div>
          <div className={styles.filterList__group}>
            <label className={styles.filterList__label} onChange={filterStore.changeFilter}>
              <input className="visually-hidden" type="checkbox" name="transfer" value="nothing" />
              <span className={styles.filterList__label_text}>Без пересадок</span>
            </label>
          </div>
          <div className={styles.filterList__group}>
            <label className={styles.filterList__label} onChange={filterStore.changeFilter}>
              <input className="visually-hidden" type="checkbox" name="transfer" value="one-transfer" />
              <span className={styles.filterList__label_text}>1 пересадка</span>
            </label>
          </div>
          <div className={styles.filterList__group}>
            <label className={styles.filterList__label} onChange={filterStore.changeFilter}>
              <input className="visually-hidden" type="checkbox" name="transfer" value="two-transfer" />
              <span className={styles.filterList__label_text}>2 пересадки</span>
            </label>
          </div>
          <div className={styles.filterList__group}>
            <label className={styles.filterList__label} onChange={filterStore.changeFilter}>
              <input className="visually-hidden" type="checkbox" name="transfer" value="three-transfer" />
              <span className={styles.filterList__label_text}>3 пересадки</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}));

export default FilterList;