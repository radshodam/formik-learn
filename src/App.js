import React from "react";
import Basic from "./components/one/basic";
import Basic2 from "./components/two/basic2";
import SignupForm1 from "./components/three/SimpleSignupForm";
import SignupForm from "./components/four/SignupForm";
import SignupFormValidate from "./components/five/Formvalidate";
import SignupFormValidate2 from "./components/six/Formvalidate";
import SignupFormValidate3 from "./components/seven/signupValidateTouch";
import SignupFormValidate4 from "./components/eight/signupValidateTouch";

function App() {
  return (
    <>
      <Basic />
      <Basic2 />
      <SignupForm1 />
      <SignupForm />
      <SignupFormValidate />
      <SignupFormValidate2 />
      <SignupFormValidate3 />
      <SignupFormValidate4 />
    </>
  );
}

export default App;
