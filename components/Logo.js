import React from "react";
import styled from "styled-components";
import { colors } from "./Utils";

const LogoStyles = styled.div`
  position: relative;
  height: 106px;
  width: 106px;
  border-radius: 24px;
  margin: 160px auto 0 auto;
  box-shadow: 0 7px 5px -7px ${colors.logoShadow1};
  background-color: var(--top);
  background-image: linear-gradient(
    -180deg,
    var(--top) 60%,
    var(--bottom) 100%
  );

  &::before {
    content: " ";
    mix-blend-mode: overlay;
    width: 106px;
    height: 106px;
    box-shadow: 0 0 9px 0 ${colors.logoShadow2},
      0 2px 59px 0 ${colors.logoShadow3}, 0 12px 10px -7px ${colors.logoShadow4};
    border-radius: 24px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  & .logo-bird {
    position: absolute;
    left: 18px;
    top: 15px;
  }
`;

export default function Logo(props) {
  return (
    <LogoStyles>
      <img
        className="logo-bird"
        src="/icon-color.png"
        width="64px"
        height="74px"
        alt="Logo"
      />
    </LogoStyles>
  );
}
