import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useStateValue } from "../../GlobalContext";

function EditProduct({ show, productDetails, close }) {
  const [input, setInput] = useState(productDetails);
  const [, dispatch] = useStateValue();

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "EDIT_PRODUCT",
      payload: input,
    });
    close();
  }

  return (
    <div>
      <Modal show={show} onHide={() => close()}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <h2>Add New Product</h2>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Product Name:</Form.Label>
              <Form.Control
                autoComplete="off"
                name="name"
                onChange={handleChange}
                value={input.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                autoComplete="off"
                name="quantity"
                type="number"
                onChange={handleChange}
                value={input.quantity}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Buy Price:</Form.Label>
              <Form.Control
                autoComplete="off"
                name="buyPrice"
                type="number"
                onChange={handleChange}
                value={input.buyPrice}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Selling Price:</Form.Label>
              <Form.Control
                autoComplete="off"
                name="sellPrice"
                type="number"
                onChange={handleChange}
                value={input.sellPrice}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => close()} variant="danger">
              Close
            </Button>
            <Button type="submit" variant="success">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EditProduct;
