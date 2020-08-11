import React from "react";

import styled from "styled-components";

import NavigationItem from "./NavigationItem";

const NavBar = ({ links }) => {
  return (
    <NavList>
      {links.map((link) => (
        <NavigationItem
          key={link.name}
          to={link.to}
          name={link.name}
          section={link.section}
        />
      ))}
    </NavList>
  );
};

export default NavBar;

const NavList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 800px) {
    display: none;
  }
`;
