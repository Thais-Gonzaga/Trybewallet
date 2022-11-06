// Coloque aqui suas actions
import fetchApi from '../../services/FetchApi';

export const USER_EMAIL = 'USER_EMAIL';
export const WALLET_CURRENCY = 'WALLET_CURRENCY';
export const WALLETFORM_CURRENCY_SUCESS = 'WALLETFORM_CURRENCY_SUCESS';
export const WALLETFORM_SAVE = 'WALLETFORM_SAVE';
export const TABLE_REMOVE_ITEM = 'TABLE_REMOVE_ITEM';
export const TABLE_EDIT_ITEM = 'TABLE_EDIT_ITEM';
export const WALLETFORM_EDIT_ITEM = 'WALLETFORM_EDIT_ITEM';

export const actionEmail = (state) => ({
  type: USER_EMAIL,
  state,
});

export const actionCurrency = (state) => ({
  type: WALLET_CURRENCY,
  state,
});

export const actionCurrencySucess = (state) => ({
  type: WALLETFORM_CURRENCY_SUCESS,
  state,
});

export const fetchEconCurrency = () => async (dispatch) => {
  const currency = await fetchApi();
  dispatch(actionCurrencySucess(currency));
};

export const actionForms = (state) => ({
  type: WALLETFORM_SAVE,
  state,
});

export const actionRemoveTable = (state) => ({
  type: TABLE_REMOVE_ITEM,
  state,
});

export const actionEditTable = (state) => ({
  type: TABLE_EDIT_ITEM,
  state,
});

export const editForms = (state) => ({
  type: WALLETFORM_EDIT_ITEM,
  state,
});

export const fetchData = (state, edit = false) => async (dispatch) => {
  const currency = await fetchApi();
  if (edit) {
    return dispatch(editForms({ ...state, exchangeRates: currency }));
  }
  return dispatch(actionForms({ ...state, exchangeRates: currency }));
};
