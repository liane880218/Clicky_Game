import React from "react";
import "./style.css";

function CaracterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} className="img-thumbnail" onClick={() => props.handleClick(props.name)}/>
      </div>
    </div>
  );
}

export default CaracterCard;
