import React from "react";
import { useNavigationContext } from "./NavigationContext";
import NavComponent from "./NavComponent";

export default function Navbar() {
  const { navigate, cookieFunction, cookie } = useNavigationContext();

  const handleLogout = () => {
    cookieFunction("token");
    navigate("/login");
  };
  // console.log(`hello ${navigate}`);
  return <NavComponent handleLogout={handleLogout} />;
}
