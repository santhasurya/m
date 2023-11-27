// import React, { useEffect, useState } from 'react';
// import './Main.css';

// function Cartitems() {
  
//   const [cartItems, setCartItems] = useState([]);

  
//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedCartItems);
//   }, []);

  
//   const handleRemoveFromCart = (productName) => {
//     const updatedCartItems = cartItems.filter((item) => item.name !== productName);
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className='products-grid'>
//           {cartItems.map((product, index) => (
//             <div key={index} className="product-container">
//               <img
//                 src={product.name.image}
//                 alt={`Product ${product.name.id}`}
//                 className="product-image"
//               />
//               <div>
//                 <p>{product.name.title}</p>
//                 <p>{product.name.price}</p>
//                 <button onClick={() => handleRemoveFromCart(product.name)}>Remove from Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cartitems;
import React, { useEffect, useState } from 'react';
import './Main.css';

function Cartitems() {
  
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  
  const handleRemoveFromCart = (productName) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== productName);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='products-grid'>
          {cartItems.map((product, index) => (
            <div key={index} className="product-container">
              <img
                src={product.name.image}
                alt={`Product ${product.name.id}`}
                className="product-image"
              />
              <div>
                <p>{product.name.title}</p>
                <p>{product.name.price}</p>
                <button onClick={() => handleRemoveFromCart(product.name)}>Remove from Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cartitems;