import React from "react";

import styled from "styled-components";
import img from "../../images/heheh2.png";

const Front = ({ setLoaded }) => {
  return (
    <HeaderContainer>
      <>
        <BackgroundImage
          src={img}
          alt="background"
          onLoad={(e) => {
            setLoaded(true);
            e.target.parentElement.classList.add("active");
          }}
        />
        <div
          className="site-header"
          style={{ color: "white", transform: "translateY(0px)", opacity: "1" }}
        >
          <h1>Patryk Krajewski</h1>
          <h2>Front-End Developer</h2>
        </div>
      </>
    </HeaderContainer>
  );
};

export default Front;

const HeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    display: block;
    z-index: 1;

    width: 100%;
    height: 100%;

    background: rgb(18, 11, 19);
    transform: translateX(0);
    will-change: transform;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1);
  }

  &.active {
    &::before {
      transform: translateX(105%);
    }
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  z-index: 0;

  @media (max-width: 1280px) {
    object-position: right;
  }
`;
