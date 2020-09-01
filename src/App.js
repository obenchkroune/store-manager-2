import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";
import { Container } from "react-bootstrap";
import ItemsList from "./components/ItemsList/ItemsList";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AddProduct />
        <ItemsList />
      </Container>
    </div>
  );
}

export default App;
