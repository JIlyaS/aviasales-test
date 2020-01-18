import React from 'react';

import styles from './empty-block.module.scss';

const EmptyBlock: React.FC = () => {
  return (
    <div className={styles.EmptyBlock}>
      <img className={styles.EmptyBlock__img} src="../img/list-is-empty.png" alt="Космонавт в поисках - нет данных"/>
      <p className={styles.EmptyBlock__message}>По вашему запросу билетов нет!</p>
    </div>
  );
};

export default EmptyBlock;