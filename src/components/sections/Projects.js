import React from "react";

import styled from "styled-components";

import SectionContainer from "../styled/SectionContainer";
import SectionTitle from "../styled/SectionTitle";
import Project from "../Project";

const Projects = () => {
  return (
    <SectionContainer>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsList>
        <Project />
      </ProjectsList>
    </SectionContainer>
  );
};

export default Projects;

const ProjectsList = styled.ul`
  margin: 0;
  padding: 0;
`;
