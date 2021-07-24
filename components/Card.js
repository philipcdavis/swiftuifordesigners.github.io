import React from "react";
import Link from "next/link";
import { Box, Text, Flex, Image } from "rebass";
import styled from "styled-components";
import { colors } from "./Utils";
import { Btn } from "./Button";

const Card = styled(Box)`
  background-color: ${colors.surfaceBackground};
  display: inline-block;
  overflow: hidden;

  & img {
    border-radius: 8px;
  }
`;

const CroppedImage = styled(Box)`
  height: 430px;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-image: ${(props) => `url(${props.src})`};
  overflow: hidden;
  border-radius: 12px;
`;

export function SystemCard(props) {
  return (
    <Box width={[1, 1 / 3]}>
      <Card
        width={[1]}
        p={"24px"}
        sx={{
          maxWidth: 250,
          borderRadius: "16px",
          boxShadow: `inset 0 0 0 2px ${colors.surfaceBorder}, 0 8px 8px -6px ${colors.cardShadow};`,
        }}
        textAlign="center"
        mx="auto"
        mb={[3, 2]}
      >
        <Text mb={-2} fontSize={3} fontWeight="600">
          {props.label}
        </Text>
        <Text mb={2} color={colors.primaryText} fontSize={6} fontWeight="bold">
          {props.version}
        </Text>
        <Link href={props.url}>
          <a target="_blank">
            <Btn color="lightRed" display="block">
              {props.button}
            </Btn>
          </a>
        </Link>
      </Card>
    </Box>
  );
}

export function MediaCard(props) {
  let { color = "lightBlue", url = "#" } = props;
  return (
    <Box width={[1, 1 / 2]} m={0}>
      <Card mb={5} mx={[0, 3]} p={0}>
        <Image width="400" height="200" src={props.src} />
        <Box pt={20} px={"6px"}>
          <Text
            color={colors.primaryText}
            fontSize={3}
            mt={-3}
            mb={2}
            fontWeight="600"
          >
            {props.label}
          </Text>
          <Flex>
            <Link href={url}>
              <a target="_blank">
                <Btn color={color}>{props.button}</Btn>
              </a>
            </Link>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
}

export function ExampleCard(props) {
  let { color = "lightRed", url = "#" } = props;
  return (
    <Box width={[1, 1, 1, 1 / 2, 1 / 2]} m={0}>
      <Card width={1} mb={5} px={2}>
        <CroppedImage width={1} src={props.src} />
        <Box pt={20} px={"6px"}>
          <Text
            color={colors.primaryText}
            fontSize={3}
            mt={-3}
            mb={2}
            fontWeight="600"
          >
            {props.label}
          </Text>
          <Flex mb={2}>
            <Flex width={1}>
              <Box>
                <Text
                  display="inline"
                  fontWeight="bold"
                  color={colors.primaryText}
                >
                  {props.headline}
                </Text>
                <Text display="inline" opacity={0.8} ml={2} fontSize={[2]}>
                  github.com
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Link href={url}>
            <a target="_blank">
              <Btn color={color}>View</Btn>
            </a>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}

export default Card;
