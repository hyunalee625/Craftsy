import React from "react";
import { connect } from "react-redux";
import ProductForm from "./product_form";
import { updateProduct, deleteProduct, fetchProduct } from "../../../actions/product_actions";

class EditProductForm extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product.id != nextProps.match.params.productId) {
      this.props.fetchProduct(nextProps.match.params.productId);
    }
  }

  render() {
    if (!this.props.product.user_id) return <div />;
    const { action, formType, product, deleteProduct, errors, userId } = this.props;
    return (
      <ProductForm
        action={action}
        formType={formType}
        product={product}
        deleteProduct={deleteProduct}
        errors={errors}
        userId={userId}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const defaultProduct = {
    product_name: "",
    description: "",
    price: "",
    user_id: state.session.id,
    photoFile: null,
    photoUrl: null
  };

  const product = state.entities.products[ownProps.match.params.productId] || defaultProduct;

  return {
    product,
    formType: "Update Your Product Details",
    userId: state.session.id,
    errors: state.errors.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: product => dispatch(updateProduct(product)),
    deleteProduct: id => dispatch(deleteProduct(id)),
    fetchProduct: id => dispatch(fetchProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductForm);
