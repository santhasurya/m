// import React, { useState } from "react";
// import {
//   AppBar,
//   Button,
//   Tab,
//   Tabs,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [value, setValue] = useState(0); // Initialize value state
//   const theme = useTheme();
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

//   // Map the pages to their corresponding index in the Tabs
//   const pageToTabIndex = {
//     Products: 0,
//     Services: 1,
//     AboutUs: 2,
//     ContactUs: 3,
//   };

//   // Map the index in Tabs to the corresponding page
//   const tabIndexToPage = {
//     0: "Products",
//     1: "Services",
//     2: "AboutUs",
//     3: "ContactUs",
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "#063970" }}>
//         <Toolbar>
//           <img src="/logo192.png" alt="" width="50px" />
//           {isMatch ? (
//             <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
//               Shoppee
//             </Typography>
//           ) : (
//             <>
//               <Tabs
//                 sx={{ marginLeft: "auto" }}
//                 indicatorColor="secondary"
//                 textColor="inherit"
//                 value={value}
//                 onChange={handleChange}
//               >
//                 <Tab label="Products" />
//                 <Tab label="Services" />
//                 <Tab label="About Us" />
//                 <Tab label="Contact" />
//               </Tabs>
//               <Link to="/login">
//                 <Button sx={{ marginLeft: "auto" }} variant="contained">
//                   Login
//                 </Button>
//               </Link>
//               <Link to="/signup">
//                 <Button sx={{ marginLeft: "10px" }} variant="contained">
//                   SignUp
//                 </Button>
//               </Link>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//       {!isMatch && (
//         /* Render content based on the selected page */
//         <div style={{ padding: "20px" }}>
//           <Typography variant="h4">
//             {`Content for ${tabIndexToPage[value]} page`}
//           </Typography>
//           {/* Add your page-specific content here */}
//         </div>
//       )}
//     </React.Fragment>
//   );
// };
// export default Header;

import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const pageToTabIndex = {
    Products: 0,
    Services: 1,
    AboutUs: 2,
    ContactUs: 3,
  };

  const tabIndexToPage = {
    0: "Products",
    1: "Services",
    2: "AboutUs",
    3: "ContactUs",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#F5F5F5" }}>
        <Toolbar>
          <img src="/logo192.png" alt="" width="50px" />
          {isMatch ? (
            <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
              FAV SHOP
            </Typography>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={handleChange}
              >
                <Link to="/products">
                  <Tab label="Products" />
                </Link>
                <Link to="/services">
                  <Tab label="Services" />
                </Link>
                <Link to="/aboutus">
                  <Tab label="About Us" />
                </Link>
                <Link to="/contact">
                  <Tab label="Contact" />
                </Link>
              </Tabs>
              <Link to="/login">
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button sx={{ marginLeft: "10px" }} variant="contained">
                  SignUp
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      {!isMatch && (
        <div style={{ padding: "20px" }}>
          <Typography variant="h4">
            {`Content for ${tabIndexToPage[value]} page`}
          </Typography>
        </div>
      )}
    </React.Fragment>
  );
};
export default Header;