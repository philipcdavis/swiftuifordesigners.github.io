import Head from "next/head";
import GradientMap from "../components/GradientMap";
import Logo from "../components/Logo";
import { Box, Heading, Text } from "rebass";
import { colors } from "../components/Utils";
import styled from "styled-components";

const Numeral = styled.div`
  background-color: ${(props) => (props.color ? props.color : colors.blue)};
  display: inline-block;
  border-radius: 6px;
  width: 34px;
  text-align: center;
  margin-right: 16px;
`;

export default function Start() {
  return (
    <>
      <Head />
      <GradientMap />
      <Logo />
      <Box
        mt={"240px"}
        width={["92%"]}
        mx={"auto"}
        sx={{ position: "relative", maxWidth: "40rem" }}
      >
        <Text textAlign="center" fontSize={[4, 5]} fontWeight="500">
          A Designer's Guide to SwiftUI
        </Text>
        <Text
          mb={5}
          textAlign="center"
          color={colors.secondaryText}
          fontSize={[2, 3]}
          fontWeight="600"
        >
          An Introduction to the Framework
        </Text>

        <p>
          SwiftUI is a framework that is well suited for designers. If you're
          interested in mobile, watch, tv, or mac app design, SwiftUI provides
          tools for robust animations, complex layouts, and advanced prototypes.
        </p>
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
          Live Preview you needed to build your app each time you wanted to make
          a UI change. While this is fine for many software engineers, it makes
          visual changes slow and tedious. SwiftUI came with a visual
          representation of your views that updated in real time, similar to
          other design tools.
        </p>
        <hr />
        <h1>How to Get Started</h1>
        <p>
          If you're interested in getting started with SwiftUI below are some
          tools, resources, and guides to get started. If you'd like to get more
          resources, I'm going to be sharing more resources over the coming
          months. > Sign Up
        </p>

        <h2>
          <Numeral color={colors.lightBlue}>1</Numeral>System Requirements
        </h2>
        <p>
          In order to use SwiftUI with live preview you'll need a Mac, and
          Xcode.
        </p>

        <h2>
          <Numeral color={colors.lightPurple}>2</Numeral> WWDC Videos
        </h2>
        <p>
          The videos from WWDC are a great way to get start learning SwiftUI.
          Here are 6 of my favorite videos.
        </p>

        <h2>
          <Numeral color={colors.lightRed}>3</Numeral>Apple's Official Tutorials
        </h2>
        <p>
          A great way to learn is to build. In these two tutorials provided by
          Apple, you'll learn how to create interfaces and build functioning
          apps using SwiftUI. Alright we are going to figure out how loud our
          keyboard is while we lets test it while i'm talking. And lets test it
          out while we are coding.
        </p>

        <h2>
          <Numeral color={colors.lightYellow}>4</Numeral>Community Resources
        </h2>
        <p>Hacking with Swift Swift by Sundell</p>

        <h2>
          {" "}
          <Numeral color={colors.lightGreen}>5</Numeral>SwiftUI for Designers
        </h2>
        <p>
          If you're interested in using SwiftUI, sign up below. I'm going to be
          creating and sharing resources tailored to designers.
        </p>
      </Box>
    </>
  );
}
