import styled, { css } from "styled-components";
import Icon from "./Icon";
import { Flex } from "rebass";
import {
  colors,
  space,
  colorChange,
  fontSize,
  isDarkBackground,
} from "./Utils";

export const Btn = styled.button`
  color: ${(props) =>
    isDarkBackground(props.color) ? colors.primaryText : colors.buttonLabel};
  position: relative;
  overflow: hidden;
  outline: none;
  font-family: inherit;
  backface-visibility: hidden;
  border: none;
  border-radius: 6px;
  transition: 0.1s all ease;
  user-select: none;
  font-weight: bold;

  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.lightBlue};

  font-size: ${fontSize[1]};
  padding: ${space[2] + "px"} ${space[3] + "px"};

  &:active {
    color: ${colors.buttonLabel};
  }

  ${(props) =>
    props.size === "lg" &&
    css`
      font-size: 18px;
      padding: ${space[2] + 4 + "px"} ${space[4] + "px"};
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 14px;
      padding: ${space[1] + "px"} ${space[2] + "px"};
    `}

  ${(props) =>
    props.display === "block" &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.twitter &&
    css`
      svg {
        transition: transform 0.2s;
      }

      &:hover svg {
        transform: rotate(90deg);
      }
    `}

  &:hover {
    cursor: pointer;
  }
`;

export const BtnLink = styled(Btn).attrs({ as: "a" })`
  text-decoration: none;
  display: inline-block;
`;

export const BtnRainbow = styled(Btn)`
  animation: ${colorChange("background-color")} 10s infinite alternate;
  margin-right: 0;
  border-radius: 44px;
  font-size: 24px;
  padding: 16px 54px 18px 54px;
  font-weight: 600;

  &:hover {
    background-color: var(--primaryText);
  }
`;

export const BtnInput = styled(Btn)`
  position: absolute;
  right: 6px;
  top: 6px;
  background: var(--inputButtonBackground);
  overflow: visible;
  opacity: 1;
  margin: 0;
  color: var(--inputButtonText);

  &::before {
    content: "";
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    box-shadow: 0 2px 4px var(--inputButtonShadow),
      0 0 8px var(--inputButtonShadow);
    mix-blend-mode: overlay;
  }

  &:hover {
    opacity: 1;
    color: var(--gray0);
  }
`;

const BtnIcon = styled(Icon)`
  margin-right: 10px;
  margin-left: -12px;
  position: relative;
  top: 1px;
`;

export function BtnTwitter({ children, ...rest }) {
  return (
    <Btn color="lightBlue" twitter {...rest}>
      <Flex sx={{ height: "24px" }} alignItems="center">
        <BtnIcon fill={colors.twitterIcon} name="twitter" size={34} />
        {children}
      </Flex>
    </Btn>
  );
}
