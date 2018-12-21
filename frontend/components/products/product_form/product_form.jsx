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

  componentDidMount() {
    if (this.props.formType === "Update Your Product Details") {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.productId && !prevProps.product.description) {
      this.props.fetchProduct(this.props.match.params.productId);
      const { id, product_name, description, price, user_id, photoUrl } = this.props.product;
      this.setState({
        id: id,
        product_name: product_name,
        description: description,
        price: price,
        user_id: user_id,
        photoUrl: photoUrl
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "Update Your Product Details") {
      this.props.action(this.state).then(payload => {
        this.props.history.push(`/users/${Object.keys(payload.payload.seller)[0]}`);
      });
    } else {
      const productData = new FormData();
      productData.append("product[product_name]", this.state.product_name);
      productData.append("product[description]", this.state.description);
      productData.append("product[price]", this.state.price);
      productData.append("product[user_id]", this.props.userId);
      if (this.state.photoFile) {
        productData.append("product[photo]", this.state.photoFile);
      }
      this.props.action(productData).then(payload => {
        this.props.history.push(`/users/${Object.keys(payload.payload.seller)[0]}`);
      });
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
      .then(() => this.props.history.push(`/users/${this.props.userId}`));
  }

  deleteButton() {
    if (this.props.formType === "Update Your Product Details") {
      return (
        <div className="delete-product-button-container">
          <input
            className="delete-product-button"
            type="submit"
            value="Remove Product"
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
    const errors = () =>
      this.props.errors.map((error, i) => (
        <li className="errorMessage" key={i}>
          {error}
        </li>
      ));
    const photoPreview = this.state.photoUrl ? (
      <img className="photo-preview" src={this.state.photoUrl} />
    ) : null;

    return (
      <div className="product-form-container">
        <form className="entire-product-form" onSubmit={this.handleSubmit}>
          <div className="left-side-form">
            <div className="form-title">{this.props.formType}</div>
            <label>
              <div className="label-text">Product name:</div>
              <input
                type="text"
                value={this.state.product_name}
                onChange={this.update("product_name")}
                className="product-name-input-field"
                placeholder="Include keywords that buyers would use to search for your item."
              />
            </label>
            <label>
              <div className="label-text">Price:</div>
              <input
                type="number"
                value={this.state.price}
                onChange={this.update("price")}
                className="price-input-field"
                placeholder="19.99"
                min="0"
                step=".01"
              />
            </label>
            <label>
              <div className="label-text">Description:</div>
              <textarea
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
                rows="10"
                cols="100"
                className="product-input-field"
                placeholder="Start with a brief overview that describes your item's finest features. List details like dimensions and key features in easy-to-read bullet points. Tell buyers a bit about your process or the story behind this item."
              />
            </label>
            <div className="submit-delete-button-div">
              <input className="submit-button" type="submit" value="Submit" />
              <div className="delete-button-div">{this.deleteButton()}</div>
            </div>
            <div className="cancel-button-div">
              <Link className="cancel-button" to={`/users/${this.props.userId}`}>
                <p className="cancel-text">Cancel</p>
              </Link>
            </div>
            <ul>{errors()}</ul>
          </div>
          <div className="right-side-form">
            <div className="photo-preview-container'">{photoPreview}</div>
            <div className="upload-photo-button-div">{this.photoButton()}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ProductForm);
