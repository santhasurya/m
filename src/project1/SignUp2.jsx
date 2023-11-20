// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import TextField from "@mui/material/TextField";

// function SignUp2() {
//   const [open, setOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignUpClick = () => {
//     // Perform signup logic here
//     // For simplicity, just closing the dialog in this example
//     handleClose();
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setUsername("");
//     setPassword("");
//     setConfirmPassword("");
//   };

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleOpen} data-testid="signup">
//         Sign Up
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Sign Up</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="username"
//             label="Username"
//             type="text"
//             fullWidth
//             value={username}
//             onChange={handleUsernameChange}
//             data-testid="signup-username"
//           />
//           <TextField
//             margin="dense"
//             id="password"
//             label="Password"
//             type="password"
//             fullWidth
//             value={password}
//             onChange={handlePasswordChange}
//             data-testid="signup-password"
//           />
//           <TextField
//             margin="dense"
//             id="confirmPassword"
//             label="Confirm Password"
//             type="password"
//             fullWidth
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             data-testid="confirm-password"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} data-testid="cancel">
//             Cancel
//           </Button>
//           <Button onClick={handleSignUpClick} data-testid="signup-submit">
//             Sign Up
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

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
    //navigate("login");
  };

  return (
    <Container
      maxWidth="100%"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        //backgroundColor: "teal",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/flat-lay-brown-eco-paper-bag-christmas-gift-boxes-with-copy-space_181624-23524.jpg')", // Replace with your image URL
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