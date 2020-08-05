import React from "react";

import styled from "styled-components";

import SectionContainer from "../styled/SectionContainer";
import SectionTitle from "../styled/SectionTitle";
import Project from "../Project";
import ProjectsList from "../../assets/ProjectsList";

const Projects = () => {
  return (
    <SectionContainer>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>
        {ProjectsList.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            img={project.img}
            name={project.name}
            links={project.links}
            desc={project.desc}
            tech={project.tech}
          />
        ))}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
