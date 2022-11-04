import React, { Component } from 'react';
import { string, arrayOf, number } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailHeader, currencyHeader, expensesHeader } = this.props;
    // console.log(expensesHeader);
    // expensesHeader.map(({ exchangeRates, currency, value }) => exchangeRates[currency].ask * value);
    const total = expensesHeader.reduce((acc, curr) => +acc + +curr, 0);
    return (
      <div>
        <p data-testid="email-field">{emailHeader}</p>
        <p data-testid="total-field">
          { !expensesHeader.length
            ? parseFloat(0).toFixed(2)
            : parseFloat(total).toFixed(2)}
        </p>
        <p data-testid="header-currency-field">{currencyHeader}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    emailHeader: state.user.email,
    currencyHeader: state.wallet.currency,
    // totalHeader: state.wallet.total,
    // expensesHeader: state.wallet.expenses.map((e) => e.exchangeRates[e.currency].ask),
    expensesHeader: state.wallet.expenses
      .map(({ exchangeRates, currency, value }) => +exchangeRates[currency].ask * +value),
  }
);

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  emailHeader: string.isRequired,
  currencyHeader: string.isRequired,
  expensesHeader: arrayOf(number),
  // totalHeader: string.isRequired,
};
Header.defaultProps = {
  expensesHeader: [],
};
