import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../store/user/cartSlice";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!items || items.length === 0) {
    return <p className="text-center mt-5">No items in cart.</p>;
  }

  return (
    <div className="container py-5">
      <h3 className="mb-4">Cart Items</h3>

      <div className="table-responsive">
        <table className="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">Ingredient</th>
              <th scope="col">Quantity</th>
              <th scope="col">Measure</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{item.text}</td>
                <td>{item.quantity ? item.quantity.toFixed(1) : "-"}</td>
                <td>{item.measure || "-"}</td>
                <td>
                  <button
                    className="btn btn-sm" style={{ backgroundColor: "red" , color:"white" }}
                    onClick={() => dispatch(removeCartItem(i))}
                  >
                    Clear
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
