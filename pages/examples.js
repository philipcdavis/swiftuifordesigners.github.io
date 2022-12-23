import Head from "../components/Head";
import Link from "next/link";
import LogoSimple from "../components/LogoSimple";
import GradientHeader from "../components/GradientHeader";
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
      <GradientHeader />
      <Flex mt={[4, 5]}>
        <Box mx={"auto"}>
          <LogoSimple />
        </Box>
      </Flex>
      <Box
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
        <Box mx="auto" mt={3} mb={5} py={3} width={["100%", "500px"]}>
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
            headline="Material Effects"
            url="https://github.com/philipcdavis/swiftui-material-saturation-example"
            src="https://user-images.githubusercontent.com/3452573/141941248-0c0bbfa2-a042-4a77-bfc9-fca570c8c50c.png"
          />
          <ExampleCard
            headline="Vertical Pages for Swiping"
            url="https://github.com/philipcdavis/swiftui-vertical-paging-example"
            src="https://user-images.githubusercontent.com/3452573/141942206-3179461a-a4e2-4fc2-a3e1-0168a5b18f84.gif"
          />
        </Flex>
        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard
            headline="Recreating the Path Menu"
            url="https://github.com/philipcdavis/swiftui-pathMenu-example"
            src="https://user-images.githubusercontent.com/3452573/106305828-2fccd180-622b-11eb-8ed8-6c54d983167b.gif"
          />
          <ExampleCard
            headline="Vibrancy Visual Effect"
            url="https://github.com/philipcdavis/swiftui-vibrancy-example"
            src="https://user-images.githubusercontent.com/3452573/104947921-72202400-598a-11eb-9af6-438a790cac35.png"
          />
        </Flex>
        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard
            headline="Material Visual Effect"
            url="https://github.com/philipcdavis/swiftui-materials-example"
            src="https://user-images.githubusercontent.com/3452573/104756489-e0b27700-5729-11eb-9a92-93e0b8449a58.png"
          />
          <ExampleCard
            headline="Photo Tinted Shadows"
            url="https://github.com/philipcdavis/swiftui-photoTintedShadows-example"
            src="https://user-images.githubusercontent.com/3452573/106487708-f1c8eb00-6480-11eb-8b7c-fd0b94916db4.gif"
          />
        </Flex>
        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard
            headline="Gradient Text"
            url="https://github.com/philipcdavis/swiftui-gradientText-example"
            src="https://user-images.githubusercontent.com/3452573/104246207-92545e00-5433-11eb-9a39-5a46cf9e0247.png"
          />
          <ExampleCard
            headline="Using the Unsplash API"
            url="https://github.com/philipcdavis/swiftui-unsplashAPI-example"
            src="https://user-images.githubusercontent.com/3452573/105748363-0b61b400-5f10-11eb-84b6-cb3bfb110e30.png"
          />
        </Flex>

        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard
            headline="iPad hover effects"
            url="https://github.com/philipcdavis/swiftui-hoverEffect-example"
            src="https://user-images.githubusercontent.com/3452573/106030390-22351180-609c-11eb-961f-60220078e2eb.gif"
          />
          <ExampleCard
            headline="Drag Gestures"
            url="https://github.com/philipcdavis/swiftui-dragAnimation-example"
            src="https://user-images.githubusercontent.com/3452573/106492632-268b7100-6486-11eb-8ae4-4e6c4515e953.png"
          />
        </Flex>

        <Flex flexWrap={"wrap"} mx={[0, -2]}>
          <ExampleCard
            headline="Staggered Text Animation"
            url="https://github.com/philipcdavis/staggered-text-swiftui"
            src="https://user-images.githubusercontent.com/3452573/104361368-59be8e00-54e0-11eb-9faa-bed1f8cbb0d6.gif"
          />
          <ExampleCard
            headline="Faded Blur Effect"
            url="https://github.com/philipcdavis/swiftui-blurfade-example"
            src="https://user-images.githubusercontent.com/3452573/104817835-d196fc00-57f1-11eb-9317-54ec4ab42c50.png"
          />
        </Flex>
      </Box>
      <Box
        mt={"20px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "36rem" }}
      >
        <Box
          mt={"20px"}
          width={["92%"]}
          mx={"auto"}
          sx={{ position: "relative", maxWidth: "36rem" }}
        >
          <Text textAlign="center" color={colors.primaryText}>
            I’ll be emailing SwiftUI resources tailored to designers. <br />{" "}
            &#32;If you’re getting started or looking to level up, subscribe
            below.
          </Text>
          <Box mx="auto" mt={3} mb={5} py={3} width={["100%", "500px"]}>
            <SignupForm />
          </Box>
        </Box>
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
