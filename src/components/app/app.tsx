import React from 'react';
import Header from '../header/header';
import FilterList from '../filter-list/filter-list';
import Main from '../main/main';
import styles from './app.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.app__content}>
        <FilterList />
        <Main />
      </div>
    </div>
  );
}

export default App;
