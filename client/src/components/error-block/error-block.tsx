import React from 'react';

import styles from './error-block.module.scss';

const ErrorBlock: React.FC = () => {
  return (
    <div className={styles.ErrorBlock}>
      <img className={styles.ErrorBlock__img} src="../img/pluto-fatal-error.png" alt="Изображение падение космонавта - фатальная ошибка"/>
      <p className={styles.ErrorBlock__message}>Что-то пошло не так... Данные не были загружены!</p>
    </div>
  );
};

export default ErrorBlock;