import React from "react";

import styled from "styled-components";

const Footer = () => {
  window.addEventListener("scroll", () => {
    if (
      window.pageYOffset + window.innerHeight >
      document.body.scrollHeight - 20
    ) {
      document.querySelector("footer").classList.add("highlight");
    } else {
      document.querySelector("footer").classList.remove("highlight");
    }
  });

  return (
    <FooterContainer>
      <p>This site has been created from scratch by:</p>
      <h3>krayesky&copy;</h3>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 2rem 0 3rem;
  border: 1rem solid transparent;
  transition: all 0.4s;

  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-top: 1rem;
  }

  &.highlight {
    border: 1rem solid rgba(0, 0, 0, 0.2);
  }
`;
