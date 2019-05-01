import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import uuid from "uuid";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          _id: uuid(),
          name: "Arduino Basic",
          product_type: 1,
          price: 25,
          description: "Lorem Ipsum is simply dummy text",
          imgUrl: "http://lorempixel.com/400/200/"
        },
        {
          _id: uuid(),
          name: "Arduino Advance",
          product_type: 1,
          price: 30,
          description: "Lorem Ipsum is simply dummy text",
          imgUrl: "http://lorempixel.com/400/200/"
        },
        {
          _id: uuid(),
          name: "C sharp Basic",
          product_type: 1,
          price: 25,
          description: "Lorem Ipsum is simply dummy text",
          imgUrl: "http://lorempixel.com/400/200/"
        }
      ]
    };
  }

  render() {
    const { products } = this.state;
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

export default Product;
