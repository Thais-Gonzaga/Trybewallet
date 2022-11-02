import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailHeader } = this.props;
    return (
      <div>
        <p data-testid="email-field">{emailHeader}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailHeader: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  emailHeader: string.isRequired,
};
