import React from 'react';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.scss';

const TicketList: React.FC = () => {
  return (
    <div className={styles.ticketList}>
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TicketItem />
    </div>
  );
}

export default TicketList;
