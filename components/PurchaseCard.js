import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Text, Box, Heading, Flex } from "rebass/styled-components";
import { BtnRainbow } from "./Button";
import { colors } from "../components/Utils";

const Card = styled(Box)`
  border-radius: 36px;
  background-color: var(--surfaceHighlight);
  box-shadow: 0 3px 11px 0 var(--cardShadow), 0 1px 4px 0 var(--cardShadow);
  max-width: 34em;

  @media (max-width: 600px) {
    border-radius: 16px;
  }
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
    background: var(--primaryText);
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
`;

const Smallar = styled(Text)`
  color: var(--primaryText);
  position: absolute;
  top: 20px;
  left: 0px;
`;

const PurchaseCard = function (props) {
  return (
    <Box px={2}>
      <Card mx="auto" mt={[4, 6]} px={[3, 4, "100px"]} py={[4, 5]}>
        <Box textAlign={"center"}>
          <Text fontWeight="600" fontSize={(4, 5)} color={colors.primaryText}>
            Introductory Pricing
          </Text>
          <Text mb={3}>
            {
              "Pay once for full access. If you're not happy with the course, let me know within 7 days and I'll issue a refund"
            }
          </Text>

          <Strikethrough fontWeight="600" fontSize={[4]}>
            $40
          </Strikethrough>
          <Box mt={-3} mb={3}>
            <Price fontWeight="600" color={colors.primaryText} fontSize={[7]}>
              <Smallar fontSize={[4]}>$</Smallar>
              <Largar>25</Largar>
            </Price>
          </Box>
          <Link href="https://philipdavis.gumroad.com/l/swiftui">
            <a target="_blank">
              <BtnRainbow>Purchase</BtnRainbow>
            </a>
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default PurchaseCard;
