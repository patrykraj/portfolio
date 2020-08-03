import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 5px 25px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid transparent;
  color: white;
  transition: all 0.3s;
  margin: 0 10px;
  cursor: pointer;
  border: 1px solid white;
  position: relative;
  transition: all 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: white;
    transform: scaleY(0);
    transform-origin: 0 0;
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    z-index: -1;
  }

  &:hover {
    color: rgb(18, 11, 19);

    &::before {
      transform: scaleY(1);
    }
  }
`;
