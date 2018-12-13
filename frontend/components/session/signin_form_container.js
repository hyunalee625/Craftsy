import { connect } from "react-redux";
import { signIn, receiveErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import SignInForm from "./signin_form";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Sign In"
});

const mapDispatchToProps = dispatch => {
  const demoUser = { username: "DemoUser", password: "password" };
  return {
    processForm: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal()),
    signInDemo: () => dispatch(signIn(demoUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
