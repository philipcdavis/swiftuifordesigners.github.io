import React from "react";
import styled from "styled-components";
import { colors, hexToRGB } from "./Utils";

const Container = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  height: 700px;
  overflow: hidden;
`;

// const Overlay = styled.div`
//   position: absolute;
//   z-index: 0;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   overflow: hidden;
// `;

const Canvas = styled.div`
  background-image: radial-gradient(
    100% 500px at top center,
    #634f4f 0%,
    #634f4f 7%,
    #614e4e 14%,
    #5f4c4c 21%,
    #5d4949 26%,
    #594646 32%,
    #554343 37%,
    #513f3f 42%,
    #4c3b3b 47%,
    #473636 52%,
    #413131 56%,
    #3b2b2b 61%,
    #352525 66%,
    #2f1f1f 71%,
    #291919 77%,
    var(--duskSurfaceBackground) 95%
  );
  width: 100%;
  height: 700px;
`;

// const Canvas = styled.div`
//   background-image: radial-gradient(circle at 50% -50%, red 0%, white 50%);
//   width: 100%;
//   height: 100%;
// `;

const GradientBlur = () => {
  return (
    <Container>
      <Canvas />
    </Container>
  );
};

export default GradientBlur;
