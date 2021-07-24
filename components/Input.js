import styled, { css } from "styled-components";
import { colors, space, fontSize } from "./Utils";

export const InputLight = styled.input`
  background: var(--inputLightBackground);
  font-family: inherit;
  margin: 0;
  padding: ${space[2] + 2 + "px"};
  padding-right: 140px;
  font-size: ${19}px;
  border: 2px solid var(--inputLightBackground);
  outline: none;
  color: ${colors.primaryText};
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  -webkit-appearance: none;

  &:hover {
    outline: none;
  }

  &:focus {
    opacity: 1;
    outline: none;
    border-color: var(--inputLightHighlight);
  }
  &::-webkit-input-placeholder {
    color: ${colors.placeholderText};
  }
`;

export const InputDark = styled(InputLight)`
  background-color: ${colors.gray2};
  color: ${colors.white};
`;
