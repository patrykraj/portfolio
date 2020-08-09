import React, { useEffect } from "react";

import styled from "styled-components";

import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Demo } from "../images/demo.svg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Project = ({ id, name, img, links, desc, tech }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slideInLeft = document.querySelectorAll(".slideIn-Left");

    slideInLeft.forEach((wrapper) => {
      gsap.fromTo(
        wrapper,
        { x: "-=100", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 70%",
          },
        }
      );
    });

    const slideInLeftContainer = document.querySelectorAll(
      ".slideIn-LeftContainer"
    );

    slideInLeftContainer.forEach((wrapper) => {
      gsap.fromTo(
        wrapper.children,
        { x: "-=100", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.4,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 70%",
          },
        }
      );
    });

    const slideInRightContainer = document.querySelectorAll(
      ".slideIn-RightContainer"
    );

    slideInRightContainer.forEach((wrapper) => {
      gsap.fromTo(
        wrapper.children,
        { x: "+=100", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.4,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 70%",
          },
        }
      );
    });

    const slideInRight = document.querySelectorAll(".slideIn-Right");

    slideInRight.forEach((wrapper) => {
      gsap.fromTo(
        wrapper,
        { x: "+=100", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 80%",
          },
        }
      );
    });
  });

  return (
    <ListElement
      style={{
        flexFlow: id % 2 === 0 ? "row" : "row-reverse",
      }}
    >
      <div className={id % 2 === 0 ? "slideIn-Left" : "slideIn-Right"}>
        <a href={links.demo} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={img} alt={name} />
        </a>
      </div>
      <ProjectInfoContainer
        className={id % 2 === 0 ? "slideIn-Right" : "slideIn-Left"}
      >
        <ListElementHeader>
          <ProjectTitle>{name}</ProjectTitle>
          <LinksContainer>
            <a href={links.source} target="_blank" rel="noopener noreferrer">
              <Github height="1rem" />
            </a>
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              <Demo height="1rem" />
            </a>
          </LinksContainer>
        </ListElementHeader>
        <Description>{desc}</Description>
        <div>
          {tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </ProjectInfoContainer>
    </ListElement>
  );
};

export default Project;

const ListElement = styled.li`
  display: flex;
  margin: 3rem 0 8rem;

  span {
    margin-right: 10px;
  }

  .project-image {
    width: 400px;
    max-height: 250px;
  }
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListElementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

const LinksContainer = styled.div`
  display: flex;

  svg {
    height: 1.4rem;
    width: 1.4rem;
    margin: 0 7px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const ProjectTitle = styled.h3`
  text-decoration: underline;
  font-size: 1.5rem;
`;

const Description = styled.div`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 10px 0;
`;
