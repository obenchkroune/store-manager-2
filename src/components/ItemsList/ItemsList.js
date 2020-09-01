import React from "react";
import { Table } from "react-bootstrap";
import { useStateValue } from "../../GlobalContext";
import ProductItem from "../ProductItem/ProductItem";

function ItemsList() {
  const [state] = useStateValue();

  return (
    <div className="itemList my-2">
      <Table responsive striped hover bordered>
        <thead>
          <tr>
            <td>#</td>
            <td style={{ width: "100%" }}>Name</td>
            <td>Quantity</td>
            <td>Buy$</td>
            <td>Sell$</td>
            <td>Profit</td>
            <td>EDIT</td>
            <td>DELETE</td>
          </tr>
        </thead>
        <tbody>
          {state.map((product, index) => (
            <ProductItem key={product.id} product={product} index={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ItemsList;
