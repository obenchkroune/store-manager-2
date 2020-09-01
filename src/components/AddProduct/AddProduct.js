import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useStateValue } from "../../GlobalContext";

function AddProduct() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState({});

  const [, dispatch] = useStateValue();

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD_PRODUCT", payload: input });
    handleClose();
  }

  return (
    <div className="addProduct">
      <Button onClick={() => setOpen(true)} variant="success">
        Add Product
      </Button>

      {/* Modal */}
      <Modal show={open} onHide={handleClose}>
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                autoComplete="off"
                name="quantity"
                type="number"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Buy Price:</Form.Label>
              <Form.Control
                autoComplete="off"
                name="buyPrice"
                type="number"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Selling Price:</Form.Label>
              <Form.Control
                autoComplete="off"
                name="sellPrice"
                type="number"
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="danger">
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

export default AddProduct;
