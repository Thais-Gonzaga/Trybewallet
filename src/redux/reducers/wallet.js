// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  WALLETFORM_CURRENCY_SUCESS,
  WALLET_CURRENCY } from '../actions/index';

const INITIAL_STATE = {
  total: 0,
  currency: 'BRL',
  currencies: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CURRENCY:
    return {
      total: action.state.total,
      currency: action.state.currency,
    };
  case WALLETFORM_CURRENCY_SUCESS:
    return {
      currencies: action.state.filter((currency) => currency !== 'USDT'),
    };

  default: return state;
  }
};

export default user;
