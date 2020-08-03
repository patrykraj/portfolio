import React from "react";

import Button from "../UI/Button";

const NavigationItem = (props) => {
  return (
    <li>
      <Button href={props.to}>{props.name}</Button>
    </li>
  );
};

export default NavigationItem;
