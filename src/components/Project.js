import React from "react";

import styled from "styled-components";

const Project = ({ name, img, links, desc, tech }) => {
  return (
    <ListElement>
      <div>
        <img src={img} alt={name} style={{ maxWidth: "400px" }} />
      </div>
      <div>
        <ProjectTitle>{name}</ProjectTitle>
        <Description>{desc}</Description>
        <div>
          {tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </ListElement>
  );
};

export default Project;

const ListElement = styled.li`
  display: flex;

  span {
    margin-right: 10px;
  }
`;

const ProjectTitle = styled.h3`
  text-decoration: underline;
  font-size: 1.5rem;
`;

const Description = styled.div`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
`;
