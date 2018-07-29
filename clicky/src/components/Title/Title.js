import React from "react";
import "./Title.css";

const Title = props => (

  <div className="header">
    <div className="title">{props.children}
    </div>
    <div className="text-center">{props.message}</div>
    <div className="scores">
    <p> Score: {props.score} </p>
    <p> High Score: {props.highScore}</p>
    </div>
  </div>
);

export default Title;