import React from 'react';
import {observer, inject} from 'mobx-react';

import LoadingBlock from '../loading-block/loading-block';
import ErrorBlock from '../error-block/error-block';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.scss';

const TicketList = inject('ticketStore')(observer(({ticketStore: {isTicketsLoading, isLoadTicketError, tickets}}) => {
  
  if (isLoadTicketError) {
    return <ErrorBlock />;
  }

  if (isTicketsLoading) {
    return <LoadingBlock />;
  }

  return (
    <div className={styles.ticketList}>
      {
       tickets.map((ticket: Array<object> | any, index: number) => <TicketItem key={index} {...ticket} />) 
      }
    </div>
  );
}));

export default TicketList;
