import React from "react";
function Products() {
  const containerStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // replace with the actual path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={containerStyle}>
      <h1 style={{ color: "purple" }}>PRODUCTS</h1>
      <h4> * Toys</h4>
      <h4> * Doll</h4>
      <h4> * Watch</h4>
      <h4> * Chain</h4>
      <h4> * Ring</h4>
      <h4> * Dress</h4>
    </div>
  );
}
export default Products;