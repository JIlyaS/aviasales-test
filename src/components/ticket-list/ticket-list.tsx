import React from 'react';
import {observer, inject} from 'mobx-react';

import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.scss';

const TicketList = inject('ticketStore')(observer(({ticketStore}) => {

  if (!ticketStore.tickets.length) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.ticketList}>
      {
       ticketStore.tickets.map((ticket: Array<object> | any, index: number) => <TicketItem key={index} {...ticket} />) 
      }
    </div>
  );
}));

export default TicketList;
