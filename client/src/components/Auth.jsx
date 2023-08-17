import React, { useState } from "react";
import LoginForm from "./Login";
import Signup from "./Signup";

function Auth() {
  return (
    <div>
      <Signup />
      <LoginForm />
    </div>
  );
}

export default Auth;
