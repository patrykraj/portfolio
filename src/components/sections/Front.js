import React from "react";

import styled from "styled-components";
import img from "../../images/heheh2.png";

import Button from "../UI/Button";

const Front = ({ setLoaded }) => {
  return (
    <HeaderContainer>
      <BackgroundImage
        src={img}
        alt="background"
        onLoad={(e) => {
          setLoaded(true);
          e.target.parentElement.classList.add("active");
        }}
        draggable={false}
      />
      <div className="header-title">
        <h1>Patryk Krajewski</h1>
        <h2>Front-End Developer</h2>
        <Button>Contact</Button>
      </div>
      <ScrollNav>
        <button
          onClick={(_) =>
            window.scrollTo({ behavior: "smooth", top: window.innerHeight })
          }
        ></button>
      </ScrollNav>
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
    top: 0;
    left: 0;

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

      h1 {
        font-weight: 300;
        font-size: 3rem;
      }
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

const ScrollNav = styled.div`
  position: absolute;
  bottom: 10px;
  right: 5%;

  button {
    background: transparent;
    border: 1px solid white;
    border-top: 4px solid white;
    border-bottom: 6px solid white;
    border-radius: 3px;
    width: 20px;
    height: 40px;
    color: white;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      width: 18px;
      height: 18px;
      border-bottom: 2px solid white;
      border-right: 2px solid white;
      transform: rotate(45deg);
      position: absolute;
      animation: swipe 2s infinite linear;
      animation-delay: 1.5s;
      top: -100%;
      left: 0;
    }

    @keyframes swipe {
      0% {
        top: -90%;
      }
      50% {
        top: 0;
      }
      100% {
        top: 90%;
      }
    }
  }
`;
