// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  WALLETFORM_CURRENCY_SUCESS,
  WALLETFORM_SAVE,
  TABLE_REMOVE_ITEM,
  TABLE_EDIT_ITEM,
  WALLETFORM_EDIT_ITEM,
} from '../actions/index';

const INITIAL_STATE = {
  currency: 'BRL',
  currencies: [],
  expenses: [],
  expensesEdit: {},
  edit: false,
  idEdit: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLETFORM_SAVE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.state, id: state.expenses.length },
      ],
    };

  case WALLETFORM_CURRENCY_SUCESS:
    return {
      ...state,
      currencies: Object.keys(action.state).filter((currency) => currency !== 'USDT'),
    };

  case TABLE_REMOVE_ITEM:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => action.state !== id),
    };

  case TABLE_EDIT_ITEM:
    return {
      ...state,
      expensesEdit: state.expenses.find(({ id }) => action.state === id),
      idEdit: action.state,
      edit: true,
    };

  case WALLETFORM_EDIT_ITEM:
    return {
      ...state,
      expenses: state.expenses
        .map((expense) => (expense.id === state.idEdit
          ? { ...action.state, id: state.idEdit } : expense)),
      edit: false,
    };

  default: return state;
  }
};

export default wallet;
