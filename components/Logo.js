import React from "react";
import styled from "styled-components";
import { colors } from "./Utils";

const LogoStyles = styled.div`
  position: relative;
  height: 106px;
  width: 106px;
  border-radius: 24px;
  margin: 160px auto 0 auto;
  box-shadow: 0 7px 5px -7px ${colors.logoShadow1};
  background: transparent;

  &::before {
    content: " ";
    mix-blend-mode: overlay;
    width: 106px;
    height: 106px;
    box-shadow: 0 0 9px 0 ${colors.logoShadow2},
      0 2px 59px 0 ${colors.logoShadow3}, 0 12px 10px -7px ${colors.logoShadow4};
    border-radius: 24px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  & .logo-bird {
    position: absolute;
    left: 18px;
    top: 15px;
  }
`;

export default function Logo(props) {
  return (
    <LogoStyles>
      <svg
        width="106px"
        height="106px"
        viewBox="0 0 106 106"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="58.7890337%"
            x2="50%"
            y2="108.211301%"
            id="linearGradient-1"
          >
            <stop stopColor="var(--top)" offset="0%"></stop>
            <stop stopColor="var(--bottom)" offset="100%"></stop>
          </linearGradient>
          <path
            d="M105.992783,29.2373693 C105.98648,28.1772445 105.974259,27.117377 105.945444,26.0577668 C105.883182,23.7482873 105.746953,21.4189973 105.336206,19.1352459 C104.91967,16.8185626 104.239423,14.6624223 103.167467,12.557481 C102.11365,10.4885589 100.737075,8.59535948 99.0946015,6.95403779 C97.4525141,5.31271609 95.5588072,3.93703664 93.4891211,2.88385843 C91.3820008,1.81164146 89.2235532,1.13164879 86.9043058,0.715240114 C84.6203057,0.305134811 82.2903812,0.169162005 79.9809104,0.106771456 C78.9205323,0.0780846672 77.8601543,0.0659924782 76.7995189,0.0594318225 C75.5403923,0.051713404 74.2812657,0.0523566055 73.0221391,0.0523566055 L58.4024803,0 L47.4680952,0 L33.1071312,0.0523566055 C31.8455604,0.0523566055 30.5839896,0.051713404 29.3224189,0.0594318225 C28.2595966,0.0659924782 27.197289,0.0780846672 26.1348527,0.106771456 C23.819979,0.169162005 21.4847803,0.305263452 19.1953773,0.715883316 C16.8730426,1.13216335 14.711379,1.81189874 12.6014286,2.88334387 C10.5273687,3.93665072 8.62954535,5.31245881 6.98398471,6.95403779 C5.33868136,8.59523084 3.9595338,10.4880443 2.90378676,12.5565805 C1.82887239,14.662551 1.14733859,16.8199776 0.729773724,19.1379473 C0.318640845,21.4207982 0.182411271,23.7493164 0.119763677,26.0577668 C0.0912056356,27.1175056 0.0788562124,28.1773731 0.0724242212,29.2373693 C0.0647058317,30.4959861 0,32.0593517 0,33.3178399 L0.000385919474,47.4798514 L0,58.5313403 L0.0653490309,72.9942415 C0.0653490309,74.254402 0.0648344716,75.5145624 0.0724242212,76.7747229 C0.0788562124,77.8362627 0.0912056356,78.8975453 0.119892316,79.9586992 C0.182411271,82.2711374 0.318898125,84.6037721 0.730416924,86.8906108 C1.14785315,89.2103815 1.8292583,91.3696091 2.9032722,93.4772519 C3.95914788,95.5491327 5.33855272,97.4447763 6.98398471,99.0884135 C8.62941671,100.732051 10.5267255,102.109531 12.6003995,103.164253 C14.7116363,104.237885 16.874329,104.918778 19.1980788,105.335701 C21.4864526,105.74645 23.8208795,105.88268 26.1348527,105.945071 C27.197289,105.973757 28.2597253,105.985978 29.3225475,105.99241 C30.5841183,106.000129 31.8455604,105.999614 33.1071312,105.999614 L47.5978928,106 L58.5594209,106 L73.0221391,105.999485 C74.2812657,105.999485 75.5403923,106.000129 76.7995189,105.99241 C77.8601543,105.985978 78.9205323,105.973757 79.9809104,105.945071 C82.2912817,105.882551 84.621978,105.746193 86.9070072,105.335187 C89.2248396,104.918264 91.3822581,104.237628 93.4882206,103.164639 C95.5582927,102.110046 97.4523855,100.732308 99.0946015,99.0884135 C100.736817,97.4450336 102.113264,95.5496473 103.167081,93.4781524 C104.23968,91.3694805 104.919927,89.2092238 105.33672,86.8879094 C105.747081,84.6019711 105.883182,82.2702369 105.945573,79.9586992 C105.974259,78.8974166 105.98648,77.8361341 105.992783,76.7747229 C106.00063,75.5145624 105.999987,74.254402 105.999987,72.9942415 C105.999987,72.9942415 105.999215,58.7866913 105.999215,58.5313403 L105.999215,47.4682738 C105.999215,47.2796871 105.999987,33.0127051 105.999987,33.0127051 C105.999987,31.7543456 106.000502,30.4958574 105.992783,29.2373693 Z"
            id="path-2"
          ></path>
        </defs>
        <g
          id="Guide"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Artboard-Copy-7">
            <mask id="mask-3" fill="white">
              <use href="#path-2"></use>
            </mask>
            <use id="Mask" fill="url(#linearGradient-1)" href="#path-2"></use>
          </g>
        </g>
      </svg>

      <svg
        width="63px"
        height="73px"
        viewBox="0 0 63 73"
        className="logo-bird"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="cut-off-bottom">
            <path
              d="M43.2560513,63.0688458 C31.6377003,65.1671666 17.641807,59.4197075 7.90645045,47.3975434 C4.35097903,43.0069019 1.732289,38.2344135 0.0580090985,33.412278 C9.89962445,44.0133599 23.1849492,48.7988848 34.147649,46.4040991 C21.1041399,27.8363306 14.3207432,9.67608812 15.4702025,-0.0445151678 C20.3289981,10.080782 29.0007835,21.1825111 41.4855587,33.2606721 C43.5089809,35.2181938 45.2702207,37.1140416 46.7880468,38.9333263 C53.2815824,31.3616359 54.5241298,19.8259909 50.6129401,8.56127544 C51.3556044,9.36125036 52.0786587,10.1943417 52.7796251,11.0599631 C63.4962583,24.293903 65.7022831,40.9969004 59.1888009,52.0722815 C61.4329342,55.717697 62.2217357,60.3207416 61.0010146,64.8765347 C60.1838854,67.9261025 58.57639,70.5437997 56.4731768,72.5517195 C56.0681846,70.9168662 55.3485913,69.4184164 54.2944847,68.1167031 C51.0064979,64.0563776 48.7446441,62.0340986 43.2564296,63.0693815 L43.2560513,63.0688458 Z"
              id="logo"
            ></path>
          </clipPath>
        </defs>
        <image
          clipPath="url(#cut-off-bottom)"
          href="data:image/png;base64, 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"
          height="73px"
          width="63px"
        />
      </svg>
    </LogoStyles>
  );
}