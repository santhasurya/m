

import React from "react";
import { Button, Container, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Front = () => {
  const navigate = useNavigate();

  function handleSignUp() {
    // your logic here;
    navigate("/signup"); // programatic navigation
  }

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="xs"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          color: "white",
        }}
      >
        <Paper
          elevation={10}
          component="div"
          style={{ padding: "40px", width: "100%" }}
        >
          <Typography component="h1" variant="h4" align="center">
            WELCOME TO <br></br>FAV SHOP
          </Typography>
          <Link to="/login">
            {/* Direct navigation */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
            >
              Login
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignUp}
            style={{ marginTop: "8px" }}
          >
            Sign Up
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Front;