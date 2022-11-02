import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import roootReducer from './reducers/index';

const store = createStore(roootReducer, composeWithDevTools());

export default store;
if (window.Cypress) {
  window.store = store;
}
