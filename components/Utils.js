import { keyframes } from "styled-components";

export const colors = {
  white: "#ffffff",
  red: "#EF4343",
  purple: "#9000FF",
  blue: "#0086FF",
  teal: "#7DE9FF",
  green: "#54EB78",
  yellow: "#FFD700",
  lightRed: "#FDC9C9",
  lightPurple: "#DFB7FF",
  lightBlue: "#B8E8FF",
  lightGreen: "#80F6A1",
  lightYellow: "#FFDA8C",
  surfaceBackground: "white",
  surfaceHighlight: "#EFF3F5",
  surfaceBorder: "#DDE5EA",
  surfaceBorderHighlight: "#C1CACF",
  cardShadow: "rgba(204,216,223,0.50)",
  primaryText: "#37373C",
  secondaryText: "#7C7C84",
  placeholderText: "#6B767D",
  twitterBlue: "#1D9DFF",
  gray1: "#EFF3F5",
  gray2: "#DDE5EA",
  gray3: "#B7C5CD",
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
    0% { ${type}: ${hexToRGB(colors.lightPurple, opacity)}; }
    25%  { ${type}: ${hexToRGB(colors.lightRed, opacity)}; }
    50% { ${type}: ${hexToRGB(colors.lightYellow, opacity)}; }
    75% { ${type}: ${hexToRGB(colors.lightGreen, opacity)}; }
    100% { ${type}: ${hexToRGB(colors.lightBlue, opacity)}; }
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
