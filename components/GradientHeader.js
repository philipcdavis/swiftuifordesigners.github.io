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
  height: 400px;
  overflow: hidden;
`;

const Canvas = styled.div`
  background: conic-gradient(
    ${colors.purple},
    ${colors.purple},
    ${colors.purple},
    ${colors.red},
    ${colors.red},
    ${colors.red},
    ${colors.red},
    ${colors.yellow},
    var(--surfaceBackground),
    var(--surfaceBackground),
    var(--surfaceBackground),
    var(--surfaceBackground),
    var(--surfaceBackground),
    var(--surfaceBackground),
    var(--surfaceBackground),
    var(--surfaceBackground),
    var(--surfaceBackground),
    var(--surfaceBackground),
    ${colors.teal},
    ${colors.blue},
    ${colors.blue},
    ${colors.blue},
    ${colors.blue},
    ${colors.purple},
    ${colors.purple},
    ${colors.purple}
  );
  width: calc(100% + 100px);
  height: 100%;
  position: absolute;
  left: -50px;
  top: -180px;
  filter: blur(70px);
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
