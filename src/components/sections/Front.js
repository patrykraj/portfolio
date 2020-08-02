import React from "react";

import styled from "styled-components";
import img from "../../images/heheh.png";

const Front = ({ setLoaded }) => {
  return (
    <BackgroundWrapper>
      <BackgroundImage
        src={img}
        alt="background"
        onLoad={(e) => {
          setLoaded(true);
          e.target.parentElement.classList.add("active");
        }}
      />
    </BackgroundWrapper>
  );
};

export default Front;

const BackgroundWrapper = styled.div`
  height: 100vh;

  &::before {
    content: "";
    position: fixed;
    display: block;

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
`;
