// import React, { useState } from "react";
// import { Container, Typography, Paper, TextField, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Loginpage2 = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     console.log(`Logging in with email: ${email} and password: ${password}`);
//     navigate("/home");
//   };

//   return (
//     <Container
//       maxWidth="100%"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "teal",
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Paper
//         elevation={8}
//         style={{ padding: "30px", width: "600px", height: "300px" }}
//       >
//         <Typography variant="h6" align="center">
//           LOGIN
//         </Typography>

//         <form>
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <Button
//             variant="contained"
//             color="success"
//             fullWidth
//             style={{ marginTop: "20px" }}
//             onClick={handleLogin}
//           >
//             Login
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// };
// export default Loginpage2;

import React, { useState } from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Loginpage2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
    navigate("/home");
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
          "url('https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
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
export default Loginpage2;