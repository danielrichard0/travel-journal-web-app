import React from "react";
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import data from "./data";
import "./App.css";
import Home from "./components/Home";

export default function App() {
  const cards = data.map((item) => {
    return <TravelCard key={item.id} item={item} />;
  });
  console.log(cards);
  return (
    <div>
      <Navbar />
      <Home />
      {cards}
    </div>
  );
}
