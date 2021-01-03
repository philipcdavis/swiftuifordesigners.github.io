import { keyframes } from "styled-components";

export const colors = {
  white: "var(--white)",
  red: "var(--red)",
  purple: "var(--purple)",
  blue: "var(--blue)",
  teal: "var(--teal)",
  green: "var(--green)",
  yellow: "var(--yellow)",
  lightRed: "var(--lightRed)",
  lightPurple: "var(--lightPurple)",
  lightBlue: "var(--lightBlue)",
  lightGreen: "var(--lightGreen)",
  lightYellow: "var(--lightYellow)",
  surfaceBackground: "var(--surfaceBackground)",
  surfaceHighlight: "var(--surfaceHighlight)",
  surfaceBorder: "var(--surfaceBorder)",
  surfaceBorderHighlight: "var(--surfaceBorderHighlight)",
  cardShadow: "var(--cardShadow)",
  primaryText: "var(--primaryText)",
  secondaryText: "var(--secondaryText)",
  placeholderText: "var(--placeholderText)",
  twitterBlue: "var(--twitterBlue)",
  gray1: "var(--gray1)",
  gray2: "var(--gray2)",
  gray3: "var(--gray3)",
  gray4: "var(--gray4)",
};

export const space = [0, 8, 16, 32, 64, 128, 256, 512];

export const fontSize = ["14px", "16px", "20px", "24px", "32px", "64px"];

export const isDarkBackground = function (color) {
  if (color) {
    if (
      color.includes("black") ||
      color.includes("gray2") ||
      color.includes("gray3")
    ) {
      return true;
    } else {
      return false;
    }
  }
};

export function colorChange(type, opacity = 1) {
  return keyframes`
    0% { ${type}: ${hexToRGB("#dfb7ff", opacity)}; }
    25%  { ${type}: ${hexToRGB("#fdc9c9", opacity)}; }
    50% { ${type}: ${hexToRGB("#ffda8c", opacity)}; }
    75% { ${type}: ${hexToRGB("#80f6a1", opacity)}; }
    100% { ${type}: ${hexToRGB("#b8e8ff", opacity)}; }
  `;
}

export function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
