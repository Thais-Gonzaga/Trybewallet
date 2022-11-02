// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_CURRENCY } from '../actions/index';

const INITIAL_STATE = {
  total: 0,
  currency: 'BRL',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CURRENCY:
    return {
      total: action.state.total,
      currency: action.state.currency,
    };

  default: return state;
  }
};

export default user;
