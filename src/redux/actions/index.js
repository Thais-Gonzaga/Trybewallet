// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
// ação do botão entrar para salvar o email
// preciso de um parametro email
export const actionEmail = (state) => ({
  type: 'USER_EMAIL',
  state,
});
