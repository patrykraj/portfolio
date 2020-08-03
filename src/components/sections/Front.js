import React from "react";

import styled from "styled-components";
import img from "../../images/heheh2.png";

import Button from "../UI/Button";

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
        <div className="header-title">
          <h1
            style={{
              fontWeight: "300",
              letterSpacing: "2px",
              fontSize: "3rem",
            }}
          >
            Patryk Krajewski
          </h1>
          <h2>Front-End Developer</h2>
          <Button>Contact</Button>
        </div>
      </>
    </HeaderContainer>
  );
};

export default Front;

const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  position: relative;
  padding: 50px 0 0 5%;

  .header-title {
    color: white;
    transform: translateY(20px);
    opacity: 0;

    transition: all 0.5s cubic-bezier(0.4, 0, 1, 1) 1.1s;
  }

  .header-title > * {
    margin: 5px 0;
  }

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

    .header-title {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0;
  z-index: 0;

  @media (max-width: 1280px) {
    object-position: right;
  }
`;
