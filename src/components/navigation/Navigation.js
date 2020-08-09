import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getRefs } from "../../store/actions";

import NavigationItem from "./NavigationItem";
import Button from "../UI/Button";

const Navigation = ({ loaded, sections }) => {
  const { projects, skills, about, contact } = sections;

  useEffect(() => {
    let scrolled = 0;
    window.addEventListener("scroll", () => {
      const move = window.scrollY - scrolled;
      scrolled = window.scrollY;

      if (!loaded) return;

      if (move > 20 && scrolled > 200) {
        document.querySelector("nav div.active").classList.add("scroll");
      } else if (move < 0) {
        document.querySelector("nav div.active").classList.remove("scroll");
      }
    });
  }, [loaded]);

  const links = [
    { to: "/", name: "projects", section: projects },
    { to: "/", name: "skills", section: skills },
    { to: "/", name: "about", section: about },
    { to: "/", name: "contact", section: contact },
  ];

  return (
    <Nav className={loaded ? "active" : null}>
      <Button
        click={() =>
          window.scrollTo({
            behavior: "smooth",
            top: 0,
          })
        }
      >
        KRAYESKY
      </Button>
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
    </Nav>
  );
};

export default connect(getRefs, null)(Navigation);

const Nav = styled.div`
  opacity: 0;
  background: linear-gradient(rgb(18, 11, 19) 85%, transparent);
  transform: translateY(-20px);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 60px;
  width: 100%;
  padding: 0 5%;
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1) 1s;

  &.active {
    opacity: 1;
    transform: translateY(0);

    &.scroll {
      transition: all 0.3s cubic-bezier(0.4, 0, 1, 1) 0.2s;
      transform: translateY(-100%);
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;
