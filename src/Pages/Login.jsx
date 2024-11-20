import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../Router/Paths";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate storing the authToken in localStorage after 5 seconds
    const timer = setTimeout(() => {
      localStorage.setItem("authToken", "Auth123123xyz");
      console.log("AuthToken saved to localStorage!");
      navigate(PATHS.HOME);
    }, 5000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  });

  return <h1>Login</h1>;
}

export default Login;
