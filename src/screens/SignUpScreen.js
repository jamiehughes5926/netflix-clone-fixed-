import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign in</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign IN</button>

        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span className="signupScreen__link"> Sign Up now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;