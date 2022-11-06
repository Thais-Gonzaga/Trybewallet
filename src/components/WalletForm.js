import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, func, shape, bool } from 'prop-types';
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
      id: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEconCurrency());
  }

  componentDidUpdate(prevProps, prevState) {
    const { expensesEdit, editBool } = this.props;
    if (editBool && prevState.id !== expensesEdit.id) {
      this.setState({
        value: expensesEdit.value,
        description: expensesEdit.description,
        currency: expensesEdit.currency,
        method: expensesEdit.method,
        tag: expensesEdit.tag,
        id: expensesEdit.id,
      });
    }
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
      id: '',
    });
  }

  onEdit() {
    const { dispatch } = this.props;
    dispatch(fetchData({ ...this.state }, true));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
      id: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editBool } = this.props;

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
        {editBool
          ? (
            <button
              type="button"
              onClick={ this.onEdit }
            >
              Editar despesa
            </button>)
          : (
            <button
              type="button"
              onClick={ this.onSave }
            >
              Adicionar despesa
            </button>)}
      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editBool: state.wallet.edit,
  expensesEdit: state.wallet.expensesEdit,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: arrayOf(string),
  dispatch: func.isRequired,
  expensesEdit: shape({}).isRequired,
  editBool: bool.isRequired,

};

WalletForm.defaultProps = {
  currencies: [],

};
