import React from "react";
import LoginForm from "./Modal";
import { Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="web-title">
        <img
          className="navbar--logo"
          src="https://dkv.ittelkom-pwt.ac.id/wp-content/uploads/2020/11/logo-website-world-wide-web-icon-icons-and-png-backgrounds-18-1.png"
          alt=""
        />
        <h1>my-travel-journal.web</h1>
      </div>

      <div className="navbar--auth">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
        </Routes>
        <h2>Signup</h2>
        <h2>Make New</h2>
      </div>
    </nav>
  );
}
