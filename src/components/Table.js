import React, { Component } from 'react';

const namesHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            {namesHeader.map((name, index) => <th key={ index }>{name}</th>)}
          </tr>
        </thead>
      </table>
    );
  }
}

export default Table;
