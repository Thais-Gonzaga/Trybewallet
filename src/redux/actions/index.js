// Coloque aqui suas actions
import fetchApi from '../../services/FetchApi';

export const USER_EMAIL = 'USER_EMAIL';
export const WALLET_CURRENCY = 'WALLET_CURRENCY';
export const WALLETFORM_CURRENCY_SUCESS = 'WALLETFORM_CURRENCY_SUCESS';

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
