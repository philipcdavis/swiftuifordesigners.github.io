import React from "react";
import styled from "styled-components";
import Head from "../components/Head";
import Link from "next/link";
import RadialGradient from "../components/RadialGradient";
import LogoSimple from "../components/LogoSimple";
import { Box, Flex, Text, Image } from "rebass";
import { colors } from "../components/Utils";
import { ExampleCard } from "../components/Card";
import { BtnRainbow, BtnMetal } from "../components/Button";
import SignupForm from "../components/SignupForm";
import PurchaseCard from "../components/PurchaseCard";
import NoiseCanvas from "../components/NoiseCanvas";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const youtubes = [
  "F7soMzx-k04",
  "3qdxhMkCtdc",
  "IJ3HSlq5Zow",
  "h1P1Wu3_Tp8",
  "YGUjdvGnenU",
  "4NRqc9CvbSI",
  "mDVFWfPfn5o",
  "EqdsT-8yOyM",
  "5ZeampwsmFM",
  "1LDJ-8WnqBU",
  "PA1tHJlcI7o",
  "XBDiGuhoY_4",
  "g1kjAOLAONc",
  "C3WZPOHfO-g",
  "zd8kbcKEQy8",
  "riMHLvzuU2U",
  "CpnoL8C2J08",
  "NmiS6HpQGcA",
  "rjP42GlAb3M",
  "ulg8SCUdYXI",
  "kUF0sBq7awE",
  "FSUdFHEFZ4k",
  "LV0eZeYs1C0",
  "eWGj3UnpvqE",
  "zDbsxEI_GxA",
  "IBJb1IeNmlg",
  "kzKihvt5HtY",
  "gzKq1xuQNTU",
  "vasnymyMys4",
  "Gu7hs-imyGQ",
  "ri2rqk12YSk",
  "ZlF6rnyBbhE",
  "n7_eROoVL7A",
];

const ImageCard = styled(Image)`
  border-radius: 20px;
  background-color: var(--surfaceHighlight);
  box-shadow: 0 3px 11px 0 var(--cardShadow), 0 1px 4px 0 var(--cardShadow);
  display: block;
`;

const Logo = styled.img`
  width: 282px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: block;
`;

const Noise = styled(NoiseCanvas)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  right: 0;
  z-index: 2;
  mix-blend-mode: overlay;
  opacity: 0.2;
  pointer-events: none;
`;

const EmbedContainer = styled.div`
  position: relative;
`;

const EmbedOverlay = styled.div`
  background-color: red;
  border-radius: 12px;
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  bottom: 10px;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
`;

const Strikethrough = styled(Text)`
  position: relative;
  display: inline-block;
  &:before {
    height: 3px;
    top: calc(50% - 2px);
    position: absolute;
    content: "";
    width: 100%;
    background: white;
    border-radius: 6px;
  }
  margin-left: -5px;
`;

const Price = styled(Text)`
  position: relative;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const Largar = styled.span`
  display: inline-block;
  padding: 0px 15px;
  font-size: 140px;
  font-weight: 500;
  line-height: 1;
  margin-top: 10px;
  @media (max-width: 600px) {
    font-size: 100px;
  }
`;

const Smallar = styled(Text)`
  color: var(--primaryText);
  position: absolute;
  top: 20px;
  font-weight: 500;
  left: -6px;
`;
export default function Guide() {
  return (
    <Box className="code">
      <Head
        title="SwiftUI Prototype Kit"
        description="Source code for over 50 prototypes made in SwiftUI"
      />
      <Noise />
      <RadialGradient />
      <Head title="SwiftUI for Designers" description="Prototype in SwiftUI" />

      <Box mt={"80px"}>
        <Logo src="dusk-logo.png" />
      </Box>

      <Box
        mt={"0px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "45rem" }}
      >
        <Text
          className="rainbowText"
          color={colors.duskPrimaryText}
          textAlign="center"
          fontSize={[5, "52px"]}
          fontWeight="500"
        >
          50+ prototypes made in SwiftUI
        </Text>

        <Text
          textAlign="center"
          color={colors.duskPrimaryText}
          className="rainbowText"
          fontSize={[4, "33px"]}
          sx={{ lineHeight: 1.3 }}
        >
          {`Source code for visual effects, rough drafts, and small design tools that i’ve been making over the past 6 months.`}
        </Text>

        <Box
          width={["92%"]}
          mt={4}
          mx={"auto"}
          sx={{ position: "relative", maxWidth: "36rem" }}
          textAlign="center"
        >
          <Link mx="auto" href="https://philipdavis.gumroad.com/l/prototypekit">
            <a target="_blank">
              <BtnMetal mx="auto">Purchase</BtnMetal>
            </a>
          </Link>
        </Box>
      </Box>

      <Box mt={[5, 6]} mb={7}>
        <Flex width="92%" sx={{ maxWidth: "92rem" }} mx={"auto"}>
          <Box
            flexGrow="1"
            sx={{
              display: "grid",
              gridGap: "24px",
              gridTemplateColumns: ["auto", "auto auto auto"],
            }}
          >
            {youtubes.map((d, i) => {
              return <LiteYouTubeEmbed id={d} />;
            })}
          </Box>
        </Flex>

        <Text
          className="rainbowText"
          color={colors.duskPrimaryText}
          textAlign="center"
          mt={5}
          pt={5}
          fontSize={[4, 6]}
          fontWeight="500"
        >
          ...and many more
        </Text>

        <Box mt={-4} mx="auto" sx={{ maxWidth: "75em" }}>
          <Image src="./icon-wall.png" />
        </Box>

        <Box mt={5} mx="auto" sx={{ maxWidth: "34em" }}>
          <Text
            className="rainbowText"
            color={colors.duskPrimaryText}
            textAlign="center"
            fontSize={[4, 6]}
            fontWeight="500"
          >
            Source Code for over 50 prototypes.
          </Text>

          <Text
            className="rainbowText"
            textAlign="center"
            fontSize={[3, 5]}
            fontWeight="500"
            mt={-2}
            mb={3}
          >
            One time payment for instant access.
          </Text>
          <Box px={2}>
            <Box textAlign={"center"}>
              <Strikethrough ml={-3} fontWeight="500" fontSize={[5, 6]}>
                $250
              </Strikethrough>
              <Box mt={-3} mb={3}>
                <Price
                  fontWeight="600"
                  color={colors.primaryText}
                  fontSize={[5]}
                >
                  <Smallar fontSize={[5]}>$</Smallar>
                  <Largar className="rainbowText">99</Largar>
                </Price>
              </Box>
              <Link
                mx="auto"
                href="https://philipdavis.gumroad.com/l/prototypekit"
              >
                <a target="_blank">
                  <BtnMetal mx="auto">Purchase</BtnMetal>
                </a>
              </Link>
              <Text>Price going up soon</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
