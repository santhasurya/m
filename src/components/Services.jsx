import React from "react";

const Services = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/front-view-little-presents_140725-130186.jpg?w=1060&t=st=1700492295~exp=1700492895~hmac=a0f6435e26990a268e58e07371c1895f6aaa671fc130504da74c42c5b8f40376')", // replace with the actual path to your image
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
      <h1 style={{ color: "olivedrab" }}>SERVICES</h1>
      <b>User-Friendly Interface:</b> Ensure easy navigation and a secure
      checkout process. <br />
      <br />
      <b>Options:</b> Offer engraving, color choices, and interactive
      customization. <br />
      <br />
      <b>Gift Finder Tool: </b>Simplify decision-making with a feature based on
      recipient, occasion, and interests. <br />
      <br />
      <b>Responsive Design:</b> Optimize the website for seamless use on various
      devices.
      <br />
      <br />
      <b>Unique Product Descriptions:</b> Highlight sentimental value and
      customization options.
    </div>
  );
};

export default Services;