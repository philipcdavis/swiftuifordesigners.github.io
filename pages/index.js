import Head from "next/head";
import Link from "next/link";
import GradientBlur from "../components/GradientBlur";
import Logo from "../components/Logo";
import { Box, Text } from "rebass";
import { colors } from "../components/Utils";
import { Btn } from "../components/Button";
import SignupForm from "../components/SignupForm";

export default function Home() {
  return (
    <>
      <Head />
      <GradientBlur />
      <Logo />
      <Box
        mt={"30px"}
        width={["92%"]}
        textAlign="center"
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "36rem" }}
      >
        <Text
          color={colors.primaryText}
          mb={4}
          textAlign="center"
          fontSize={[3, 4]}
          fontWeight="700"
        >
          SwiftUI Resources for Designers
        </Text>
        <Text mt={4}>
          I’ll be creating SwiftUI resources tailored to designers.
        </Text>
        <Text>
          If you’re getting started or looking to level up, this is for you.
        </Text>
        <Box mx="auto" mt={3} mb={4} py={3} width={["100%", "500px"]}>
          <SignupForm />
        </Box>

        <Link href="/guide">
          <Btn color="gray2">Read the Guide</Btn>
        </Link>
      </Box>
    </>
  );
}
