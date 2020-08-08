import React from "react";

import Button from "../UI/Button";

const NavigationItem = ({ to, name, section }) => {
  return (
    <li>
      <Button
        href={to}
        click={
          section
            ? (_) =>
                section.current.scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                })
            : null
        }
      >
        {name}
      </Button>
    </li>
  );
};

export default NavigationItem;
