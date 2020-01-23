import {observable, action, decorate, runInAction} from 'mobx';
import uuidv1 from 'uuid/v1';
 
import {createApi} from '../api';

const api = createApi();

class TicketStore {

  constructor() {
    this.loadTickets();
  }

  tickets: Array<object> | any = [];
  originalTickets: Array<object> | any = [];
  isInfoActive: Boolean = false;
  isLoadTicketError: Boolean = false;
  isTicketsLoading: Boolean = false;

  loadTickets() {
    this.setTicketsLoading(true);
    return api.get('/api/tickets').then((response) => {
      if (response.data) {
        runInAction(() => {
          this.setTicketsLoading(false);
          response.data = response.data.map((data: any) => ({id: uuidv1(), ...data}));
          this.tickets = response.data.slice(0, 5).sort((prev: {price: any}, curr: {price: any}) => {
            return prev.price - curr.price;
          });
          this.originalTickets = this.tickets;
        });
      }
    })
    .catch((error) => {
      this.setTicketsLoading(false);
      this.setLoadTicketError();
      console.log(error);
    });
  }

  setLoadTicketError() {
    this.isLoadTicketError = true;
  }

  setTicketsLoading(isLoad: Boolean) {
    this.isTicketsLoading = isLoad;
  }
}

decorate(TicketStore, {
  loadTickets: action.bound,
  setLoadTicketError: action.bound,
  setTicketsLoading: action.bound,
  tickets: observable.shallow,
  isLoadTicketError: observable,
  originalTickets: observable,
  isTicketsLoading: observable,
});

export default TicketStore;