import React from "react";
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import data from "./data";
import "./App.css";

export default function App() {
  const cards = data.map((item) => {
    return <TravelCard key={item.id} item={item} />;
  });
  console.log(cards);
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
