import {action, decorate, observable} from 'mobx';
import uniqBy from 'lodash/uniqBy';

class FilterStore {
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  transfers: any[] = [];
  ticketsList = {
    all: {name: 'all', data: [], active: false},
    nothing: {name: 'nothing', data: [], active: false},
    'one-transfer': {name: 'one-transfer', data: [], active: false},
    'two-transfer': {name: 'two-transfer', data: [], active: false},
    'three-transfer': {name: 'three-transfer', data: [], active: false}
};

  changeFilter(evt: any) {
    const typeFilter = evt.target.value;
    const active = evt.target.checked;
    this.transfers = [];
    let transferTickets = [];
    switch(typeFilter) {
      case 'all':
        if (active) {
          this.ticketsList.all.active = true;
          transferTickets = this.rootStore.ticketStore.originalTickets;
          this.ticketsList.all.data = transferTickets;
        } else {
          this.ticketsList.all.active = false;
          this.ticketsList.all.data = [];
        }
        break;
      case 'nothing':
        if (active) {
          this.ticketsList.nothing.active = true;
          transferTickets = this.rootStore.ticketStore.originalTickets.filter(
            (ticket: any) => ticket.segments.some((segment: any) => segment.stops.length === 0)
          );
          this.ticketsList.nothing.data = transferTickets;
        } else {
          this.ticketsList.nothing.active = false;
          this.ticketsList.nothing.data = [];
        }
        break;
      case 'one-transfer':
        if (active) {
          this.ticketsList['one-transfer'].active = true;
          transferTickets = this.rootStore.ticketStore.originalTickets.filter(
            (ticket: any) => ticket.segments.some((segment: any) => segment.stops.length === 1)
          );
          this.ticketsList['one-transfer'].data = transferTickets;
        } else {
          this.ticketsList['one-transfer'].active = false;
          this.ticketsList['one-transfer'].data = [];
        }
        break;
      case 'two-transfer':
        if (active) {
          this.ticketsList['two-transfer'].active = true;
          transferTickets = this.rootStore.ticketStore.originalTickets.filter(
            (ticket: any) => ticket.segments.some((segment: any) => segment.stops.length === 2)
          );
          this.ticketsList['two-transfer'].data = transferTickets;
        } else {
          this.ticketsList['two-transfer'].active = false;
          this.ticketsList['two-transfer'].data = [];
        }
        break;
      case 'three-transfer':
        if (active) {
          this.ticketsList['three-transfer'].active = true;
          transferTickets = this.rootStore.ticketStore.originalTickets.filter(
            (ticket: any) => ticket.segments.some((segment: any) => segment.stops.length === 3)
          );
          this.ticketsList['three-transfer'].data = transferTickets;
        } else {
          this.ticketsList['three-transfer'].active = false;
          this.ticketsList['three-transfer'].data = [];
        }
        break;
      default:
        throw new Error('Неверно указано название фильтра!');
    }

    this.transfers = uniqBy([...this.ticketsList.all.data, ...this.ticketsList.nothing.data, ...this.ticketsList['one-transfer'].data,
    ...this.ticketsList['two-transfer'].data, ...this.ticketsList['three-transfer'].data], 'id');
    
    this.rootStore.ticketStore.tickets = this.transfers;

    if ((Object.values(this.ticketsList)).every((ticket) => !ticket.active)) {
      this.rootStore.ticketStore.tickets = this.rootStore.ticketStore.originalTickets;
    }
  }
}

decorate(FilterStore, {
  // sortActive: observable,
  changeFilter: action.bound,
  transfers: observable.struct,
  ticketsList: observable.struct,
});

export default FilterStore;