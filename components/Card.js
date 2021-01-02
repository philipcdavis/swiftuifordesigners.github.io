import React from "react";
import Link from "next/link";
import { Image, Box, Text, Flex } from "rebass";
import styled from "styled-components";
import { colors } from "./Utils";
import { Btn } from "./Button";

const Card = styled(Box)`
  background-color: ${colors.surfaceBackground};
  /* box-shadow: inset 0 0 0 2px ${colors.cardShadow},
    0 8px 8px -6px ${colors.cardShadow}; */
  /* border-radius: 16px; */
  display: inline-block;
  /* padding: 24px; */
  /* margin-right: 8px; */
  overflow: hidden;

  & img {
    border-radius: 8px;
  }
`;

export function SystemCard(props) {
  return (
    <Card
      width={[1 / 3]}
      p={"24px"}
      sx={{
        borderRadius: "16px",
        boxShadow: `inset 0 0 0 2px ${colors.cardShadow}, 0 8px 8px -6px ${colors.cardShadow};`,
      }}
      textAlign="center"
      mx={2}
      mb={5}
    >
      <Text mb={-2} fontSize={3} fontWeight="600">
        {props.label}
      </Text>
      <Text mb={2} color={colors.primaryText} fontSize={6} fontWeight="bold">
        {props.version}
      </Text>

      <Btn color="lightRed" display="block">
        {props.button}
      </Btn>
    </Card>
  );
}

export function MediaCard(props) {
  let { color = "lightBlue", url = "#" } = props;
  return (
    <Box width={[1 / 2]} m={0}>
      <Card mb={5} mx={3} p={0}>
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

export default Card;
