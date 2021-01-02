import Head from "next/head";
import GradientBlur from "../components/GradientBlur";
import Link from "next/link";
import Logo from "../components/Logo";
import { Box, Flex, Text } from "rebass";
import { colors } from "../components/Utils";
import styled from "styled-components";
import { SystemCard, MediaCard } from "../components/Card";
import { BtnTwitter } from "../components/Button";
import SignupForm from "../components/SignupForm";

const Numeral = styled.div`
  background-color: ${(props) => (props.color ? props.color : colors.blue)};
  display: inline-block;
  border-radius: ${(props) => (props.large ? 12 : 6)}px;
  width: ${(props) => (props.large ? 48 : 34)}px;
  text-align: center;
  margin-right: ${(props) => (props.large ? 0 : 16)}px;
  font-weight: bold;
`;

export default function Guide() {
  return (
    <>
      <Head />
      <GradientBlur />
      <Logo />
      <Box
        mt={"130px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "36rem" }}
      >
        <Text
          color={colors.primaryText}
          mb={4}
          textAlign="center"
          fontSize={[3, 5]}
          fontWeight="700"
        >
          A Designer's Guide to SwiftUI
        </Text>

        <p>
          SwiftUI is a powerful tool for designers. You don't need to be a
          traditional iOS engineer to extract lots of value from the framework.
          Using SwiftUI you can do some truly amazing things.
        </p>

        <ul>
          <li>You can build fully functional apps.</li>
          <li>
            You can create interruptable animations and advanced prototypes.
          </li>
          <li>
            You can work closer with engineering to get the design details just
            right.
          </li>
          <li>You can compose components to build advanced layouts.</li>
          <li>You can create reusable components and styles.</li>
        </ul>

        <p>SwiftUI is a design tool from the future.</p>

        <p>
          SwiftUI is built on the Swift programming language. A driving
          principle of the Swift language is that it progressively discloses
          complexity. This means you can get started with little programming
          experience, but won't be hampered when you need advanced
          functionality. It's a great starter coding language.
        </p>
        <p>
          SwiftUI came with an update to Xcode called Live Preview. Prior to
          Live Preview you needed to build your app each time you wanted to view
          a UI change. While this is fine for many software engineers, it makes
          visual changes slow and tedious. SwiftUI came with a visual
          representation of your views that updated in real time, similar to
          other design tools.
        </p>
        <hr />
        <Text
          color={colors.primaryText}
          mb={5}
          textAlign="center"
          fontSize={[3, 4]}
          fontWeight="700"
        >
          How to Get Started
        </Text>
        <p>
          If you're interested in getting started with SwiftUI below are some
          tools, resources, and guides to get started.
        </p>

        <h2>
          <Numeral color={colors.lightPurple}>1</Numeral>System Requirements
        </h2>
        <p>
          In order to use SwiftUI with live preview you'll need a Mac, and
          Xcode.
        </p>
        <Flex mb={5}>
          <SystemCard label="MacOS" version="10.15+" button="Check" />
          <SystemCard label="Xcode" version="11.0+" button="Download" />
        </Flex>

        <h2>
          <Numeral color={colors.lightRed}>2</Numeral> WWDC Videos
        </h2>
        <p>
          The videos from WWDC are a great way to get start learning SwiftUI.
          Here are 6 that I found especially helpful.
        </p>
        <Flex mb={5} flexWrap="wrap">
          <MediaCard
            label="How to watch a video that is really long"
            button="Watch"
          />
          <MediaCard label="MacOS" button="Watch" />
          <MediaCard label="MacOS" button="Watch" />
          <MediaCard label="MacOS" button="Watch" />
          <MediaCard label="MacOS" button="Watch" />
          <MediaCard label="MacOS" button="Watch" />
        </Flex>

        <h2>
          <Numeral color={colors.lightYellow}>3</Numeral>Apple's Official
          Tutorials
        </h2>
        <p>
          A great way to learn is to build. In these two tutorials provided by
          Apple, you'll learn how to create interfaces and build functioning
          apps using SwiftUI.
        </p>

        <Flex mb={5} flexWrap="wrap">
          <MediaCard
            label="How to watch a video that is really long"
            button="Watch"
          />
          <MediaCard label="MacOS" button="Watch" />
        </Flex>

        <h2>
          <Numeral color={colors.lightGreen}>4</Numeral>Community Resources
        </h2>
        <p>
          There are a number of wonderful resources created by members of the
          Swift community. Here are two that I found helpful.
        </p>
        <Flex mb={5} flexWrap="wrap">
          <MediaCard label="Hacking with Swift" button="Watch" />
          <MediaCard label="Swift by Sundell" button="Watch" />
        </Flex>

        <Box textAlign="center">
          <h1>
            <Numeral large color={colors.lightBlue}>
              5
            </Numeral>
          </h1>

          <h2>SwiftUI Resources for Designers</h2>
          <Text mt={4}>
            I’ll be creating SwiftUI resources tailored to designers.
          </Text>
          <Text>
            If you’re getting started or looking to level up, this is for you.
          </Text>
          <Box mx="auto" mt={3} mb={4} py={3} width={["100%", "500px"]}>
            <SignupForm />
          </Box>
        </Box>

        <Box pb={4}>
          <Box textAlign="center" mt={5} mb={4} width={["100%"]}>
            <Link href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fswiftui.design%2Fguide&via=philipcdavis&text=A%20Designer%27s%20Guide%20to%20SwiftUI">
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
