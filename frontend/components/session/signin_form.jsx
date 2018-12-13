import React from "react";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
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
      <div className="entire-signin-form">
        <div className="signin-form-container">
          <form className="signin-form-box" onSubmit={this.handleSubmit}>
            <div className="signin-form">
              <br />
              <div className="signin-prompt">Sign in to continue</div>
              <label>
                <div className="field-name">Username</div>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="input-field"
                />
              </label>
              <br />
              <label>
                <div className="field-name">Password</div>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="input-field"
                />
              </label>
              <br />
              <div className="signin-button-container">
                <input
                  className="session-submit-button"
                  type="submit"
                  value={this.props.formType}
                />
              </div>
              <br />
              <div className="error-message-container">
                {this.renderErrors()}
              </div>
            </div>
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

export default SignInForm;
