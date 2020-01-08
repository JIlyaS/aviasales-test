import React from 'react';
import TicketList from '../ticket-list/ticket-list';
import SortBlock from '../sort-block/sort-block';
import styles from './main.module.scss';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <SortBlock />
      <TicketList />
    </main>
  );
}

export default Main;
