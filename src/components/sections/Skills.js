import React from "react";

import styled from "styled-components";

import { SkillsList, LearningSkillsList } from "../../assets/SkillsList";
import SectionContainer from "../styled/SectionContainer";
import SectionTitle from "../styled/SectionTitle";

const Skills = () => {
  return (
    <SectionContainer>
      <SectionTitle>Skills</SectionTitle>
      <h2>Technologies that I worked with:</h2>
      <SkillsContainer>
        {SkillsList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </SkillsContainer>
      <h2>Technologies that I am currently learning:</h2>
      <SkillsContainer>
        {LearningSkillsList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </SkillsContainer>
    </SectionContainer>
  );
};

export default Skills;

const SkillsContainer = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`;
