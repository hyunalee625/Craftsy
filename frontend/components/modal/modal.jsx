import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import SignInFormContainer from "../session/signin_form_container";
import RegisterFormContainer from "../session/register_form_container";

//Modal component
function Modal({ modal, closeModal }) {
  if (!modal) return null;

  let component;

  switch (modal) {
    case "signIn":
      component = <SignInFormContainer />;
      break;
    case "register":
      component = <RegisterFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

//Modal container
const mapStateToProps = ({ ui: { modal } }) => {
  return {
    modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
