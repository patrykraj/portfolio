import React from "react";

import styled from "styled-components";

import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Demo } from "../images/demo.svg";

const Project = ({ id, name, img, links, desc, tech }) => {
  return (
    <ListElement
      style={{
        flexFlow: id % 2 === 0 ? "row" : "row-reverse",
      }}
    >
      <div>
        <a href={links.demo} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={name} style={{ maxWidth: "400px" }} />
        </a>
      </div>
      <ProjectInfoContainer>
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
