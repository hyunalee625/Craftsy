import React from "react";
import { connect } from "react-redux";
import { signIn, receiveErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions"
import { Link } from "react-router-dom";
import SignInForm from "./signin_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign In"
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signIn(user)),
  clearErrors: () => dispatch(receiveErrors([])),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
