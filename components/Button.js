import styled, { css } from "styled-components";
import Icon from "./Icon";
import { Flex } from "rebass";
import { colors, space, colorChange, fontSize } from "./Utils";

export const Btn = styled.button`
  color: ${colors.primaryText};
  position: relative;
  overflow: hidden;
  outline: none;
  font-family: inherit;
  backface-visibility: hidden;
  border: none;
  border-radius: 8px;
  transition: 0.1s all ease;
  user-select: none;
  font-weight: bold;

  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.lightBlue};

  font-size: ${fontSize[1]};
  padding: ${space[2] + "px"} ${space[3] + "px"};

  &:active {
    color: ${colors.primaryText};
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
    opacity: 0.9;
  }
`;

export const BtnLink = styled(Btn).attrs({ as: "a" })`
  text-decoration: none;
  display: inline-block;
`;

export const BtnRainbow = styled(Btn)`
  animation: ${colorChange("background")} 10s infinite alternate;
  margin-right: 0;
`;

export const BtnInput = styled(Btn).attrs({ as: "input" })`
  -webkit-appearance: none;
  animation: ${colorChange("background")} 10s infinite alternate;

  @media (max-width: 630px) {
    display: block;
    width: 100%;
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
    <Btn color="gray1" twitter {...rest}>
      <Flex sx={{ height: "24px" }} alignItems="center">
        <BtnIcon fill={colors.twitterBlue} name="twitter" size={34} />
        {children}
      </Flex>
    </Btn>
  );
}
