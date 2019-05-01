import React from "react";
import { Container } from "reactstrap";
import { Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

// Components
import AppNavbar from "./components/AppNavbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Container>
    </div>
  );
}

export default App;
