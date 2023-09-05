//import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SignIn from "./Pages/Login";
import AppHeaderBar from "./components/AppMenuBar";
//import SignUp from "./Pages/SignUp";
// import CTCTitle from "./components/CTCTitle";
//import OnboardingForm from "./components/OnboardingForm";

function App() {
  return (
    <div>
      {/* <CTCTitle pageTitle={"Chicago Tamil Catholics"} titleSize={"h1"} />
      <CTCTitle pageTitle={"Registration"} titleSize={"h4"} /> */}
      {/* <OnboardingForm /> */}
      {/* <AppHeaderBar /> */}
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
