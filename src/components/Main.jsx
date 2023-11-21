// import React from "react";

// const Main = () => {
//   return (
//     <div>
//       <b>
//         <h1 style={{ color: "purple" }}>
//           <center>"FAV SHOP"</center>
//         </h1>
//       </b>
//       <br></br>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//       <h3 style={{ color: "midnightblue" }}>
//         <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
//       </h3>
//     </div>
//   );
// };

// export default Main;

import React from "react";
const Main = () => {
  const mainStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1464699855782-09d5f61999ac?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
  };
  return (
    <div style={mainStyle}>
      <h1 style={{ color: "white" }}>FAV SHOP</h1>
      <h2 style={{ color: "gold" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h2>
      <br></br>
      <h5>
        "Welcome to FavShop, where celebrations come alive <br />
        through personalized treasures.
        <br />
        Our curated collection offers bespoke gifts <br />
        for every occasion.
        <br /> With a commitment to quality, <br />
        our items are crafted to perfection.
        <br />
        What sets us apart is the power of personalization <br />
        add a unique touch to create unforgettable moments.
        <br />
        We pride ourselves on prompt delivery, <br />
        ensuring your gift arrives right on time.
        <br />
        Start gifting uniquely today at FavShop, <br />
        where thoughtful moments are made extraordinary!"
      </h5>
    </div>
  );
};

export default Main;