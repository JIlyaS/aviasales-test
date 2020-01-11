import {observable, action, decorate, runInAction} from 'mobx';
 
import {createApi} from '../api';

const api = createApi();

class TicketStore {

  constructor() {
    this.loadTickets();
  }

  tickets: Array<object> | any = [];
  isInfoActive: Boolean = false;

  loadTickets() {
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
      console.error(error);
    });
  }
}

decorate(TicketStore, {
  loadTickets: action.bound,
  tickets: observable.shallow,
});

export default TicketStore;