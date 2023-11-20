import { createBrowserRouter } from "react-router-dom";
import SignUp2 from "./SignUp2";
import Loginpage2 from "./LoginPage2";
import Front from "./Front";
const router = createBrowserRouter([
  { path: "/", element: <Front /> },
  { path: "/signup", element: <SignUp2 /> },
  { path: "/login", element: <Loginpage2 /> },
]);
export default router;