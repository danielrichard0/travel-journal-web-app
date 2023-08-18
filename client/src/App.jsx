import React from "react";
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import data from "./data";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import { useNavigate } from "react-router-dom";

export default function App() {
  const cards = data.map((item) => {
    return <TravelCard key={item.id} item={item} />;
  });

  const navigate = useNavigate();
  return (
    <div>
      <Navbar navigate={navigate} />
      <Home />
      <Routes>
        <Route path="/signup" element={SignUp} />
      </Routes>
      {cards}
    </div>
  );
}
