import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import roootReducer from './reducers/index';

const store = createStore(roootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
if (window.Cypress) {
  window.store = store;
}
