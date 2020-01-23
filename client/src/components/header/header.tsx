import React from 'react';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.header__logo} href="/">
        <img className={styles.header__logo_img} src="./img/logo.png" width="60" height="60" alt="Логотип"/>
      </a>
    </header>
  );
}

export default Header;
