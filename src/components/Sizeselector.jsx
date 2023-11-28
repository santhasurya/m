import React from 'react';

const SizeSelector = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div>
      <label>Select Size:</label>
      <select value={selectedSize} onChange={(e) => onSelectSize(e.target.value)}>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
