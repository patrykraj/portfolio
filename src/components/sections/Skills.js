import React from "react";

import styled from "styled-components";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiJqueryLogo,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiFirebase,
  DiGit,
  DiResponsive,
  DiWordpress,
  DiPhp,
} from "react-icons/di";
import { FaVuejs, FaNode } from "react-icons/fa";
import { AiFillFormatPainter } from "react-icons/ai";

import SectionContainer from "../styled/SectionContainer";
import SectionTitle from "../styled/SectionTitle";

const Skills = () => {
  return (
    <SectionContainer>
      <SectionTitle>Skills</SectionTitle>
      <h2>Technologies that I worked with:</h2>
      <SkillsContainer>
        <SkillsList>
          <li className="skills-header">
            <h4>Front End:</h4>
          </li>
          <li className="skill-element">
            <span role="img" aria-label="html">
              <DiHtml5 />
            </span>
            HTML
          </li>
          <li className="skill-element">
            <span role="img" aria-label="css">
              <DiCss3 />
            </span>
            CSS
          </li>
          <li className="skill-element">
            <span role="img" aria-label="js">
              <DiJavascript1 />
            </span>
            JavaScript
          </li>
          <li className="skill-element">
            <span role="img" aria-label="jquery">
              <DiJqueryLogo />
            </span>
            jQuery
          </li>
          <li className="skill-element">
            <span role="img" aria-label="react">
              <DiReact />
            </span>
            React (hooks)
          </li>
          <li className="skill-element">
            <span role="img" aria-label="redux">
              <DiReact />
            </span>
            Redux
          </li>
          <li className="skill-element">
            <span role="img" aria-label="vue">
              <FaVuejs />
            </span>
            Vue
          </li>
          <li className="skill-element">
            <span role="img" aria-label="styled-components">
              <AiFillFormatPainter />
            </span>
            Styled-components
          </li>
          <li className="skill-element">
            <span role="img" aria-label="rwd">
              <DiResponsive />
            </span>
            RWD
          </li>
          <li className="skill-element">
            <span role="img" aria-label="git">
              <DiGit />
            </span>
            GIT
          </li>
        </SkillsList>
        <SkillsList>
          <li className="skills-header">
            <h4>Back End:</h4>
          </li>
          <li className="skill-element">
            NodeJS
            <span role="img" aria-label="node">
              <FaNode />
            </span>
          </li>
          <li className="skill-element">
            Express
            <span role="img" aria-label="express">
              <DiNodejsSmall />
            </span>
          </li>
          <li className="skill-element">
            MongoDB
            <span role="img" aria-label="express">
              <DiMongodb />
            </span>
          </li>
          <li className="skill-element">
            Firebase
            <span role="img" aria-label="express">
              <DiFirebase />
            </span>
          </li>
        </SkillsList>
      </SkillsContainer>
      <h2>Technologies that I am currently learning:</h2>
      <SkillsList>
        <li className="skill-element">
          Wordpress
          <span role="img" aria-label="express">
            <DiWordpress />
          </span>
        </li>
        <li className="skill-element">
          PHP
          <span role="img" aria-label="express">
            <DiPhp />
          </span>
        </li>
        <li className="skill-element">
          GSAP
          <span role="img" aria-label="express">
            <DiReact />
          </span>
        </li>
      </SkillsList>
    </SectionContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  display: flex;

  ul + ul {
    margin: 2rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;

  .skills-header {
    margin-bottom: 10px;
  }

  .skill-element {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    padding: 5px 0;
    width: 212px;

    span {
      display: flex;
      margin: 0 10px;
    }
  }
`;
