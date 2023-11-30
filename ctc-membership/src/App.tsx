import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignInSide from "./Pages/SignIn";
import ErrorPage from "./Pages/Error-page";
import Contact from "./Pages/ContactUs";
import RegistrationForm from "./Pages/Registration";
import Header from "./Header";
import Footer from "./Footer";
import { Toolbar } from "@mui/material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignInSide />} errorElement={<ErrorPage />} />
      {/* <Route path="/signin" element={<SignInSide />} /> */}
      <Route path="/signUp" element={<SignUp />} errorElement={<ErrorPage />} />
      <Route
        path="/contactus"
        element={<Contact />}
        errorElement={<ErrorPage />}
      />
      <Route path="/registrationform" element={<RegistrationForm />} errorElement={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <Header />
      <Toolbar />
      <RouterProvider router={router} /> 
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Footer />
    </div>
  );
}

export default App;
