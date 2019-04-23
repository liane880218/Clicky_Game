import React from "react";
import "./style.css";

function Score(props) {
  return (
  <div className="score">
    <h2>Score: {props.score}    |    Top Score: {props.topscore}  {props.message}</h2>
  </div>
  );
}

export default Score;