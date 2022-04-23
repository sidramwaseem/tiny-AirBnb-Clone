import React from "react";
import Navbar from "./components/Navabr.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./data.js";

export default function App() {
  const cardElement = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card-section">{cardElement}</section>
    </div>
  );
}
