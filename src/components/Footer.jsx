
// import React from "react";
// import "./Footer.css";
// import { Typography, Box } from "@mui/material";
// function Footer() {
//   return (
//     <div className="main-footer" id="main">
//       <hr />
//       <Typography sx={{ marginTop: "12px" }}>
//         <div className="footer-content">
//           <div className="footer-section">
//             <h4>FAV SHOP</h4>
//             <ul>
//               <li>342-420-6969</li>
//               <li>Coimbatore, Tamil Nadu</li>
//               <li>123 Kuniyamuthur</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>HELP</h4>
//             <ul>
//               <li>How to Shop?</li>
//               <li>FAQ about Shopping</li>
//               <li>Search More</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>WELL ANOTHER COLUMN</h4>
//             <ul>
//               <li>How to Shop?</li>
//               <li>FAQ about Shopping</li>
//               <li>Search More</li>
//             </ul>
//           </div>
//         </div>
//         <div>
//           <center>
//             &copy;{new Date().getFullYear()} FAV SHOP | All rights reserved |
//             Terms Of Service | Privacy
//           </center>
//         </div>
//       </Typography>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';
import { Box, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center' , 
    bgcolor:'#1A1A19' ,
     color:'white' , p:3}} >
        <Box sx={{my: 3, "& svg":{
            fontSize:"60px",
            cursor:'pointer',
            mr: 2,
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400px',
        }
    }}>
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <FacebookIcon />
            <YouTubeIcon />
        </Box>
        <Typography variant='h5' sx={{"@media (mix-width:600px)":{
            fontSize: "1rem",
        },
    }}>
            All Right Reserved &copy;  Techifo YT
        </Typography>
    </Box>
    </>

  );
};

export default Footer;