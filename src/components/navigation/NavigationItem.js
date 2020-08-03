import React from "react";

const NavigationItem = (props) => {
  return (
    <li>
      <button href={props.to}>{props.name}</button>
    </li>
  );
};

export default NavigationItem;
