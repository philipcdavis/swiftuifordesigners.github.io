import React from "react";

const IconMap = {
  check: Check,
  twitter: Twitter,
};

const Icon = function (props) {
  let { name, fill = "", size = 16, className, ...rest } = props;
  const Component = IconMap[name] ? IconMap[name] : null;

  return (
    <svg
      width={size}
      height={size}
      className={className}
      {...rest}
      viewBox="0 0 16 16"
    >
      <Component fill={fill} />
    </svg>
  );
};

function Check(props) {
  return (
    <path
      fill={props.fill}
      d="M5.97093463,12.5775363 L5.9669082,12.5815628 L1.72426751,8.33892209 L3.13848108,6.92470853 L6.28886679,10.0750942 L13.363961,3 L14.7781746,4.41421356 L6.29289322,12.8994949 L5.97093463,12.5775363 Z"
    ></path>
  );
}

function Twitter(props) {
  return (
    <path
      fill={props.fill}
      d="M13.9507414,3.72187686 C13.4926695,3.92504931 13.0004108,4.06233824 12.4837367,4.12405329 C13.0110214,3.80792605 13.4160941,3.30738448 13.6067882,2.71088683 C13.1132302,3.00360025 12.5665648,3.21619237 11.984738,3.3307171 C11.5188164,2.83426281 10.8549735,2.52411759 10.1202937,2.52411759 C8.70967166,2.52411759 7.56594013,3.66774084 7.56594013,5.07836291 C7.56594013,5.27855788 7.58851485,5.47350166 7.63209434,5.66046037 C5.50923184,5.5539207 3.62705804,4.53702986 2.36725891,2.99163619 C2.1473855,3.36888299 2.021411,3.8076283 2.021411,4.27576946 C2.021411,5.16194891 2.47233691,5.94378119 3.15772589,6.40185306 C2.7390109,6.38856267 2.34514435,6.27368605 2.00078518,6.08234232 C2.00054157,6.09303418 2.00054157,6.1036719 2.00054157,6.11449911 C2.00054157,7.35207541 2.88103673,8.38439502 4.04953548,8.61912877 C3.83521101,8.67748739 3.60954504,8.70875093 3.37659778,8.70875093 C3.21199724,8.70875093 3.05199826,8.69269961 2.89600534,8.6629248 C3.22106502,9.67765021 4.16435796,10.4162007 5.28213127,10.4367724 C4.40794295,11.1219178 3.30657285,11.5302116 2.10981511,11.5302116 C1.9036381,11.5302116 1.70033031,11.5181393 1.50048722,11.4944818 C2.63090129,12.2192277 3.97355559,12.6421653 5.41600963,12.6421653 C10.1143117,12.6421653 12.6835797,8.74994844 12.6835797,5.37451396 C12.6835797,5.26377875 12.6810895,5.15363903 12.6761902,5.04406774 C13.1752971,4.68395499 13.6083311,4.23408473 13.9507414,3.72187686 Z"
    ></path>
  );
}

export default Icon;