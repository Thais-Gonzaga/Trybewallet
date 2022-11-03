import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailHeader, totalHeader, currencyHeader } = this.props;
    return (
      <div>
        <p data-testid="email-field">{emailHeader}</p>
        <p data-testid="total-field">
          {' '}
          {totalHeader}
          {' '}
        </p>
        <p data-testid="header-currency-field">{currencyHeader}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailHeader: state.user.email,
  currencyHeader: state.wallet.currency,
  totalHeader: state.wallet.total,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  emailHeader: string,
  currencyHeader: string,
  totalHeader: number,
};
Header.defaultProps = {
  emailHeader: '',
  currencyHeader: '',
  totalHeader: 0,
};
