import { connect } from "react-redux";
import ProductForm from "./product_form";
import { createProduct } from "../../../actions/product_actions";

const mapStateToProps = state => {
  const product = {
    product_name: "",
    description: "",
    price: "",
    user_id: state.session.id,
    photoFile: "",
    photoUrl: ""
  };

  return {
    product,
    formType: "List a Product",
    userId: state.session.id,
    errors: state.errors.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: product => dispatch(createProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
