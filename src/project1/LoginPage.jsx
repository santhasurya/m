/*import React, { useState } from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  return (
    <Container
      maxWidth="100%"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "teal",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/set-christmas-presents-with-golden-ribbon-globes_23-2148343314.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=ais')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={8}
        style={{ padding: "30px", width: "600px", height: "300px" }}
      >
        <Typography variant="h6" align="center">
          LOGIN
        </Typography>

        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  return (
    <Container
      maxWidth="100%"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "teal",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/set-christmas-presents-with-golden-ribbon-globes_23-2148343314.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=ais')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={8}
        style={{ padding: "30px", width: "600px", height: "300px" }}
      >
        <Typography variant="h6" align="center">
          LOGIN
        </Typography>

        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </Paper>
    </Container>
  );
};

export default LoginPage;