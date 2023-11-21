
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
//         <p>
//           &copy;{new Date().getFullYear()} FAV SHOP | All rights reserved |
//           Terms Of Service | Privacy
//         </p>
//       </Typography>
//     </div>
//   );
// }

// export default Footer;
// import React from "react";
// import "./Footer.css";
// import { Typography,Box } from "@mui/material";

// const footerStyle = {
//   backgroundImage:
//     "url('https://img.freepik.com/free-photo/present-notebook-near-macaroons_23-2147931569.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais')",
//   backgroundSize: "cover", // Adjust as needed
//   backgroundPosition: "center", // Adjust as needed
//   backgroundRepeat: "no-repeat",
//   color: "white", // Text color on top of the background image
//   textAlign: "center", // Center-align text
// };
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
import React from "react";
import "./Footer.css";
import { Typography, Box } from "@mui/material";
function Footer() {
  return (
    <div className="main-footer" id="main">
      <hr />
      <Typography sx={{ marginTop: "12px" }}>
        <div className="footer-content">
          <div className="footer-section">
            <h4>FAV SHOP</h4>
            <ul>
              <li>342-420-6969</li>
              <li>Coimbatore, Tamil Nadu</li>
              <li>123 Kuniyamuthur</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>HELP</h4>
            <ul>
              <li>How to Shop?</li>
              <li>FAQ about Shopping</li>
              <li>Search More</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>WELL ANOTHER COLUMN</h4>
            <ul>
              <li>How to Shop?</li>
              <li>FAQ about Shopping</li>
              <li>Search More</li>
            </ul>
          </div>
        </div>
        <div>
          <center>
            &copy;{new Date().getFullYear()} FAV SHOP | All rights reserved |
            Terms Of Service | Privacy
          </center>
        </div>
      </Typography>
    </div>
  );
}

export default Footer;