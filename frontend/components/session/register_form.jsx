import React from "react";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.signInDemo = this.signInDemo.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.closeModal();
    });
  }

  signInDemo(e) {
    e.preventDefault();
    this.props.signInDemo().then(() => {
      this.props.closeModal();
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errorMessage" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="entire-register-form">
        <div className="register-form-container">
          <form className="register-form-box" onSubmit={this.handleSubmit}>
            <div className="register-form">
              <br />
              <div className="create-account-prompt">Create your account</div>
              <div className="registration-prompt">Registration is easy.</div>
              <label>
                <div className="required-field">
                  <div className="field-name">Username</div>
                  &nbsp;
                  <div className="asterisk">&#8902;</div>
                </div>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="input-field"
                />
              </label>
              <br />
              <label>
                <div className="required-field">
                  <div className="field-name">Email</div>
                  &nbsp;
                  <div className="asterisk">&#8902;</div>
                </div>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="input-field"
                />
              </label>
              <br />
              <label>
                <div className="required-field">
                  <div className="field-name">Password</div>
                  &nbsp;
                  <div className="asterisk">&#8902;</div>
                </div>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="input-field"
                />
              </label>
              <br />
              <div className="signup-button-container">
                <input
                  className="session-submit-button"
                  type="submit"
                  value={this.props.formType}
                />
              </div>
            </div>
            <br />
            {this.renderErrors()}
          </form>
        </div>
        <div className="OR">
          <span>OR</span>
        </div>
        <div className="demo-button-box">
          <button className="demo-button" onClick={this.signInDemo}>
            Demo
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
