import React from "react";
import { withRouter, Link } from "react-router-dom";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    if (this.props.formType === "Update Your Product Details") {
      this.props
        .action(this.state)
        .then(() => this.props.history.push(`/products/${this.state.id}`));
    } else {
      const productData = new FormData();
      productData.append("product[product_name]", this.state.product_name);
      productData.append("product[description]", this.state.description);
      productData.append("product[price]", this.state.price);
      productData.append("product[user_id]", this.props.userId);
      if (this.state.photoFile) {
        productData.append("product[photo]", this.state.photoFile);
        this.props
          .action(productData)
          .then(() => this.props.history.push(`/products/${this.state.id}`));
      }
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteProduct(this.props.match.params.productId)
      .then(() => this.props.history.push("/products"));
  }

  deleteButton() {
    if (this.props.formType === "Update Your Product Details") {
      return (
        <div className="delete-product-button-container">
          <input
            className="delete-product-button"
            type="submit"
            value="Delist Product"
            onClick={this.handleDelete}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ photoFile: null, photoUrl: "" });
    }
  }

  photoButton() {
    if (this.props.formType === "Update Your Product Details") {
      return null;
    } else {
      return <input className="upload-photo-button" type="file" onChange={this.handleFile} />;
    }
  }

  render() {
    const errors = () => this.props.errors.map((error, i) => <li key={i}>{error}</li>);
    const photoPreview = this.state.photoUrl ? (
      <img className="photo-preview" src={this.state.photoUrl} />
    ) : null;

    return (
      <div className="product-form-container">
        <form className="entire-product-form">
          <label>
            {" "}
            Product name:
            <input
              type="text"
              value={this.state.product_name}
              onChange={this.update("product_name")}
            />
          </label>
          <label>
            {" "}
            Price:
            <input type="text" value={this.state.price} onChange={this.update("price")} />
          </label>
          <label>
            {" "}
            Description:
            <textarea
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
              rows="10"
              cols="100"
            />
          </label>
          <Link to="/products">Cancel</Link>
          <input type="submit" value="Submit" />
          <ul>{errors()}</ul>
          {this.photoButton()}
          {photoPreview}
        </form>
      </div>
    );
  }
}

export default withRouter(ProductForm);
