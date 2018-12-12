import { connect } from "react-redux";
import { signIn, logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import NavBar from "./navbar";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => {
  const demoUser = { username: "DemoUser", password: "DemoUser" };
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    signInDemo: () => dispatch(signIn(demoUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
