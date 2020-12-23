import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "./Utils";

const Container = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  height: 640px;
  overflow: hidden;
`;

const Canvas = styled.div`
  &::after {
    content: "";
    background: linear-gradient(
        to top,
        ${colors.surfaceBackground} 30%,
        rgba(255, 255, 255, 0) 0%
      ),
      conic-gradient(
        ${colors.yellow},
        ${colors.red},
        ${colors.purple},
        ${colors.blue},
        ${colors.teal},
        ${colors.green},
        ${colors.yellow}
      );
    position: absolute;
    left: -600px;
    right: -600px;
    top: -400px;
    bottom: 0;
    filter: blur(60px);
    /* animation: ${rotate} 10s linear infinite;
    animation-direction: alternate; */
  }
`;

const Blur = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

const GradientMap = () => {
  return (
    <Container>
      <Canvas />
      <Blur />
    </Container>
  );
};

export default GradientMap;
