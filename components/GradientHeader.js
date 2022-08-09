import React from "react";
import styled from "styled-components";
import { colors, hexToRGB } from "./Utils";

const Container = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  height: 800px;
  overflow: hidden;
`;

const Canvas = styled.div`
  background: conic-gradient(
    from 1.5708rad at 50% 50%,
    var(--surfaceBackground) 0%,
    var(--surfaceBackground) 25%,
    var(--surfaceBackground) 50%,
    #45ffce 50%,
    #006fff 52%,
    #9a79fd 55%,
    #b17bfc 97%,
    #ff3333 98%,
    #ff9a11 100%
  );
  width: calc(100% + 100px);
  height: 100%;
  position: absolute;
  left: -50px;
  top: -90px;
  filter: blur(40px);
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
