import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class CheckOut extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    phone: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    const checkOut = {
      name,
      email,
      phone
    };

    console.log(checkOut);

    // Close Modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Check Out
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Check Out</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={this.onChange}
                />

                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="name"
                  id="name"
                  placeholder="Email"
                  onChange={this.onChange}
                />

                <Label for="phone">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }}>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CheckOut;
