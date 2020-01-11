import {action, decorate, observable} from 'mobx';

class SortStore {
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }
  
  sortActive: String = `cheap`

  changeSortBtn(sortElem: String) {
    this.sortActive = sortElem;
    switch(sortElem) {
      case `cheap`:
        this.rootStore.ticketStore.tickets = this.rootStore.ticketStore.tickets.slice().sort((prev: {price: any}, curr: {price: any}) => {
          return prev.price - curr.price;
        });
        break;
      case `fast`:
        this.rootStore.ticketStore.tickets = this.rootStore.ticketStore.tickets.slice().sort((prev: {segments: any[]}, curr: {segments: any[]}) => {
          const totalDurationPrev = prev.segments.reduce((acc: any, curr: {duration: any}) => acc + curr.duration, 0);
          const totalDurationCurr = curr.segments.reduce((acc: any, curr: {duration: any}) => acc + curr.duration, 0);
          return totalDurationPrev - totalDurationCurr;
        });
        break;
      default:
        throw new Error(`Введите новый пункт сортировки`);
    }
  }
}

decorate(SortStore, {
  sortActive: observable,
  changeSortBtn: action.bound,
});

export default SortStore;