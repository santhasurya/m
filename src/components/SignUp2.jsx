//  import { useState } from "react";
// import { Container, Typography, Paper, TextField, Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";

// const SignUp2 = () => {
//   const navigate = useNavigate(); //  returns a function
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignUp = () => {
//     console.log("Signing up with the following details:");
//     console.log("First Name:", firstName);
//     console.log("Last Name:", lastName);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Confirm Password:", confirmPassword);
//     // navigate("/login");
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
//         //backgroundColor: "teal",
//         backgroundImage:
//           "url('https://img.freepik.com/free-photo/top-view-gifts-with-string-tags_23-2148370124.jpg?t=st=1700475838~exp=1700476438~hmac=8ac05c000006ebdda29172bba98f21221150b098bdb6c8a2a99c9b7833a2db2d ')", // Replace with your image URL
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Paper
//         elevation={8}
//         style={{
//           padding: "20px",
//           width: "700px",
//         }}
//       >
//         <Typography variant="h5" align="center">
//           Sign Up
//         </Typography>

//         <form>
//           <TextField
//             label="First Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <TextField
//             label="Last Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
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
//           <TextField
//             label="Confirm Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />{" "}
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ marginTop: "20px" }}
//             onClick={handleSignUp}
//           >
//             Sign Up
//           </Button>
//           <Typography sx={{ marginTop: "16px" }}>
//             Already a user ? <Link to="/login">Login</Link>
//           </Typography>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default SignUp2;


import { useState } from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp2 = () => {
  const navigate = useNavigate(); //  returns a function

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log("Signing up with the following details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // navigate("/login");
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
        backgroundImage:
          "url('https://img.freepik.com/free-photo/top-view-gifts-with-string-tags_23-2148370124.jpg?t=st=1700475838~exp=1700476438~hmac=8ac05c000006ebdda29172bba98f21221150b098bdb6c8a2a99c9b7833a2db2d ')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={8}
        style={{
          padding: "20px",
          width: "700px",
        }}
      >
        <Typography variant="h5" align="center">
          Sign Up
        </Typography>

        <form>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />{" "}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Typography sx={{ marginTop: "16px" }}>
            Already a user ? <Link to="/login">Login</Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp2;