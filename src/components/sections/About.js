import React from "react";

import styled from "styled-components";

import SectionContainer from "../styled/SectionContainer";
import SectionTitle from "../styled/SectionTitle";

const About = () => {
  return (
    <SectionContainer>
      <SectionTitle>About me</SectionTitle>
      <AboutMe>
        Hi, my name is Patryk and I'm a 24 years old software developer. I
        graduated from Bialystok University of Technology majoring in Front-End
        Development. I turned into web development about 1.5 year ago and since
        then I worked hard everyday to become a developer. My ultimate goal is
        to be an entirely independent full-stack. I also have a degree in
        English Studies with IT (English C1 level). Currenty I'm looking for a
        job as a Front End Developer in Massachussets.
      </AboutMe>
    </SectionContainer>
  );
};

export default About;

const AboutMe = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`;
