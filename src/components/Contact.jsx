import React from "react";

const Contact = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/polka-dots-paper-bags-with-christmas-gift-boxes-isolated-dark-background_181624-23378.jpg?w=1060&t=st=1700492221~exp=1700492821~hmac=524baab57e1b3ba10eb9027bb45b9c6e668d5205d87488b5caba10c8c2fc226a')", // replace with the actual path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>CONTACT</h1>
      <h4>
        CONTACT: 9123456780
        <br />
        E-MAIL: favshop@gmail.com
        <br />
        INSTAGRAM: https://www.instagram.com/
        <br />
        FACEBOOK: https://www.facebook.com/
      </h4>
    </div>
  );
};

export default Contact;