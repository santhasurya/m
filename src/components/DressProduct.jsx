import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SizeSelector from './Sizeselector';
import Dress from './Cart';

const DressProduct = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    console.log(`Product added to cart. Size: ${selectedSize}`);
    // Add additional logic for handling the addToCart action
  };

  const dresses = [
    { id: 1, name: 'Summer Dress', imageUrl: 'https://example.com/summer-dress.jpg' },
    { id: 2, name: 'Elegant Dress', imageUrl: 'https://example.com/elegant-dress.jpg' },
    // Add more dresses as needed
  ];

  return (
    <div>
      <h2>Dress Product</h2>

      {/* List of Dress components */}
      {dresses.map((dress) => (
        <Dress key={dress.id} id={dress.id} name={dress.name} imageUrl={dress.imageUrl} />
      ))}

      {/* Size Selector */}
      <SizeSelector sizes={sizes} selectedSize={selectedSize} onSelectSize={handleSelectSize} />

      {/* Add to cart button */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DressProduct;