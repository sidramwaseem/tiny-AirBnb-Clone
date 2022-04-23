import React from "react";
// import logo from "/images/logo.png";

export default function Navbar() {
  return (
    <section className="navbar-section">
      <img
        className="logo-img"
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="logo"
      />
    </section>
  );
}
