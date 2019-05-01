import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProducts } from "../actions/productActions";

class Product extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props.product;
    return (
      <div id="products">
        <Row>
          {products.map(item => (
            <Col sm="6" md="4" key={item._id}>
              <div
                className="item"
                style={{
                  backgroundImage: "url(" + item.imgUrl + ")"
                }}
              >
                <div className="item-text">
                  {item.name} <span className="price">${item.price}</span>
                  <br />
                  <div className="item-hidden">
                    <small>{item.description}. </small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Product);
