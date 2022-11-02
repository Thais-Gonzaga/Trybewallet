import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionEmail } from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.verificInput = this.verificInput.bind(this);
    this.onSalve = this.onSalve.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState(
      { [name]: value },
      () => this.verificInput(),
    );
  }

  onSalve() {
    const { email } = this.state;
    const { dispatch } = this.props;
    dispatch(actionEmail(email));
  }

  verificInput() {
    const { email, password } = this.state;
    const min = 5;
    const disabled = !(/\w+@\w+.com/.test(email) && password.length > min);
    this.setState({ disabled });
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <h4>Login</h4>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            id="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.onSalve }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
});

export default connect(mapStateToProps)(Login);

Login.propTypes = {
  dispatch: func.isRequired,
};
