import React from "react";
import "./Title.css";

const Title = props => (
  <div className="header">
    <div className="title">{props.children}
    </div>
    <div className="scores">
    Score: {props.score}
    High Score: {props.highscore}
    </div>
  </div>
);

export default Title;