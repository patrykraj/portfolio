import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem";

const SideBar = ({ links, showNav, setShowNav }) => {
  return (
    <SideList className={showNav ? null : "hide"}>
      {links.map((link) => (
        <NavigationItem
          key={link.name}
          to={link.to}
          name={link.name}
          section={link.section}
          handleNav={() => {
            setShowNav(!showNav);
          }}
        />
      ))}
    </SideList>
  );
};

export default SideBar;

const SideList = styled.div`
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  height: calc(100vh - 60px);
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-flow: column;
  background: rgb(18, 11, 19);
  transition: all 0.6s;

  &.hide {
    transform: translateX(calc(-110%));
  }

  li {
    padding: 10px 0;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
