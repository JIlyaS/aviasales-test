import {action, decorate, observable} from 'mobx';
import uniqBy from 'lodash/uniqBy';

class FilterStore {
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  transfers: any[] = [];

  changeFilter(evt: any) {
    const typeFilter = evt.target.value;
    const active = evt.target.checked;
    let transferTickets = [];
    switch(typeFilter) {
      case 'all':
        transferTickets = this.rootStore.ticketStore.originalTickets;
        break;
      case 'nothing':
        transferTickets = this.rootStore.ticketStore.originalTickets.filter(
          (ticket: any) => ticket.segments.some((segment: any) => segment.stops.length === 0)
        );
        break;
      case 'one-transfer':
        transferTickets = this.rootStore.ticketStore.originalTickets.filter(
          (ticket: any) => ticket.segments.some((segment: any) => segment.stops.length === 1)
        );
        break;
      case 'two-transfer':
        transferTickets = this.rootStore.ticketStore.originalTickets.filter(
          (ticket: any) => ticket.segments.some((segment: any) => segment.stops.length === 2)
        );
        break;
      case 'three-transfer':
        transferTickets = this.rootStore.ticketStore.originalTickets.filter(
          (ticket: any) => ticket.segments.some((segment: any) => segment.stops.length === 3)
        );
        break;
      default:
        throw new Error('Неверно указано название фильтра!');
    }
    this.transfers = uniqBy([...this.transfers, ...transferTickets], 'id');
    this.rootStore.ticketStore.tickets = this.transfers;
  }
}

decorate(FilterStore, {
  // sortActive: observable,
  changeFilter: action.bound,
  transfers: observable
});

export default FilterStore;