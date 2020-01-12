import {observable, action, decorate, runInAction} from 'mobx';
 
import {createApi} from '../api';

const api = createApi();

class TicketStore {

  constructor() {
    this.loadTickets();
  }

  tickets: Array<object> | any = [];
  isInfoActive: Boolean = false;
  isLoadTicketError: Boolean = false;

  loadTickets() {
    setTimeout(() => {
      api.get('/tickets').then((response) => {
        if (response.data) {
          runInAction(() => {
            this.tickets = response.data.slice(0, 5).sort((prev: {price: any}, curr: {price: any}) => {
              return prev.price - curr.price;
            });
          });
        }
      })
      .catch((error) => {
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
  isLoadTicketError: observable
});

export default TicketStore;