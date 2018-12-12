import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/session_actions";
import RegisterForm from "./register_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign Up"
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(register(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
