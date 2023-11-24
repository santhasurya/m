// import logo from './logo.svg';
// import './App.css';
// import 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
import React from 'react';
import Header from "./components/Header";
//import logo from "./logo.svg";
import "./App.css";

function App() {
  return <Header />;
}

export default App;


// App.js

// import React, { useState } from 'react';
// import Gift from '.components/Gift';
// import Cart from '.components/Cart';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (gift) => {
//     setCartItems([...cartItems, gift]);
//   };

//   const gifts = [
//     { id: 1, name: 'Gift 1', description: 'Description 1', price: 20 },
//     { id: 2, name: 'Gift 2', description: 'Description 2', price: 30 },
//     // Add more gift items as needed
//   ];

//   return (
//     <div>
//       <h1>Gift Portal</h1>

//       <div>
//         {gifts.map((gift) => (
//           <Gift key={gift.id} gift={gift} onAddToCart={handleAddToCart} />
//         ))}
//       </div>

//       <Cart cartItems={cartItems} />
//     </div>
//   );
// };

// export default App;
