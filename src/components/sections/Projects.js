import React, { useEffect, useRef } from "react";

import styled from "styled-components";

import SectionContainer from "../styled/SectionContainer";
import SectionTitle from "../styled/SectionTitle";
import Project from "../Project";
import ProjectsList from "../../assets/ProjectsList";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Projects = ({ onSetProjectsRef }) => {
  const projectsRef = useRef();

  useEffect(() => {
    onSetProjectsRef(projectsRef);
  });

  return (
    <SectionContainer ref={projectsRef}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onSetProjectsRef: (ref) => dispatch(actions.setProjectsRef(ref)),
  };
};

export default connect(null, mapDispatchToProps)(Projects);

const ProjectsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
