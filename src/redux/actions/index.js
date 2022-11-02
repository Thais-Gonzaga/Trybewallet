// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const WALLET_CURRENCY = 'WALLET_CURRENCY';

export const actionEmail = (state) => ({
  type: USER_EMAIL,
  state,
});

export const actionCurrency = (state) => ({
  type: WALLET_CURRENCY,
  state,
});
