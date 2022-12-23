import React from "react";
import styled from "styled-components";
import { colors } from "./Utils";

const Logo = styled.picture`
  position: relative;
  width: 168px;
  margin: 0 auto;
  display: block;
  & img {
    width: 168px;
  }
`;

export default function LogoSimple(props) {
  return (
    <Logo>
      <source srcSet="logo-dark.png" media="(prefers-color-scheme: dark)" />
      <img src="logo-light.png" />
    </Logo>
  );
}
