import styled, { css } from "styled-components";
import { colors, space, fontSize } from "./Utils";

export const InputLight = styled.input`
  background-color: ${colors.surfaceBackground};
  font-family: inherit;
  margin: 0;
  padding: ${space[2] + "px"};
  font-size: ${18}px;
  border: none;
  outline: none;
  color: ${colors.primaryText};
  transition: 0.2s opacity ease;
  opacity: 0.9;
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 2px solid ${colors.surfaceBorder};
  -webkit-appearance: none;

  &:hover {
    opacity: 1;
    outline: none;
    border-color: ${colors.surfaceBorderHighlight};
  }

  &:focus {
    opacity: 1;
    outline: none;
    border-color: ${colors.blue};
  }
  &::-webkit-input-placeholder {
    color: ${colors.placeholderText};
  }
`;

export const InputDark = styled(InputLight)`
  background-color: ${colors.gray2};
  color: ${colors.white};
`;
