import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import currecies from './mock';

const userData = {
  email: 'usuario@email.com',
  senha: '123456',
};

const walletDate = {
  value: '5',
  valueEdit: '10',
  description: 'mouse',
  descriptionEdit: 'teclado',
};

describe('verifica o funcionamento da aplicação', () => {
  test('verifica o funcionamento aplicação', async () => {
    global.fetch = jest.fn().mockResolvedValue(
      Promise.resolve({ json: () => Promise.resolve(currecies) }),
    );
    const { history } = renderWithRouterAndRedux(<App />);

    const titleLogin = screen.getByRole('heading', { level: 4 });
    const email = screen.getByLabelText('Email:');
    const senha = screen.getByLabelText('Senha:');
    const button = screen.getByRole('button');

    expect(titleLogin).toBeInTheDocument();
    expect(titleLogin).toHaveTextContent('Login');
    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Entrar');

    expect(button).toBeDisabled();

    userEvent.type(email, userData.email);
    userEvent.type(senha, userData.senha);

    expect(button).not.toBeDisabled();
    userEvent.click(button);

    expect(history.location.pathname).toBe('/carteira');

    const emailLogged = screen.getByTestId('email-field');
    expect(emailLogged).toBeInTheDocument();
    expect(emailLogged).toHaveTextContent(userData.email);

    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const buttonAdd = screen.getByRole('button');

    userEvent.type(valueInput, walletDate.value);
    userEvent.type(descriptionInput, walletDate.description);

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveTextContent('Adicionar despesa');
    expect(buttonAdd).not.toBeDisabled();

    userEvent.click(buttonAdd);

    const descriptionAdd = await screen.findByText(walletDate.description);
    const buttonEdit = screen.getByTestId('edit-btn');
    const buttonDelete = screen.getByTestId('delete-btn');

    expect(descriptionAdd).toBeInTheDocument();
    expect(buttonEdit).toBeInTheDocument();
    expect(buttonDelete).toBeInTheDocument();

    userEvent.click(buttonEdit);
    userEvent.clear(descriptionInput);
    userEvent.clear(valueInput);
    userEvent.type(descriptionInput, walletDate.descriptionEdit);
    userEvent.type(valueInput, walletDate.valueEdit);

    const buttonAddEdite = await screen.findByTestId('edite-input');

    expect(buttonAddEdite).toBeInTheDocument();

    userEvent.click(buttonAddEdite);

    const description2 = await screen.findByText(walletDate.descriptionEdit);
    expect(description2).toBeInTheDocument();

    userEvent.click(buttonDelete);

    const total = screen.getByTestId('total-field');
    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent('0.00');

    userEvent.type(descriptionInput, 'Computador');
    userEvent.click(buttonAdd);
    userEvent.type(descriptionInput, 'Monitor');
    userEvent.click(buttonAdd);
  });
});
