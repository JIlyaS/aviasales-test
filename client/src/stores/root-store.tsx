import {configure} from 'mobx';
import TicketStore from './ticket-store';
import SortStore from './sort-store';
import FilterStore from './filter-store';

configure({ enforceActions: 'observed' });

class RootStore {
  ticketStore: TicketStore;
  sortStore: SortStore;
  filterStore: FilterStore;
  constructor() {
      this.ticketStore = new TicketStore();
      this.sortStore = new SortStore(this);
      this.filterStore = new FilterStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;