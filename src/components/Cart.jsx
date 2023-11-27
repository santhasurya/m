// Cart.js
import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h3>Shopping Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;