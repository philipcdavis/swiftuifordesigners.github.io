import React from "react";
import styled from "styled-components";

const LogoStyles = styled.div`
  position: relative;
  height: 106px;
  width: 106px;
  border-radius: 24px;
  margin: 160px auto 0 auto;
  box-shadow: 0 7px 5px -7px rgba(0, 0, 0, 0.2);

  &::before {
    content: " ";
    mix-blend-mode: overlay;
    width: 106px;
    height: 106px;
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.5), 0 2px 59px 0 rgba(0, 0, 0, 0.6),
      0 12px 10px -7px rgba(0, 0, 0, 0.8);
    border-radius: 24px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

export default function Logo(props) {
  return (
    <LogoStyles>
      <img src="/logo.png" width="106px" height="106px" alt="Logo" />
    </LogoStyles>
  );
}
