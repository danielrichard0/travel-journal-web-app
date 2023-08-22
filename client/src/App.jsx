import React from "react";
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";

import { Login, Home, Signup } from "./pages";

import data from "./data";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import UploadPost from "./components/UploadPost";

export default function App() {
  return (
    <div>
      {/* <Navbar navigate={navigate} />
      <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<UploadPost />} />
      </Routes>
      {/* {cards} */}
    </div>
  );
}
