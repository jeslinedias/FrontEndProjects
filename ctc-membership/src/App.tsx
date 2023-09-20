import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SignUp from "./Pages/SignUp_S1";
import SignInSide from "./Pages/MuiSignIn";
import ErrorPage from "./Pages/Error-page";
import Contact from "./Pages/ContactUs";
//import SignUp from "./Pages/SignUp";
// import CTCTitle from "./components/CTCTitle";
//import OnboardingForm from "./components/OnboardingForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignInSide />} />
      {/* <Route path="/signin" element={<SignInSide />} /> */}
      <Route path="/signUp" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <div>
        {/* <CTCTitle pageTitle={"Chicago Tamil Catholics"} titleSize={"h1"} />
      <CTCTitle pageTitle={"Registration"} titleSize={"h4"} /> */}
        {/* <OnboardingForm /> */}
        {/* <AppHeaderBar /> */}
        {/* <SignIn />
        <SignUp /> */}
        {/* <SignInSide /> */}
      </div>
    </>
  );
}

export default App;
