import React from 'react';
import {observer, inject} from 'mobx-react';

import LoadingBlock from '../loading-block/loading-block';
import ErrorBlock from '../error-block/error-block';
import EmptyBlock from '../empty-block/empty-block';
import TicketItem from '../ticket-item/ticket-item';
import styles from './ticket-list.module.scss';

const TicketList = inject('ticketStore')(observer(({ticketStore: {isTicketsLoading, isLoadTicketError, tickets, scrollTicketList}}) => {

  if (isLoadTicketError) {
    return <ErrorBlock />;
  }

  if (isTicketsLoading) {
    return <LoadingBlock />;
  }

  if (tickets.length === 0) {
    return <EmptyBlock />;
  }

  return (
    <div id="scrollableDiv" className={styles.ticketList}>
      {
        tickets.map((ticket: Array<object> | any, index: number) => <TicketItem key={index} {...ticket} />)
      }
    </div>
  );
}));

export default TicketList;
