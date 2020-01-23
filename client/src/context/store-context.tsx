import {createContext} from 'react';
import RootStore from '../stores/root-store';

const StoreContext = createContext(RootStore);

export default StoreContext;