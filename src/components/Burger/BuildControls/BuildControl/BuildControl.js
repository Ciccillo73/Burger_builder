import React from "react";
import buildControls from "../BuildControls";

const buildControl = (props) => (
  <div>
    <div>{props.ingredients}</div>
    <button>Less</button>
    <button>More</button>
  </div>
);

export default buildControls;
