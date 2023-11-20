/*import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

function SignUp() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpClick = () => {
    // Perform signup logic here
    // For simplicity, just closing the dialog in this example
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} data-testid="signup">
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            data-testid="signup-username"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            data-testid="signup-password"
          />
          <TextField
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            data-testid="confirm-password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleSignUpClick} data-testid="signup-submit">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignUp;*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

function SignUp() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpClick = () => {
    // Perform signup logic here
    // For simplicity, just closing the dialog in this example
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} data-testid="signup">
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            data-testid="signup-username"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            data-testid="signup-password"
          />
          <TextField
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            data-testid="confirm-password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleSignUpClick} data-testid="signup-submit">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;