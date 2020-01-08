import React from 'react';
import styles from './ticket-item.module.scss';

const TicketItem: React.FC = () => {
  return (
    <article className={styles.ticketItem}>
      <div className={styles.ticketItem__container}>
        <div className={styles.ticketItem__top_block}>
          <span className={styles.ticketItem__cost}>13400 P</span>
          <img className={styles.ticketItem__company_img} src="./img/company-logo.svg" width="110" height="36" alt="Логотип компании"/>
        </div>
        <div className={styles.ticketItem__wrap_content}>
          <div className={styles.ticketItem__block}>
            <div className={styles.ticketItem__block_wrap}>
              <div className={styles.ticketItem__content}>
                <span className={styles.ticketItem__title}>
                  MOW – HKT
                </span>
                <span className={styles.ticketItem__text}>
                  10:45 – 08:00
                </span>
              </div>
              <div className={styles.ticketItem__content}>
                <span className={styles.ticketItem__title}>
                  В пути
                </span>
                <span className={styles.ticketItem__text}>
                  21ч 15м
                </span>
              </div>
              <div className={styles.ticketItem__content}>
                <span className={styles.ticketItem__title}>
                  2 пересадки
                </span>
                <span className={styles.ticketItem__text}>
                  HKG, JNB
                </span>
              </div>
            </div>
            <button className={styles.ticketItem__btn_details} type="button">1 пересадка</button>
          </div>
          <div className={styles.ticketItem__block}>
            <div className={styles.ticketItem__block_wrap}>
              <div className={styles.ticketItem__content}>
                <span className={styles.ticketItem__title}>
                  MOW – HKT
                </span>
                <span className={styles.ticketItem__text}>
                  11:20 – 00:50
                </span>
              </div>
              <div className={styles.ticketItem__content}>
                <span className={styles.ticketItem__title}>
                  В пути
                </span>
                <span className={styles.ticketItem__text}>
                  13ч 30м
                </span>
              </div>
              <div className={styles.ticketItem__content}>
                <span className={styles.ticketItem__title}>
                  1 пересадка
                </span>
                <span className={styles.ticketItem__text}>
                  HKG
                </span>
              </div>
            </div>
            <button className={styles.ticketItem__btn_details} type="button">2 пересадки</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TicketItem;
