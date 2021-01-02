import React from "react";
import styled from "styled-components";
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

const Overlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  height: 640px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Canvas = styled.div`
  background: conic-gradient(
    ${colors.yellow},
    ${colors.red},
    ${colors.purple},
    ${colors.blue},
    ${colors.teal},
    ${colors.yellow}
  );
  width: 270px;
  height: 270px;
  border-radius: 50%;
  top: 75px;
  position: absolute;
  left: calc(50% - 138px);
  filter: blur(42px);
`;

const GradientBlur = () => {
  return (
    <Container>
      <Canvas />
      <Overlay />
    </Container>
  );
};

export default GradientBlur;
