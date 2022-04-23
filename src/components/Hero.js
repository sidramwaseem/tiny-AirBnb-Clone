import React from "react";
// import gridImage from "../images/image-group.png";

export default function Hero() {
  return (
    <div className="hero-section">
      <figure className="gridImage-container">
        <img
          src={process.env.PUBLIC_URL + "/images/image-group.png"}
          alt="gridImage"
          className="grid-image"
        />
      </figure>
      <div className="text-container">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
