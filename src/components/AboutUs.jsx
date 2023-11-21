import React from "react";

const AboutUs = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/flat-lay-beautiful-birthday-party-arrangement-with-copy-space_23-2148276582.jpg?w=996&t=st=1700489564~exp=1700490164~hmac=4b56f90854ea57630f549f5f7f69a49a26e3162df002d334cf01c0d1302aa061')",
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
      <h1 style={{ color: "purple" }}>ABOUT US</h1>
      <p>
        <h3>
          * Our motive is to infuse joy into every occasion through personalized
          gifts that capture the essence of the recipient.
          <br /> * We believe in transforming gift-giving into a meaningful
          experience, where each item is a heartfelt expression of care and
          thoughtfulness.
          <br />
          * Join us on a journey where every present becomes a cherished memory,
          and every celebration is adorned with the touch of personalization.
          <br />* Welcome to a world where the joy of giving knows no bounds.
        </h3>
      </p>
    </div>
  );
};

export default AboutUs;