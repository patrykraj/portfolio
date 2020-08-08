import React from "react";

import Button from "../UI/Button";

const NavigationItem = (props) => {
  return (
    <li>
      <Button
        href={props.to}
        click={
          props.section
            ? (_) =>
                props.section.current.scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                })
            : null
        }
      >
        {props.name}
      </Button>
    </li>
  );
};

export default NavigationItem;
