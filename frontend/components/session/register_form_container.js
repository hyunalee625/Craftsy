import { connect } from "react-redux";
import { register, receiveErrors, signIn } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import RegisterForm from "./register_form";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Sign Up"
});

const mapDispatchToProps = dispatch => {
  const demoUser = { username: "DemoUser", password: "password" };
  return {
    processForm: user => dispatch(register(user)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal()),
    signInDemo: () => dispatch(signIn(demoUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
