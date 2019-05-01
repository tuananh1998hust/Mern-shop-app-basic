import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="navbar" className="mb-5">
        <Navbar expand="sm">
          <Container>
            <Link className="nav-logo" to="/">
              Vijamach
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/cart">
                    <i className="fas fa-shopping-cart" /> (
                    {this.props.product.cart.length})
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps)(AppNavbar);
