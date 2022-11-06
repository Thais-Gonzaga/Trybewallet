// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  WALLETFORM_CURRENCY_SUCESS,
  WALLET_CURRENCY,
  WALLETFORM_SAVE,
  TABLE_REMOVE_ITEM,
} from '../actions/index';

const INITIAL_STATE = {
  currency: 'BRL',
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CURRENCY:
    return {
      ...state,
      currency: action.state.currency,
    };
  case WALLETFORM_SAVE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.state },
      ],
    };

  case WALLETFORM_CURRENCY_SUCESS:
    return {
      ...state,
      currencies: Object.keys(action.state).filter((currency) => currency !== 'USDT'),
    };
  case TABLE_REMOVE_ITEM:
    console.log(state);
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => action.state !== id),
    };

  default: return state;
  }
};

export default wallet;
