
import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/empty-blackboard-surrounded-by-shopping-bags_23-2148288236.jpg?w=900&t=st=1700502157~exp=1700502757~hmac=4830d0de770d44a9223171bbc509adc5cac019b0ab7bd77f1beeb8d15d16c7a8 ')", // replace with the actual path to your image
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
      <Box sx={{ my: 10, ml: 10 }}>
        <Typography variant="h4">Contact my Gift Shop</Typography>
        <Box sx={{ m: 3, width: "600px" }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                    18000-00-0000 (toll-free)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                    help@mygiftshop.com (toll-free)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} />
                    123456790 (toll-free)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;