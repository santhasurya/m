// // Cart.js
// import React from "react";

// const Cart = ({ cartItems, removeFromCart }) => {
//   return (
//     <div>
//       <h3>Shopping Cart</h3>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.name}>
//             {item.name} - Quantity: {item.quantity}
//             <button onClick={() => removeFromCart(item.name)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;



// Dress.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dress = ({ id, name, imageUrl }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl} alt={`${name} Dress`} style={{ width: '200px', height: '300px' }} />
      <Link to={`/dress/${id}`}>View Details</Link>
    </div>
  );
};

export default Dress;