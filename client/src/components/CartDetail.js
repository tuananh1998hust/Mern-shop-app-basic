import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CartDetail extends Component {
  render() {
    const { cart } = this.props.product;

    return (
      <Row>
        {cart.map((item, index) => (
          <Col sm="12" md="8" key={index} className="d-flex">
            <img src={item.imgUrl} alt="img" width="128" height="64" />
            <div className="detail ml-2">
              <h3 className="mb-2">{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <span className="price">$ {item.price}</span>
          </Col>
        ))}
      </Row>
    );
  }
}

CartDetail.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps)(CartDetail);
