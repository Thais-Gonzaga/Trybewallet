import React, { Component } from 'react';

const optionsMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const optionsTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      values: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState(
      { [name]: value },
    );
  }

  render() {
    const { values, description, currency, method, tag } = this.state;

    return (
      <form>
        <label htmlFor="values">
          Valor
          <input
            id="values"
            data-testid="value-input"
            name="values"
            value={ values }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            id="description"
            data-testid="description-input"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            options={ [''] }
          >
            opção
          </select>
        </label>

        <label htmlFor="method">
          Metodo de pagamento:
          <select
            data-testid="method-input"
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
            options={ [''] }
          >
            {
              optionsMethod.map((option) => <option key={ option }>{option}</option>)
            }
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
            options={ [''] }
          >
            {
              optionsTag.map((option) => <option key={ option }>{option}</option>)
            }
          </select>
        </label>

      </form>
    );
  }
}

export default WalletForm;
