import React from "react";
// import cardpic1 from "../images/card-pic1.png";
// import star from "../images/star-icon.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card-div">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="card--img"
        src={`../images/${props.coverImg}`}
        alt="card"
      />
      <div className="card--stats">
        <img
          className="star-icon"
          src={process.env.PUBLIC_URL + "/images/star-icon.png"}
          alt="star-icon"
        />
        <span className="rating">{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount})</span>
        <span className="gray">{props.location}</span>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / Person
        </p>
      </div>
    </div>
  );
}
