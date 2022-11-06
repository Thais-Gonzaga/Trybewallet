import React, { Component } from 'react';
import { arrayOf, objectOf } from 'prop-types';
import { connect } from 'react-redux';

const namesHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class Table extends Component {
  render() {
    const { expensesTable } = this.props;
    return (

      <table>
        <thead>
          <tr>
            {namesHeader.map((name, index) => <th key={ index }>{name}</th>)}
          </tr>
        </thead>
        <tbody>
          {expensesTable
            .map(({ value, description, currency, method, tag, id, exchangeRates }) => {
              const conversion = parseFloat(+exchangeRates[currency].ask
                * +value).toFixed(2);
              const cambio = parseFloat(+exchangeRates[currency].ask).toFixed(2);
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{parseFloat(+value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{cambio}</td>
                  <td>{conversion}</td>
                  <td>{exchangeRates.XRP.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expensesTable: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expensesTable: arrayOf(objectOf).isRequired,
};
