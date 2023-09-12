import "./App.css";
import SignUp from "./Pages/SignUp_S1";
import SignInSide from "./Pages/MuiSignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/Error-page";
import Contact from "./Pages/ContactUs";
//import SignUp from "./Pages/SignUp";
// import CTCTitle from "./components/CTCTitle";
//import OnboardingForm from "./components/OnboardingForm";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInSide />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contactus/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contactus/:contactId",
    element: <Contact />,
  },
]);

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
