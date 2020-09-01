import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useStateValue } from "../../GlobalContext";
import EditProduct from "../EditProduct/EditProduct";

function ProductItem({ product, index }) {
  const [, dispatch] = useStateValue();
  const [showModal, setShowModal] = useState(false);

  // delete product
  function handleDelete(id) {
    if (window.confirm(`Are u sure u want to Delete "${product.name}"`)) {
      dispatch({
        type: "DELETE_PRODUCT",
        payload: { id },
      });
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <tr key={product.id}>
      <td>{index}</td>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>
        {product.buyPrice}
        <strong>DH</strong>
      </td>
      <td>
        {product.sellPrice}
        <strong>DH</strong>
      </td>
      <td>
        {product.sellPrice - product.buyPrice}
        <strong>DH</strong>
      </td>
      <td>
        <Button variant="info" onClick={() => setShowModal(true)}>
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => handleDelete(product.id)}>
          Delete
        </Button>
        <EditProduct
          close={closeModal}
          productDetails={product}
          show={showModal}
        />
      </td>
    </tr>
  );
}

export default ProductItem;
