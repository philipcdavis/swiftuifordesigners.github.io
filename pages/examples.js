import Head from "../components/Head";
import Link from "next/link";
import LogoSimple from "../components/LogoSimple";
import { Box, Flex, Text } from "rebass";
import { colors } from "../components/Utils";
import { ExampleCard } from "../components/Card";
import { BtnTwitter } from "../components/Button";
import SignupForm from "../components/SignupForm";

export default function Guide() {
  return (
    <>
      <Head
        title="SwiftUI examples for designers"
        description="A collection of SwiftUI examples for designers."
      />
      <Flex p={[3, 5]}>
        <LogoSimple />
        <Box flexGrow={1} />
        <Flex alignItems="center">
          <Link href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fswiftui.design%2Fexamples&via=philipcdavis&text=SwiftUI%20Examples%20for%20Designers">
            <a target="_blank">
              <BtnTwitter twitter>Share</BtnTwitter>
            </a>
          </Link>
        </Flex>
      </Flex>

      <Box
        mt={"20px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "36rem" }}
      >
        <Text
          color={colors.primaryText}
          mb={3}
          textAlign="center"
          fontSize={[3, 5]}
          fontWeight="700"
        >
          SwiftUI Examples for Designers
        </Text>

        <Text textAlign="center" color={colors.primaryText}>
          I’ll be emailing SwiftUI resources tailored to designers. <br />{" "}
          &#32;If you’re getting started or looking to level up, subscribe
          below.
        </Text>
        <Box mx="auto" mt={3} mb={4} py={3} width={["100%", "500px"]}>
          <SignupForm />
        </Box>
      </Box>
      <Box
        mt={"20px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "68rem" }}
      >
        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard
            headline="Gradient Text"
            src="https://user-images.githubusercontent.com/3452573/104246207-92545e00-5433-11eb-9a39-5a46cf9e0247.png"
          />
          <ExampleCard
            headline="Conditional Gestures"
            src="https://user-images.githubusercontent.com/3452573/106492632-268b7100-6486-11eb-8ae4-4e6c4515e953.png"
          />
        </Flex>
        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard
            headline="Photo Tinted Shadows"
            src="https://user-images.githubusercontent.com/3452573/106487708-f1c8eb00-6480-11eb-8b7c-fd0b94916db4.gif"
          />
          <ExampleCard
            headline="Recreating the Path Menu"
            src="https://user-images.githubusercontent.com/3452573/106305828-2fccd180-622b-11eb-8ed8-6c54d983167b.gif"
          />
        </Flex>
        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard
            headline="Cursor Types on iPad"
            src="https://user-images.githubusercontent.com/3452573/106030390-22351180-609c-11eb-961f-60220078e2eb.gif"
          />
          <ExampleCard src="https://user-images.githubusercontent.com/3452573/105748363-0b61b400-5f10-11eb-84b6-cb3bfb110e30.png" />
        </Flex>
        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard src="https://user-images.githubusercontent.com/3452573/104947921-72202400-598a-11eb-9af6-438a790cac35.png" />
          <ExampleCard src="https://user-images.githubusercontent.com/3452573/104817835-d196fc00-57f1-11eb-9317-54ec4ab42c50.png" />
        </Flex>
        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard src="https://user-images.githubusercontent.com/3452573/104756489-e0b27700-5729-11eb-9a92-93e0b8449a58.png" />
          <ExampleCard src="https://user-images.githubusercontent.com/3452573/104361368-59be8e00-54e0-11eb-9faa-bed1f8cbb0d6.gif" />
        </Flex>
      </Box>

      <Box
        mt={"20px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "36rem" }}
      >
        <Box pb={4}>
          <Box textAlign="center" mt={5} mb={4} width={["100%"]}>
            <Link href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fswiftui.design%2Fexamples&via=philipcdavis&text=SwiftUI%20Examples%20for%20Designers">
              <a target="_blank">
                <BtnTwitter twitter>Share on Twitter</BtnTwitter>
              </a>
            </Link>
            <Text opacity={0.5} mt={3}>
              <Link href="https://twitter.com/philipcdavis">
                <a target="_blank">@philipcdavis</a>
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
