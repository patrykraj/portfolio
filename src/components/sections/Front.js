import React, { useState } from "react";

import styled from "styled-components";
import img from "../../images/stars.jpg";

const Front = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <BackgroundWrapper>
      <BackgroundImage src={img} alt="background" />
    </BackgroundWrapper>
  );
};

export default Front;

const BackgroundWrapper = styled.div`
  height: 100vh;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;
