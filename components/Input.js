import styled, { css } from "styled-components";
import { colors, space, fontSize } from "./Utils";

export const InputLight = styled.input`
  background: var(--inputLightBackground);
  font-family: inherit;
  margin: 0;
  padding: 20px;
  padding-right: 140px;
  font-size: ${19}px;
  border: 0 solid var(--inputLightBackground);
  outline: none;
  color: ${colors.primaryText};
  width: 100%;
  border-radius: 10px;
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
