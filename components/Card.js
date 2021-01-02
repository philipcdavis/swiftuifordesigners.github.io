import React from "react";
import { Image, Box, Text, Flex } from "rebass";
import styled from "styled-components";
import { colors } from "./Utils";
import { Btn } from "./Button";

const Card = styled(Box)`
  background-color: ${colors.surfaceBackground};
  box-shadow: inset 0 0 0 2px ${colors.cardShadow},
    0 8px 8px -6px ${colors.cardShadow};
  border-radius: 16px;
  display: inline-block;
  padding: 24px;
  margin-right: 8px;
  overflow: hidden;
`;

export function SystemCard(props) {
  return (
    <Card width={[1 / 3]} textAlign="center" mr={3}>
      <Text mb={-2} color={colors.secondaryText} fontSize={3} fontWeight="bold">
        {props.label}
      </Text>
      <Text mb={2} fontSize={6} fontWeight="bold">
        {props.version}
      </Text>

      <Btn color="lightPurple" display="block">
        {props.button}
      </Btn>
    </Card>
  );
}

export function MediaCard(props) {
  return (
    <Box width={[1 / 2]} m={0}>
      <Card mr={4} mb={3} p={0}>
        <Image width="400" height="200" src="https://picsum.photos/400/200" />
        <Box p={"24px"}>
          <Text fontSize={3} mt={-3} mb={2} fontWeight="bold">
            {props.label}
          </Text>
          <Flex>
            <Btn color="lightRed">{props.button}</Btn>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
}

export default Card;
