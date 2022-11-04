import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, func } from 'prop-types';
import { fetchEconCurrency, fetchData } from '../redux/actions';

const optionsMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const optionsTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEconCurrency());
  }

  handleChange({ target: { name, value } }) {
    this.setState(
      { [name]: value },
    );
  }

  onSave() {
    const { dispatch } = this.props;
    dispatch(fetchData({ ...this.state }));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            data-testid="value-input"
            name="value"
            value={ value }
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
            {
              currencies.map((option) => <option key={ option }>{option}</option>)
            }
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
        <button
          type="button"
          onClick={ this.onSave }
        >
          Adicionar despesa
        </button>
      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: arrayOf(string),
  dispatch: func.isRequired,

};

WalletForm.defaultProps = {
  currencies: [],

};
