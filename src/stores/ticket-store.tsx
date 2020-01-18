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
    this.isTicketsLoading = true;
    setTimeout(() => {
      return api.get('/tickets').then((response) => {
        if (response.data) {
          runInAction(() => {
            this.isTicketsLoading = false;
            response.data = response.data.map((data: any) => ({id: uuidv1(), ...data}));
            this.tickets = response.data.sort((prev: {price: any}, curr: {price: any}) => {
              return prev.price - curr.price;
            });
            this.originalTickets = this.tickets;
          });
        }
      })
      .catch((error) => {
        this.isTicketsLoading = false;
        this.setLoadTicketError();
        console.log(error);
      });
    }, 2000);
  }

  setLoadTicketError() {
    this.isLoadTicketError = true;
  }
}

decorate(TicketStore, {
  loadTickets: action.bound,
  setLoadTicketError: action.bound,
  tickets: observable.shallow,
  isLoadTicketError: observable,
  originalTickets: observable,
  isTicketsLoading: observable,
});

export default TicketStore;