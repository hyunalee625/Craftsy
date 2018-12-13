import React from "react";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.closeModal();
    })
  };

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errorMessage" key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="signin-form-container">
        <form className="signin-form-box" onSubmit={this.handleSubmit}>
          <div className="signin-form">
            <br />
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="signin-input"
              />
            </label>
            <br />
            <label>
              {" "}
              Password:
              <input
                type="text"
                value={this.state.password}
                onChange={this.update("password")}
                className="signin-input"
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
            <br />
            <br />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
