import React from "react";
import styled from "styled-components";
import Image from "next/image";

const LogoStyles = styled.div`
  position: relative;
  height: 110px;
  width: 110px;
  border-radius: 24px;
  margin: 120px auto 0 auto;
  box-shadow: 0 11px 6px -11px rgba(0, 0, 0, 0.1);

  &::before {
    content: " ";
    mix-blend-mode: overlay;
    width: 110px;
    height: 110px;
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.4), 0 2px 59px 0 rgba(0, 0, 0, 0.6),
      0 13px 11px -10px rgba(0, 0, 0, 1);
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
      <img src="/logo.png" width="110px" height="110px" alt="Logo" />
    </LogoStyles>
  );
}
