import React, {Component} from 'react';
import moment from 'moment';

import {TicketInterface} from '../../types/types';
import {transformDirationTime} from '../../utils';
import styles from './ticket-item.module.scss';

class TicketItem extends Component<TicketInterface, {isInfoActive: Boolean}> {

  render() {
    const {price, carrier, segments} = this.props;
    return (
      <article className={styles.ticketItem}>
        <div className={styles.ticketItem__container}>
          <div className={styles.ticketItem__top_block}>
            <span className={styles.ticketItem__cost}>{price} P</span>
            <img className={styles.ticketItem__company_img} src={`//pics.avs.io/99/36/${carrier}.png`} alt="Логотип компании"/>
          </div>
          <div className={styles.ticketItem__wrap_content}>
            {segments.map(({origin, destination, duration, stops, date}, index) => 
              <div className={styles.ticketItem__block} key={index}>
                  <div className={styles.ticketItem__content}>
                    <span className={styles.ticketItem__title}>
                      {origin} – {destination}
                    </span>
                    <span className={styles.ticketItem__text}>
                      {`${moment(date).format('HH:mm')} - ${moment(date).add(duration, 'm').format('HH:mm')}`}
                    </span>
                  </div>
                  <div className={styles.ticketItem__content}>
                    <span className={styles.ticketItem__title}>
                      В пути
                    </span>
                    <span className={styles.ticketItem__text}>
                      {transformDirationTime(duration)}
                    </span>
                  </div>
                  <div className={styles.ticketItem__content}>
                    <span className={styles.ticketItem__title}>
                      {stops.length} пересадки
                    </span>
                    <span className={styles.ticketItem__text}>
                      {(stops.map((stop: String) => stop)).join(', ')}
                    </span>
                  </div>
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }
}

export default TicketItem;
