import {configure} from 'mobx';
import TicketStore from './ticket-store';
import SortStore from './sort-store';

configure({ enforceActions: 'observed' });

class RootStore {
  ticketStore: TicketStore;
  sortStore: SortStore;
  constructor() {
      this.ticketStore = new TicketStore();
      this.sortStore = new SortStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;